<?php

defined('ABSPATH') || exit;

function electric_book_wp_htaccess_restricted_paths() {
  $begin_Comment = "\n" . '# BEGIN Electric Book WP' . "\n";
  $end_Comment = '# END Electric Book WP' . "\n";

  $htaccess_path = ABSPATH . '/.htaccess';
  $htaccess_content = file_get_contents($htaccess_path);

  $restrict_options_all = get_option('electric_book_wp_restrict_all');
  $has_saved_paths = !empty($restrict_options_all) && is_array($restrict_options_all);

  if ($has_saved_paths) {

    $path_rules = '';
    // generate saved paths
    foreach ($restrict_options_all as $path) {
      $path_rules .= '<IfModule mod_rewrite.c>' . "\n";
      $path_rules .= 'RewriteEngine On' . "\n";
      $path_rules .= 'RewriteCond %{REQUEST_URI} \.(?:html|htm)$ [NC]' . "\n";
      $path_rules .= 'RewriteCond %{REQUEST_FILENAME} ' . $path['path'] . "\n";
      // serve the html via PHP
      $path_rules .= 'RewriteRule . /index.php?electric-book-wp-restricted-path=' . $path['path'] . '&electric-book-wp-serve=%{REQUEST_URI} [L]' . "\n";
      $path_rules .= '</IfModule>' . "\n";
    }

    $rules = $begin_Comment;

    // print out saved paths
    $rules .= $path_rules;

    // Have to forbid direct access to asset files at restricted urls regardless of logged-in status.
    // This is due to fileread() restrictions when handed over to PHP.
    $asset_rules = '';
    foreach ($restrict_options_all as $path) {
      $asset_rules .= '<IfModule mod_rewrite.c>' . "\n";
      $asset_rules .= 'RewriteEngine On' . "\n";
      $asset_rules .= 'RewriteCond %{REQUEST_FILENAME} ' . $path['path'] . "\n";
      $asset_rules .= 'RewriteCond %{HTTP_REFERER} \.(gif|jpeg|jpg|png|svg|bmp|mov|webp|css|js)$ [NC]' . "\n";
      $asset_rules .= 'RewriteRule . /index.php?error=404' . "\n";
      $asset_rules .= '</IfModule>' . "\n";
    }

    // print out saved paths
    $rules .= $asset_rules;

    $rules .= $end_Comment;

    if (strpos($htaccess_content, $begin_Comment) !== false) {
      $existing_rules = between($begin_Comment, $end_Comment, $htaccess_content);
      $htaccess_content_updated = str_replace($begin_Comment . $existing_rules . $end_Comment, $rules, $htaccess_content);
      file_put_contents($htaccess_path, $htaccess_content_updated);
    } else {
      file_put_contents($htaccess_path, $rules, FILE_APPEND | LOCK_EX);
    }

  } else {
    $existing_rules = between($begin_Comment, $end_Comment, $htaccess_content);
    $htaccess_content_updated = str_replace($begin_Comment . $existing_rules . $end_Comment, '', $htaccess_content);
    file_put_contents($htaccess_path, $htaccess_content_updated);
  }

}
