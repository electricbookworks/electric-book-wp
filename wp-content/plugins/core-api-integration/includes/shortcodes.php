<?php

defined('ABSPATH') || exit;

if (!function_exists('ensure_resource_exist')) {
    require_once 'client.php';
}

function core_api_shortcodes_register_questions_assets()
{
    wp_register_script('core-api-questions-js', plugins_url('../assets/js/core-api-questions.js', __FILE__), ["jquery"], "v1.0", true);
    wp_register_style('core-api-questions-css', plugins_url('../assets/css/core-api-questions.css', __FILE__), [], "v1.0");
}
add_action('init', 'core_api_shortcodes_register_questions_assets');

function core_api_shortcodes_enqueue_questions_assets() {
    wp_enqueue_script('core-api-questions-js');
    wp_enqueue_style('core-api-questions-css');
}

function generate_question_button($atts)
{
    $options = get_option('core_api_settings');

    if (!$options['core_api_checkbox_field_question_integration']) {
        return;
    }

    $default = [
        'type' => 'questions',
        'id' => null,
        'work' => "the-economy",
        'language' => "en",
        'unit' => null,
        'formats' => [
            "csv" => "CSV file",
            "gift" => "Moodle (GIFT)",
            "canvas" => "Canvas (QTI)",
        ],
        "debug" => false,
    ];

    $params = shortcode_atts($default, $atts);
    $resources = ensure_resource_exist(...array_values($params));

    if ($resources) {
        $url = "";

        $html = "<div class='core-api-question-wrap'>";
        $html .= "<button class='button button--red button--core-api button--core-api-question core-api-question-download'>Download Questions</button>";
        if ($params['formats']) {
            $html .= "<div class='core-api-question-download-formats'><ul>";
            foreach ($params['formats'] as $key => $value) {
                $html .= "<li><a href='{$url}?format={$key}'>{$value}</a></li>";
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
    
    return;
}

add_shortcode('core-api-question', 'generate_question_button');
