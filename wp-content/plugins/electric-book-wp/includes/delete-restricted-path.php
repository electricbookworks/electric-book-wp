<?php

function electric_book_wp_delete_restricted_path() {
  if (isset($_POST['delete_restricted_path']) && !empty($_POST['delete_restricted_path'])) {
    $restrict_path_key = '"' . esc_attr(stripslashes($_POST['delete_restricted_path'])) . '"';
    $restrict_options_all = get_option('electric_book_wp_restrict_all');
    unset($restrict_options_all[$restrict_path_key]);
    $restrict_options_all_updated = update_option('electric_book_wp_restrict_all', $restrict_options_all);
    if ($restrict_options_all_updated) {
      electric_book_wp_htaccess_restricted_paths();
      add_settings_error('electric_book_wp_messages', 'electric_book_wp_message', __('Restricted path setting deleted', 'electric_book_wp'), 'success');
    }
  }
}

add_action('admin_init', 'electric_book_wp_delete_restricted_path');
