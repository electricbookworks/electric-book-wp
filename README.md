# Electric Book publications on WordPress servers

This plugin is for WordPress sites that include Electric Book publications in subfolders.

For example, [core.econ.org](https://core.econ.org) is a WordPress site, and [core-econ.org/experiencing-economics](https://core-econ.org/experiencing-economics) is an Electric Book publication. This plugin restricts access to the 'Instructors' pages to users who are logged into core-econ.org and have teacher's accounts.


## Usage

To restrict pages, after installing the plugin, in WordPress admin go to the Electric Book menu and follow the instructions. You'll add the URLs of the book pages you want to restrict, and the types of users who should have access to them.


## Setup

1. To install the plugin, copy `wp-content/plugins/electric-book-wp` here to the `wp-content/plugins/` folder in your WordPress installation.
2. In the WordPress admin, activate the plugin.

Depending on your needs, you may need to check and change some WordPress server settings for this to work. And you may want to develop your own landing pages for users who aren't logged in, or don't have the necessary user privileges to see a restricted page.

For example, if you visit [core-econ.org/experiencing-economics](https://www.core-econ.org/experiencing-economics/) and click 'Instructors' without being logged in (or logged in, but without a teacher's user registration), you'll see a landing page that was custom-built for CORE explaining that content is restricted to teachers.

Here are some technical notes on implementation.

1. WordPress site needs to have rewrite rules enabled for this to work.
2. We have to forbid direct access to asset files (e.g. CSS, JS, images) that fall under restricted URLs, regardless of logged-in status. Only HTML files are served. This is due to `readfile()` restrictions when handed over to WP/PHP and the fact that the plugin can't do any properly secure logged-in checks before it gets to WordPress.
3. While testing, your browser may cache the HTML page and therefore serve it to you without going back to the server again. So keep this in mind when testing logged-in and user roles behaviour on newly configured path settings.
4. Fragment links can't be persisted if they are in the originating URL before a redirect to login. Hash values aren't sent to the server, so there's no way of persisting them during the validation journey, unless the hash value is saved in the client via JS. Once or if a user has access, they will work normally.
5. Take special note of the token validation required when creating a redirect template of your own. This is to guard against potential XSS and CSRF hacks directed at your redirect page. The `/ebwp-redirect-example.php` is an example this implementation in a file external to WP templating, and [the default page template](https://github.com/electricbookworks/electric-book-wp/blob/master/wp-content/themes/serve-restricted-html/page.php) in the default theme is an example of a WP template implementation.


## Future development

This plugin may be extended in future to handle other interactions between Electric Book publications and their WordPress hosts. For example, it might save and sync users' bookmarks, or allow WordPress editors to post user notifications to book pages.

In addition, the code here should be made more object orientated and DRY, using classes and a greater separation of concerns.


## Technical background

Why does the plugin use PHP `readfile()` to serve the files?

We tried to see if there is a way around using PHP's `readfile()` since we were concerned that it would require more resources from the server. Although this is the most efficient way for PHP to serve the static files (see [an example of some time and memory benchmarking here](https://www.raditha.com/wiki/Readfile_vs_include/), we tried to find another way of achieving this that is more performant. In the end, we went down a few rabbit holes to no avail on this.

Warren 1: After much tinkering we weren't able to find any way of using Apache to serve the files via credential validation in the headers in a way that isn't spoofable. This means it has to be handed over to PHP, which has to process the requested file in some way or the other.

Warren 2: Even if we went with an AJAX approach, all the same server-side steps would have to be carried out to provide a secure and correct XHR response. Also, if we use AJAX solely as a means of checking if a user has the correct credentials, the actual content would need to be already downloaded to the client, just waiting to be displayed in the document. That, or the current document (which is merely a placeholder) would then load the file from another location. For obvious reasons both these approaches can be easily sidestepped by anyone who knows what they are doing. So, again, not actually secure.

Warren 3: We then explored another approach entirely where the plugin acts a 'run once only on demand' script that converts all your files into actual WP pages/posts in the backend. All pages would be children of a dynamically generated custom post type, e.g 'Experiencing economics', with its own section in the admin area. This would allow for much easier management (e.g. if you want to bulk delete or edit those pages without worrying about touching the rest of the site's content, or if you wanted to limit the management of the custom post types in the admin area to specific user roles). This all started to sound quite grand until we realised the obvious truth: this will use way more resources than than the `readfile()` approach. It would involve rewrite mapping, PHP processing, and queries to the database.

A caching plugin wouldn't help either with approach, because the techniques used would not be able to determine (1) if a user is logged in a non-spoofable way and (2) what type of user role they are (WP doesn't create any header details for this). For example, one of the most popular caching plugins written by a member of the Automattic team, WP Super Cache, checks to see if a user is logged in like this:

```
RewriteCond %{HTTP:Cookie} !^.*(comment_author_|wordpress_logged_in|wp-postpass_).*$
```

This is easily hackable. Just create a wordpress_logged_in cookie in your client with any value whatsoever, and the above condition will pass. For the sake of the caching plugin this isn't really much of a security issue, because all it means is that the spoofer won't get the cached version (if the option to not serve cached files to logged in users is selected in your settings, that is). But since this check is at the crux of what our plugin is all about, it is completely unhelpful.

Result: using PHP `readfile()` to serve the files seems to be most efficient way to do this that is actually secure.


## Development

You can use Docker to run the plugin for development, or run your own WordPress instance.


### Using docker

Docker generates a WordPress instance with all core files and LAMP requirements. It also installs phpMyAdmin. Follow these installation steps:

1. Make sure [Docker is installed](https://www.docker.com) on your machine, and you have started it.
2. Navigate to the root of the repo and spin up the container by running, `$ docker-compose up`. You can use [the `-d` flag](https://docs.docker.com/engine/reference/run/#detached--d) after `up` to daemonise the process.
3. Once you have done an initial Grunt compilation (see above), you'll be able to view the site at http://localhost:8080.
4. You can navigate to phpMyAdmin on port 8181: http://localhost:8181.

To stop the docker container, run `$ docker-compose stop` in the root of the project folder. This stops the container from running, but it still exists.

To remove the container entirely, run `$ docker-compose down`. This option allows for better housekeeping.

Running `$ docker-compose up` again will bring the container back to life, regardless of whether you used `stop` or `down`.


### Using your own WordPress instance

If Docker isn't available to you, you need to test this with some manual steps.

1. Set up your own vanilla WordPress installation. ([Local](https://localwp.com/) is a very easy way to do this.)
2. Optionally, copy the `doing-economics` folder to the WordPress root. (This is sample content for testing, borrowed from CORE economics unbder their open licence. Please note this copy is not [the up-to-date book](https://localwp.com/).)
3. Copy `wp-content/plugins/electric-book-wp` to the `wp-content/plugins/` folder in your WordPress installation.
4. In the WordPress admin, activate the plugin.
5. Optionally, to test the redirect-page functionality, copy `ebwp-redirect-example.php` to your WordPress root. When creating a restricted-page path, set 'Redirect users to' to `/ebwp-redirect-example.php`. You can also use [the default page template](https://github.com/electricbookworks/electric-book-wp/blob/master/wp-content/themes/serve-restricted-html/page.php) used by the default theme to test the redirect functionality. So, for example, by setting the 'Redirect users to' field to `/sample-page`.
