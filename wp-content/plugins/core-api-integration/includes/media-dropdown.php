<?php


defined('ABSPATH') || exit;


require_once('constants.php');


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
    $available_questions = fetch_available_resources("questions");

    $work_options = implode(
        "/n",
        array_unique(
            array_map(
                function ($q) {
                    return "<option value='{$q->work_slug}'>{$q->work_title}</option>";
                },
                $available_questions
            )
        )
    );

    $language_options = implode(
        "/n",
        array_unique(
            array_map(
                function ($q) {
                    $lang = (is_null($q->translation_language)) ? $q->work_language : $q->translation_language;
                    $langName = LANGUAGES[$lang];
                    return "<option value='{$lang}'>{$langName}</option>";
                },
                $available_questions
            )
        )
    );

    $units = array_unique(
        array_map(
            function ($q) {
                $matches = [];
                preg_match('/question-(.\d)-.\d/', $q->name, $matches);
                $unit = $matches[1];
                return "<option value='{$unit}'>{$unit}</option>";
            },
            $available_questions
        )
    );
    sort($units);
    $unit_options = implode("/n", $units);

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
                    <tr>
                        <td><label for="work">Work</label></td>
                        <td>
                            <select name="work" id="work" class="select ui-widget-content ui-corner-all">
                                <option selected disabled hidden>Select...</option>
                                {$work_options}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="language">Language</label></td>
                        <td>
                            <select name="language" id="language" class="select ui-widget-content ui-corner-all">
                                <option selected disabled hidden>Select...</option>
                                {$language_options}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="unit">Unit</label></td>
                        <td>
                            <select name="unit" id="unit" class="select ui-widget-content ui-corner-all">
                                <option selected disabled hidden>Select...</option>
                                {$unit_options}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </fieldset>
    </form>
</div>
EOT;

    return $html;
}
