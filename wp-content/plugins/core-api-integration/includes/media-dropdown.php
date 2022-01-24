<?php


defined('ABSPATH') || exit;


require_once('constants.php');

if (!function_exists('fetch_options')) {
    require_once 'client.php';
}

const CORE_API_SHORTCODES = [
    'core-api-question' => "Question",
];

function core_api_media_shortcodes_button()
{
    core_api_media_enqueue_assets();

    echo core_api_media_shortcode_question_dialog();

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

function core_api_media_shortcode_question_dialog()
{
    $resourceOptions = fetch_options("questions");

    $optionHtml = "";
    foreach ($resourceOptions as $name => $option) {

        $options = [];
        foreach ($option as $key => $value) {
            if (array_keys($option) !== range(0, count($option) - 1)) { // assoc array         
                if (is_array($value)) {
                    foreach ($value as $a_key => $a_value) {
                        $options[] = "<option value='{$a_key}'>{$a_value}</option>";
                    }
                    $options = array_unique($options);
                } else {
                    $options[] = "<option value='{$key}'>{$value}</option>";
                }
            } else {
                $options[] = "<option value='{$value}'>{$value}</option>";
            }
        }

        $optionValueHtml = implode("\n", $options);
        $title = ucfirst($name);
        $optionHtml .= <<<EOT
        <tr>
            <td><label for="{$name}">{$title}</label></td>
            <td>
                <select name="{$name}" id="core-api-opt-{$name}" class="select ui-widget-content ui-corner-all">
                    <option selected disabled hidden>Select...</option>
                    {$optionValueHtml}
                </select>
            </td>
        </tr>
EOT;
    }

    $html = <<<EOT
<div id='core-api-question-dialog' class='core-api-modal-dialog hidden'>
    <form>
        <fieldset>
            <table>
                <colgroup>
                    <col span="1" style="width: 25%;">
                    <col span="1" style="width: 75%;">
                 </colgroup>

                 <tbody>
                    <tr>
                        <td><label for="id">ID</label></td>
                        <td><input type="text" name="id" id="id" class="text ui-widget-content ui-corner-all"></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td class="divider"><i>or</i></td>
                    </tr>
                    
                    {$optionHtml}
                </tbody>
            </table>
        </fieldset>
    </form>
</div>
EOT;

    return $html;
}
