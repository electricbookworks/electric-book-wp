<?php

defined('ABSPATH') || exit;

add_action('init', 'electric_book_wp_plugin_init');

/**
 * Endpoint should be accessible at `yoursite.com/wp-json/eb/v1/user_details`
 * or (if pretty permalinks not enabled) `yoursite.com/?rest_route=/eb/v1/user_details`
 */
add_action('rest_api_init', function () {
    register_rest_route(
        'eb/v1',
        '/user_details',
        [
            'methods' => 'GET',
            'callback' => 'electric_book_wp_get_user_details',
        ]
    );
});


/**
 * Assign the currently logged-in user's id to a global variable.
 */
function electric_book_wp_plugin_init()
{
    global $current_user, $electric_book_wp_user_id;
    $electric_book_wp_user_id = ($current_user) ? $current_user->id : null;
}

/**
 * Expose currently logged-in user's details along with assigned roles and capabilities
 */
function electric_book_wp_get_user_details()
{
    global $electric_book_wp_user_id;

    if (is_null($electric_book_wp_user_id) or !$user = get_userdata($electric_book_wp_user_id)) {
        // no user found, not logged in
        return false;
    }

    // we cast the user data object to an array
    $user_data = (array)$user->data;

    // remove password hash from the array
    unset($user_data['user_pass']);

    return array_merge($user_data, ["capabilities" => $user->caps, "roles" => $user->roles]);
}
