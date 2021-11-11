<?php

const CORE_API_URL = "https://core-api.electricbook.works/";

global $jwt;

function ensure_resource_exist($type = "questions", $id = null, $work = "the-economy", $language = "en", $unit = null)
{
    global $jwt;

    if (!$jwt) {
        $jwt = "";
    }

    $args = [
        'timeout'    => 10,
        'user-agent' => 'Core API WordPress',
        'headers'    => [
            'Content-Type' => 'application/json',
            'Authorization' => "Bearer '$jwt'",
        ],
        'sslverify' => false,
    ];

    if ($id) {
        $url = sprintf("%s%s/%d", CORE_API_URL, $type, $id);
    } elseif ($work && $language && $unit) {
        $search_params = compact('work', 'language', 'unit');
        $query_string = http_build_query($search_params);
        $url = sprintf("%s%s?%s", CORE_API_URL, $type, $query_string);
    }

    $response = wp_remote_get($url, $args);

    if (is_wp_error($response)) {
        return $response;
    }

    $responseBody = wp_remote_retrieve_body($response);
    $result = json_decode($responseBody);

    return $result;
}

function fetch_available_resources($type = "questions") 
{
    $url = sprintf("%s%s%s", CORE_API_URL, "resources/available/", $type);   
    $response = wp_remote_get($url);

    if (is_wp_error($response)) {
        return $response;
    }

    $responseBody = wp_remote_retrieve_body($response);
    $result = json_decode($responseBody);

    return $result;
}