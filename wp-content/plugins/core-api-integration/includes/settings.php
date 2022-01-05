<?php
add_action('admin_menu', 'core_api_add_admin_menu');
add_action('admin_init', 'core_api_settings_init');


function core_api_add_admin_menu()
{
    add_menu_page('Core API Integration', 'Core API Integration', 'manage_options', 'core_api_integration', 'core_api_settings_page');
    add_submenu_page('core_api_integration', 'Core API Integration test', 'Settings', 'manage_options', 'core_api_integration', 'core_api_settings_page');
    add_submenu_page('core_api_integration', 'Core API Integration test', 'Test', 'manage_options', 'core_api_integration_test', 'core_api_test_page');
}

function core_api_settings_init()
{

    register_setting('core_api_plugin_page', 'core_api_settings');

    add_settings_section(
        'core_api_plugin_auth_section',
        __('Authentication', 'core_api'),
        'core_api_settings_section_auth_callback',
        'core_api_plugin_page'
    );

    add_settings_field(
        'core_api_text_field_app_name',
        __('Application name', 'core_api'),
        'core_api_text_field_app_name_render',
        'core_api_plugin_page',
        'core_api_plugin_auth_section'
    );

    add_settings_field(
        'core_api_text_field_api_key',
        __('API key', 'core_api'),
        'core_api_text_field_api_key_render',
        'core_api_plugin_page',
        'core_api_plugin_auth_section'
    );

    add_settings_section(
        'core_api_plugin_feature_section',
        __('Integrations', 'core_api'),
        'core_api_settings_section_feature_callback',
        'core_api_plugin_page'
    );

    add_settings_field(
        'core_api_checkbox_field_question_integration',
        __('Questions', 'core_api'),
        'core_api_checkbox_field_question_integration_render',
        'core_api_plugin_page',
        'core_api_plugin_feature_section'
    );
}

function core_api_text_field_app_name_render()
{
    $options = get_option('core_api_settings');
?>
    <input type='text' name='core_api_settings[core_api_text_field_app_name]' value='<?php echo $options['core_api_text_field_app_name']; ?>'>
<?php
}


function core_api_text_field_api_key_render()
{
    $options = get_option('core_api_settings');
?>
    <input type='text' name='core_api_settings[core_api_text_field_api_key]' value='<?php echo $options['core_api_text_field_api_key']; ?>'>
<?php
}

function core_api_checkbox_field_question_integration_render()
{

    $options = get_option('core_api_settings');
?>
    <input type='checkbox' name='core_api_settings[core_api_checkbox_field_question_integration]' <?php checked($options['core_api_checkbox_field_question_integration'], 1); ?> value='1'>
<?php

}


function core_api_settings_section_auth_callback()
{
    // echo __('This section description', 'core_api');
}

function core_api_settings_section_feature_callback()
{
    // echo __('This section description', 'core_api');
}


function core_api_settings_page()
{
    if (isset($_GET['settings-updated'])) {
        add_settings_error('core_api_messages', 'core_api_message', __('Settings Saved', 'core_api'), 'updated');
    }

    settings_errors('core_api_messages');
?>
    <form action='options.php' method='post'>

        <h2>Core API Integration</h2>

        <?php
        settings_fields('core_api_plugin_page');
        do_settings_sections('core_api_plugin_page');
        submit_button();
        ?>

    </form>
<?php

}


function core_api_test_page()
{
?>
    <h2>Core API Integration test page</h2>
<?php
    print do_shortcode("[core-api-question id='1']");
    print "<br/><br/>";
    print do_shortcode("[core-api-question work='the-economy' language='en' unit='02' number='8']");
    print "<br/><br/>";
    print do_shortcode("[core-api-question work='the-economy' language='fr' unit='1' number='1']");
}
