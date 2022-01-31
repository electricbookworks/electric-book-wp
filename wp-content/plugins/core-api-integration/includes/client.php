<?php

global $jwt;

require_once('constants.php');


function fetch_options($type = "questions")
{
    $url = sprintf("%s%s%s", CORE_API_URL, "resources/options/", $type);
    $response = wp_remote_get($url);

    if (is_wp_error($response)) {
        return $response;
    }

    $responseBody = wp_remote_retrieve_body($response);
    $result = json_decode($responseBody, true);

    return $result;
}


function fetch_glossary_term($term)
{
    $params = http_build_query(compact('term'));
    $url = sprintf("%s%s?%s", CORE_API_URL, "glossary_terms", $params);

    $response = wp_remote_get($url);

    if (is_wp_error($response)) {
        return $response;
    }

    $responseBody = wp_remote_retrieve_body($response);
    $result = json_decode($responseBody, true);

    if (
        !array_key_exists("glossary_terms", $result) ||
        count($result['glossary_terms']) != 1
    ) {
        return;
    }

    return array_pop($result['glossary_terms']);
}
