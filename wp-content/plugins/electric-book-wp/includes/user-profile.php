<?php

defined('ABSPATH') || exit;

function electric_book_wp_get_user_details($user_id)
{
    if (!$user = get_userdata($user_id)) {
        return false;
    }

    return $user;
}

add_action('rest_api_init', function () {
    register_rest_route(
        'core',
        '/user/(?P<id>\d+)',
        [
            'methods' => 'GET',
            'callback' => 'electric_book_wp_get_user_details',
        ]
    );
});
