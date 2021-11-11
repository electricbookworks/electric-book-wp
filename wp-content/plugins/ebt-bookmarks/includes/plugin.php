<?php

global $ebt_bookmarks_db_version;

$ebt_bookmarks_db_version = '0.2';

function ebt_bookmarks_install()
{
    global $wpdb;
    global $ebt_bookmarks_db_version;

    $table_name = $wpdb->prefix . 'ebt_bookmarks';

    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE $table_name (
        id INT auto_increment NOT NULL,
        user_id INT NOT NULL,
	    payload json NOT NULL,
        PRIMARY KEY  (id)
	) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
    update_option('ebt_bookmarks_db_version', $ebt_bookmarks_db_version);
}

function ebt_bookmarks_update()
{
    global $ebt_bookmarks_db_version;
    if (get_site_option('ebt_bookmarks_db_version') != $ebt_bookmarks_db_version) {
        ebt_bookmarks_deactivate();
        ebt_bookmarks_install();
    }
}

function ebt_bookmarks_deactivate()
{
    global $wpdb;

    $table_name = $wpdb->prefix . 'ebt_bookmarks';
    $sql = "DROP TABLE IF EXISTS $table_name;";
    $wpdb->query($sql);

    delete_option('ebt_bookmarks_db_version');
}
