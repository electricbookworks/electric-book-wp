<?php
/**
 * Plugin Name:       Electric book bookmark sync
 * Description:       Persist bookmarks to Wordpress database
 * Version:           1.0.0
 */

// Exit if accessed directly
defined('ABSPATH') || exit;

define('EB_BOOKMARK_MAIN_FILE', __FILE__);

require_once dirname(__FILE__) . '/includes/plugin.php';
require_once dirname(__FILE__) . '/includes/endpoints.php';
