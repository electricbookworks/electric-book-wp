<?php

defined('ABSPATH') || exit;

function electric_book_wp_htaccess_restricted_paths($action = null, $pathPassed = null)
{

  $begin_Comment = "\n" . '# BEGIN Electric Book WP' . "\n";
  $end_Comment = '# END Electric Book WP' . "\n";

  if ($action === 'delete' && $pathPassed) {
    $htaccess_path = ABSPATH . '/' . $pathPassed . '/.htaccess';
    $htaccess_content = file_get_contents($htaccess_path);
    $existing_rules = between($begin_Comment, $end_Comment, $htaccess_content);
    $htaccess_content_updated = str_replace($begin_Comment . $existing_rules . $end_Comment, '', $htaccess_content);
    file_put_contents($htaccess_path, $htaccess_content_updated);
  } else {
    $restrict_options_all = get_option('electric_book_wp_restrict_all');
    $has_saved_paths = !empty($restrict_options_all) && is_array($restrict_options_all);
    if ($has_saved_paths) {
      // create htaccess file/rules for each path
      foreach ($restrict_options_all as $path) {
        $htaccess_path = ABSPATH . '/' . $path['path'] . '/.htaccess';
        $htaccess_content = file_get_contents($htaccess_path);
        $rules = $begin_Comment;
        // serve the html via PHP
        $path_rules = '<IfModule mod_rewrite.c>' . "\n";
        $path_rules .= 'RewriteEngine On' . "\n";
        $path_rules .= 'RewriteCond %{REQUEST_URI} \.(?:html|htm)$ [NC]' . "\n";
        $path_rules .= 'RewriteRule . ' . get_site_url() . '/$1 [R=301]' . "\n";
        $path_rules .= '</IfModule>' . "\n";
        $path_rules .= '<IfModule mod_rewrite.c>' . "\n";
        $path_rules .= 'RewriteEngine On' . "\n";
        $path_rules .= 'RewriteCond %{REQUEST_URI} \.(?:html|htm)$ [NC]' . "\n";
        $path_rules .= 'RewriteRule . /index.php?electric-book-wp-restricted-path=' . $path['path'] . '&electric-book-wp-serve=%{REQUEST_URI} [L]' . "\n";
        $path_rules .= '</IfModule>' . "\n";
        $rules .= $path_rules;
        $rules .= $end_Comment;
        // Add rules to htaccess file. If one doesn't exist one will be created.
        if (strpos($htaccess_content, $begin_Comment) !== false) {
          $existing_rules = between($begin_Comment, $end_Comment, $htaccess_content);
          $htaccess_content_updated = str_replace($begin_Comment . $existing_rules . $end_Comment, $rules, $htaccess_content);
          file_put_contents($htaccess_path, $htaccess_content_updated);
        } else {
          file_put_contents($htaccess_path, $rules, FILE_APPEND | LOCK_EX);
        }
      }
    }
  }
}
