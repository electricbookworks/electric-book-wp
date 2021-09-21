<?php

defined('ABSPATH') || exit;

add_action('init', 'electric_book_wp_plugin_init');
add_action('rest_api_init', function () {
    register_rest_route(
        'core/v1',
        '/user_details',
        [
            'methods' => 'GET',
            'callback' => 'electric_book_wp_get_user_details',
        ]
    );
});


function electric_book_wp_plugin_init(){
    global $current_user, $electric_book_wp_user_id;
    $electric_book_wp_user_id = $current_user->id;
}   

function electric_book_wp_get_user_details()
{
    global $electric_book_wp_user_id;

    if (!$user = get_userdata($electric_book_wp_user_id)) {
        return false;
    }

    $user_data = (array)$user->data;
    unset($user_data['user_pass']);

    return array_merge($user_data, ["capabilities" => $user->caps, "roles" => $user->roles]);
}
