## About this alpha version

The design brought about a huge amount of new functionality not originally anticipated. So, this is effectively a bare bones demo with all the newly required features. Please test and confirm you are happy with the underlying functionality.

There's a lot of cleaning up in the code still to be done. It should be made more object orientated and DRY, using classes and a greater separation of concerns.

In terms of the visual/interaction design, the saved paths can still be laid out in a table quite easily per the design. I just haven't got to it. Outside of this, though, I recommend against creating a self-styled interface that doesn't simply use what markup and styles WP provides. The reason is that WordPress admin styles and markup are badly scoped. This means future core updates can easily break custom markup and styling. This is fine if there's budget and availability to make sure it is constantly up to date, but this may not always be the case. 

I'm not a fan of how WP lays out forms by default, but it may be worth accepting to make the plugin more robust to future updates.

## Caveats

1. WordPress site needs to have rewrite rules enabled for this to work.
2. I have to forbid direct access to asset files (e.g. CSS, JS, images) that fall under restricted URLs, regardless of logged-in status. Only HTML files are served. This is due to `readfile()` restrictions when handed over to WP/PHP and the fact that I can't do any properly secure logged-in checks before it gets to WordPress.
3. While testing, your browser may cache the HTML page and therefore serve it to you without going back to the server again. So please keep this in mind when testing logged-in and user roles behaviour on newly configured path settings.
4. Fragment links can't be persisted if they are in the originating URL before a redirect to login. Hash values aren't sent to the server, so there's no way of persisting them during the validation journey. Once or if a user has access, they will work normally.
5. Please take special note of the token validation required when creating a redirect template of your own. This is to guard against potential XSS and CSRF hacks directed at your redirect page. The `/ebwp-redirect-example.php` is an example this implementation in a file external to WP templating, and [the default page template](https://github.com/alexmaughan/electric-book-wp/blob/master/wp-content/themes/serve-restricted-html/page.php) in the default theme is an example of a WP template implementation.

## Why it uses PHP `readfile()` to serve the files

I tried to see if there is a way around using PHP's readfile() in light of the comment from Bravand that it would require more resources from the server. Although this is the most efficient way for PHP to serve the static files (that's why I went with it, see [an example of some time and memory benchmarking here](https://www.raditha.com/wiki/Readfile_vs_include/), I've been trying to think of another way of achieving this that is more performant. But it looks like I've essentially gone down a few rabbit holes to no avail on this.

Warren 1: After much tinkering I still wasn't able to find any way of using Apache to serve the files via credential validation in the headers in a way that isn't spoofable. This means it has to be handed over to PHP, which has to process the requested file in some way or the other.

Warren 2: Even if we went with an AJAX approach, all the same server-side steps would have to be carried out to provide a secure and correct XHR response. Also, if we use AJAX solely as a means of checking if a user has the correct credentials, the actual content would need to be already downloaded to the client, just waiting to be displayed in the document. That, or the current document (which is merely a placeholder) would then load the file from another location. For obvious reasons both these approaches can be easily sidestepped by anyone who knows what they are doing. So, again, not actually secure.

Warren 3: I then thought about another approach entirely where the plugin acts a "run once only on demand" type script that converts all your files into actual WP pages/posts in the backend. All pages would be children of a dynamically generated custom post type, e.g "Doing economics", with its own section in the admin area. This would allow for much easier management (e.g. if you want to bulk delete or edit those pages without worrying about touching the rest of the site's content, or if you wanted to limit the management of the custom post types in the admin area to specific user roles). This all started to sound quite grand to me until I realised the obvious truth: this will use way more resources than than the readfile() approach. It would involve rewrite mapping, PHP processing, and queries to the DB. 

A caching plugin wouldn't help either with approach, because the techniques used would not be able to determine 1) if a user is logged in a non spoofable way and 2) what type of user role they are (WP doesn't create any header details for this). For example, if you delve into one of the most popular caching plugins written by a member of the Automattic team, WP Super Cache, checks to see if a user is logged in are done like so:
```
RewriteCond %{HTTP:Cookie} !^.*(comment_author_|wordpress_logged_in|wp-postpass_).*$
```
This is easily hackable. Just create a wordpress_logged_in cookie in your client with any value whatsoever, and the above condition will pass. For the sake of the caching plugin this isn't really much of a security issue, because all it means is that the spoofer won't get the cached version (if the option to not serve cached files to logged in users is selected in your settings, that is). But seeing as this check is at the crux of what our plugin is all about, it is completely unhelpful.

Result: I'm right back to where I was in the beginning! The only difference being is that I am way more confident that my original POC seems to be most efficient way to do this that is actually secure.


## Using Docker

Docker generates a WordPress instance with all core files and LAMP requirements. It also installs phpMyAdmin. Follow these installation steps:

1. Make sure [Docker is installed](https://www.docker.com) on your machine, and you have started it.
2. Navigate to the root of the repo and spin up the container by running, `$ docker-compose up`. You can use the `-d` flag after `up` to daemonise the process.
3. Once you have done an initial Grunt compilation (see above), you'll be able to view the site at http://localhost:8080.
4. You can navigate to phpMyAdmin on port 8181: http://localhost:8181.

### Stopping and shutting down Docker

To stop the docker container, run `$ docker-compose stop` in the root of the project folder. This stops the container from running, but it still exists.

To remove the container entirely, run `$ docker-compose down`. This option allows for better house keeping.

Running `$ docker-compose up` again will bring the container back to life, regardless of whether you used `stop` or `down`.

## Using your own WordPress instance

If Docker isn't available to you, you need to test this with some manual steps.

1. Set up your own vanilla WordPress installation.
2. Optionally, copy the `doing-economics` folder to the WordPress root. This is only sample content for testing.
3. Copy `wp-content/plugins/electric-book-wp` to the `wp-content/plugins/` folder in your WordPress installation.
4. In the WordPress admin, activate the plugin.
5. Optionally, to test the redirect-page functionality, copy `ebwp-redirect-example.php` to your WordPress root. When creating a restricted-page path, set 'Redirect users to' to `/ebwp-redirect-example.php`. You can also use [the default page template](https://github.com/alexmaughan/electric-book-wp/blob/master/wp-content/themes/serve-restricted-html/page.php) used by the default theme to test the redirect functionality. So, for example, by setting the 'Redirect users to' field to `/sample-page`.
