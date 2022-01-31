<?php


defined('ABSPATH') || exit;


require_once('constants.php');

if (!function_exists('fetch_options')) {
    require_once 'client.php';
}

if (!function_exists('is_associative_array')) {
    require_once 'helpers.php';
}

const CORE_API_SHORTCODES = [
    'core-api-question' => "Question",
    'core-api-glossary_term' => "Glossary term",
];

function core_api_media_shortcodes_button()
{
    core_api_media_enqueue_assets();

    echo core_api_generate_shortcode_dialog("questions");
    echo core_api_generate_shortcode_dialog("glossary_terms");

    $html = "<div class='core-api-media-wrap'>";
    $html .= "<button id='core-api-insert-shortcode' class='button core-api core-api-insert-shortcode'>Core Shortcodes</button>";
    $html .= "<div class='core-api-media-shortcode-type'><ul>";
    foreach (CORE_API_SHORTCODES as $key => $value) {
        $html .= "<li><a href='#' class='{$key}'>Insert {$value}</a></li>";
    }
    $html .= "</ul></div>";
    $html .= "</div>";

    echo $html;
}
add_action('media_buttons', 'core_api_media_shortcodes_button');

function core_api_media_register_assets()
{
    wp_register_script('core-api-media-button-js', plugins_url('../assets/js/core-api-button.js', __FILE__), ["jquery", "jquery-ui-dialog"], "v1.0", true);
    wp_register_style('core-api-media-button-css', plugins_url('../assets/css/core-api-button.css', __FILE__), [], "v1.0");
}
add_action('init', 'core_api_media_register_assets');

function core_api_media_enqueue_assets()
{
    wp_enqueue_script('core-api-media-button-js');
    wp_enqueue_style('wp-jquery-ui-dialog');
    wp_enqueue_style('core-api-media-button-css');
}

function core_api_generate_shortcode_dialog($type)
{
    $resourceInputs = [];
    if (array_key_exists($type, CORE_API_CUSTOM_INPUTS)) { 
        // Custom inputs in dialog form
        foreach (CORE_API_CUSTOM_INPUTS[$type] as $key => $input) {
            $resourceInputs[] = <<<EOT
            <tr>
                <td><label for="{$input['name']}">{$input['label']}</label></td>
                <td>
                    <input name="{$input['name']}" id="core-api-input-{$input['name']}" type="{$input['type']}">{$input['default']}</input>
                </td>
            </tr>
EOT;
        }
    } else {
        // Fetch options from API directly
        $resourceOptions = fetch_options($type);

        foreach ($resourceOptions as $name => $option) {
            $options = [];
            if (is_associative_array($option)) {
                foreach ($option as $optKey => $optVal) {
                    if (is_array($optVal)) {
                        foreach ($optVal as $a_key => $a_value) {
                            $options[] = "<option value='{$a_key}'>{$a_value}</option>";
                        }
                        $options = array_unique($options);
                    } else {
                        $options[] = "<option value='{$optKey}'>{$optVal}</option>";
                    }
                }
            } else {
                $options[] = "<option value='{$value}'>{$value}</option>";
            }
        
            $optionsHtml = implode("\n\n\n\n\n\n", $options);
            
            $title = ucfirst($name);
            $resourceInputs[] = <<<EOT
            <tr>
                <td><label for="{$name}">{$title}</label></td>
                <td>
                    <select name="{$name}" id="core-api-inputs-{$name}" class="select ui-widget-content ui-corner-all">
                        <option selected disabled hidden>Select...</option>
                        {$optionsHtml}
                    </select>
                </td>
            </tr>
EOT;
        }

    }

    $inputsHtml = implode("\n\n\n\n\n", $resourceInputs);

    $html = <<<EOT
<div id='core-api-{$type}-dialog' class='core-api-modal-dialog hidden'>
    <form>
        <fieldset>
            <table class="form-table">
                <colgroup>
                    <col span="1" style="width: 25%;">
                    <col span="1" style="width: 75%;">
                </colgroup>

                <tbody>                    
                    {$inputsHtml}
                </tbody>
            </table>
        </fieldset>
    </form>
</div>
EOT;

    return $html;
}
