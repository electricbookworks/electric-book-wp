<?php
/**
 * Plugin Name:       Electric book Bookmark sync
 * Description:       Persist bookmarks to Wordpress database
 * Version:           0.0.1
 */

// Exit if accessed directly
defined('ABSPATH') || exit;

require_once('includes/plugin.php');
register_activation_hook(__FILE__, 'ebt_bookmarks_install');
register_deactivation_hook(__FILE__, 'ebt_bookmarks_deactivate');
add_action('plugins_loaded', 'ebt_bookmarks_update');

require_once('includes/endpoints.php');
add_action('rest_api_init', 'ebt_bookmarks_register_routes');
