<?php


function eb_bookmarks_get_user_bookmarks()
{
    global $wpdb;
    global $eb_bookmarks_user_id;

    if ($eb_bookmarks_user_id < 1) {
        return new WP_REST_Response(["message" => "Sorry, you are not allowed to do that."], 401 );
    }
    
    $table_name = $wpdb->prefix . 'eb_bookmarks';

    $query = $wpdb->prepare(
        "
        SELECT JSON_UNQUOTE(payload) as payload
        FROM $table_name
        WHERE user_id = %d;
        ",
        $eb_bookmarks_user_id
    );

    $row = $wpdb->get_row($query);
    return json_decode($row->payload);
}

function eb_bookmarks_update_user_bookmarks(WP_REST_Request $request)
{
    global $wpdb;
    global $eb_bookmarks_user_id;

    if ($eb_bookmarks_user_id < 1) {
        return new WP_REST_Response(["message" => "Sorry, you are not allowed to do that."], 401 );
    }

    $table_name = $wpdb->prefix . 'eb_bookmarks';
    $bookmarks = $request->get_json_params();

    if (!$bookmarks) {
        return false;
    }

    $rowsChanged = $wpdb->replace(
        $table_name,
        [
            'user_id' => $eb_bookmarks_user_id, 
            'payload' => json_encode($bookmarks)
        ]
    );

    return $rowsChanged;
}

function eb_bookmarks_register_routes()
{
    register_rest_route('eb-bookmarks/v1', '/bookmarks', [
        [
            'methods' => 'GET',
            'callback' => 'eb_bookmarks_get_user_bookmarks',
            'permission_callback' => function () {
                return true;
            },
        ], 
        [
            'methods' => 'POST',
            'callback' => 'eb_bookmarks_update_user_bookmarks',
            'permission_callback' => function () {
                return true;
            },
        ],
    ]);
}
add_action('rest_api_init', 'eb_bookmarks_register_routes');
