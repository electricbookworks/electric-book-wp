
<?php

function ebt_bookmarks_get_user_bookmarks()
{
    $bookmarks = [];

    return $bookmarks;
}

function ebt_bookmarks_update_user_bookmarks($bookmarks)
{

    return false;
}

function ebt_bookmarks_register_routes()
{
    register_rest_route('ebt-bookmarks/v1', '/bookmarks', [
        [
            'methods' => 'GET',
            'callback' => 'ebt_bookmarks_get_user_bookmarks',
            'permission_callback' => function () {
                return current_user_can('edit_others_posts');
            },
        ], 
        [
            'methods' => 'POST',
            'callback' => 'ebt_bookmarks_update_user_bookmarks',
            'permission_callback' => function () {
                return current_user_can('edit_others_posts');
            },
        ],
    ]);
}

