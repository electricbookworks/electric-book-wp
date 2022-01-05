<?php

const COOKIE_NAME = "eb_bookmarks";

global $current_user;
global $eb_bookmarks_db_version;
global $eb_bookmarks_user_id;

$eb_bookmarks_db_version = '1.0';

function eb_bookmarks_plugin_init()
{
    global $current_user, $eb_bookmarks_user_id;

    $eb_bookmarks_user_id = ($current_user) ? $current_user->id : null;

    if ($eb_bookmarks_user_id > 0) {
        if(!isset($_COOKIE[COOKIE_NAME])) {
            setcookie(COOKIE_NAME, true, 0, "/");
        }
    } else {
        setcookie(COOKIE_NAME, null, -1, "/");
    }
}

function eb_bookmarks_install()
{
    global $wpdb;
    global $eb_bookmarks_db_version;

    $bookmarks_table_name = $wpdb->prefix . 'eb_bookmarks';
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE $bookmarks_table_name (
        user_id INT NOT NULL,
	    payload json NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY  (user_id)
	) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
    update_option('eb_bookmarks_db_version', $eb_bookmarks_db_version);
}

function eb_bookmarks_update()
{
    global $eb_bookmarks_db_version;

    if (get_site_option('eb_bookmarks_db_version') != $eb_bookmarks_db_version) {
        eb_bookmarks_deactivate();
        eb_bookmarks_install();
    }
}

function eb_bookmarks_deactivate()
{
    global $wpdb;

    $table_name = $wpdb->prefix . 'eb_bookmarks';

    $wpdb->query("DROP TABLE IF EXISTS $table_name;");

    delete_option('eb_bookmarks_db_version');
}

add_action('init', 'eb_bookmarks_plugin_init');
add_action('plugins_loaded', 'eb_bookmarks_update');

register_activation_hook(eb_BOOKMARK_MAIN_FILE, 'eb_bookmarks_install');
register_deactivation_hook(eb_BOOKMARK_MAIN_FILE, 'eb_bookmarks_deactivate');