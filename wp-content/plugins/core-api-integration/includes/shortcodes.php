<?php

defined('ABSPATH') || exit;

const EXPECTED_QUESTION_ATTS = ["id", "series", "work", "unit", "language", "format"];

const DEFAULT_QUESTION_PARAMS = [
    'type' => 'questions',
    'id' => null,
    'series' => "the-economy",
    'work' => "the-economy",
    'language' => "en",
    'unit' => null,
    'formats' => [
        "csv" => "CSV file",
        "gift" => "Moodle (GIFT)",
        "canvas" => "Canvas (QTI)",
    ],
    "text" => "Download questions",
    "debug" => false,
];

function core_api_shortcodes_register_assets()
{
    // questions
    wp_register_script('core-api-questions-js', plugins_url('../assets/js/core-api-questions.js', __FILE__), ["jquery"], "v1.0", true);
    wp_register_style('core-api-questions-css', plugins_url('../assets/css/core-api-questions.css', __FILE__), [], "v1.0");

    // glossary terms
    wp_register_style('core-api-glossary-terms-css', plugins_url('../assets/css/core-api-glossary-terms.css', __FILE__), [], "v1.0");
}
add_action('init', 'core_api_shortcodes_register_assets');

function core_api_shortcodes_enqueue_questions_assets()
{
    wp_enqueue_script('core-api-questions-js');
    wp_enqueue_style('core-api-questions-css');
}

function core_api_shortcodes_enqueue_glossary_terms_assets()
{
    wp_enqueue_style('core-api-glossary-terms-css');
}

function generate_question_button($atts)
{
    $options = get_option('core_api_settings');

    if (!$options['core_api_checkbox_field_question_integration']) {
        return;
    }

    $params = shortcode_atts(DEFAULT_QUESTION_PARAMS, $atts);

    $html = "<div class='core-api-question-wrap'>";
    $html .= "<button class='button button--red button--core-api button--core-api-question core-api-question-download'>{$params['text']}<span class='arrow-icon down'></span></button>";
    if ($params['formats']) {
        $html .= "<div class='core-api-question-download-formats'><ul>";
        foreach ($params['formats'] as $key => $value) {
            $atts["format"] = $key;

            $clean_atts = array_filter($atts, function ($at) {
                return (in_array($at, EXPECTED_QUESTION_ATTS));
            }, ARRAY_FILTER_USE_KEY);

            $query_string = http_build_query($clean_atts);
            $url = sprintf("%s%s?%s", CORE_API_URL, "questions", $query_string);

            $html .= "<li><a href='{$url}'>{$value}</a></li>";
        }
        $html .= "</ul></div>";
    }
    $html .= "</div>";

    if ($params["debug"]) {
        $json = json_encode(compact("params", "resource"), JSON_PRETTY_PRINT);
        $html .= "<br/><br/>";
        $html .= "<div class='core-api-debug'><pre>{$json}</pre></div>";
    }

    core_api_shortcodes_enqueue_questions_assets();

    return $html;
}

function generate_glossary_term($atts)
{
    $options = get_option('core_api_settings');

    if (
        !$options['core_api_checkbox_field_glossary_term_integration'] ||
        !array_key_exists('term', $atts)
    ) {
        return;
    }

    $term = $atts['term'];

    $result = fetch_glossary_term($term);

    $language = ($result['translation']) ? $result['translation']['language'] : $result['work']['language'];
    $query_string = http_build_query(["query" => $term, "lang" => $language]);
    $moreLink = sprintf("/%s/search.html?%s", $result['work']['slug'], $query_string);

    $html = "<div class='core-api-glossary-term'>";
    $html .= "<span class='term'><strong>{$result['term']}</strong></span>&nbsp;";
    $html .= "<span class='definition'>{$result['definition']}</span>";
    $html .= "<a class='more-link' href='{$moreLink}'>Find out more</a>";
    $html .= "</div>";

    core_api_shortcodes_enqueue_glossary_terms_assets();

    return $html;
}

add_shortcode('core-api-question', 'generate_question_button');
add_shortcode('core-api-glossary-term', 'generate_glossary_term');
