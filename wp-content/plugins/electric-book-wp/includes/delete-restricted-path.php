<?php

defined('ABSPATH') || exit;

function electric_book_wp_delete_restricted_path()
{
  if (!empty($_POST['delete_restricted_path'])) {
    $restrict_path_key = '"' . esc_attr(stripslashes($_POST['delete_restricted_path'])) . '"';
    $restrict_options_all = get_option('electric_book_wp_restrict_all');
    $restricted_path_string = $restrict_options_all[$restrict_path_key]['path'];
    unset($restrict_options_all[$restrict_path_key]);
    $restrict_options_all_updated = update_option('electric_book_wp_restrict_all', $restrict_options_all);
    if ($restrict_options_all_updated) {
      electric_book_wp_htaccess_restricted_paths('delete', $restricted_path_string);
      add_settings_error('electric_book_wp_messages', 'electric_book_wp_message', __('Restricted path setting deleted', 'electric_book_wp'), 'success');
    }
  }
}

add_action('admin_init', 'electric_book_wp_delete_restricted_path');
