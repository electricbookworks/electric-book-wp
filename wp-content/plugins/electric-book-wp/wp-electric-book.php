<?php

/**
 * Plugin Name:       Electric Book WP
 * Description:       Manage static HTML publications inside WordPress
 * Version:           2.1.0
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

// Exit if accessed directly
defined('ABSPATH') || exit;

require_once('includes/helpers.php');
require_once('includes/serve-restricted-html.php');
require_once('includes/htaccess-restricted-paths.php');
require_once('includes/delete-restricted-path.php');
require_once('includes/user-profile.php');

/**
 * Create settings fields
 */

global $electric_book_wp_field_path_id, $electric_book_wp_field_roles_id, $electric_book_wp_field_redirect_id;

$electric_book_wp_field_path_id = 'restrict_path';
$electric_book_wp_field_roles_id = 'restrict_roles';
$electric_book_wp_field_redirect_id = 'restrict_redirect';

function electric_book_wp_settings_init()
{

  global $electric_book_wp_field_path_id, $electric_book_wp_field_roles_id, $electric_book_wp_field_redirect_id;

  register_setting('electric_book_wp', 'electric_book_wp_restrict');

  add_settings_section(
    'electric_book_wp_section_restrict_access',
    __('Restrict access to a static file or directory', 'electric_book_wp'),
    'electric_book_wp_section_restrict_access_cb',
    'electric_book_wp'
  );

  $restricted_path_field_label = get_option('siteurl') . '/';
  add_settings_field(
    $electric_book_wp_field_path_id,
    __($restricted_path_field_label, 'electric_book_wp'),
    'electric_book_wp_field_restrict_path_cb',
    'electric_book_wp',
    'electric_book_wp_section_restrict_access',
    [
      'label_for' => $electric_book_wp_field_path_id
    ]
  );

  add_settings_field(
    $electric_book_wp_field_roles_id,
    __('Select users who can access this path', 'electric_book_wp'),
    'electric_book_wp_field_restrict_roles_cb',
    'electric_book_wp',
    'electric_book_wp_section_restrict_access',
    [
      'label_for' => $electric_book_wp_field_roles_id
    ]
  );

  add_settings_field(
    $electric_book_wp_field_redirect_id,
    __('Redirect users to', 'electric_book_wp'),
    'electric_book_wp_field_restrict_redirect_cb',
    'electric_book_wp',
    'electric_book_wp_section_restrict_access',
    [
      'label_for' => $electric_book_wp_field_redirect_id
    ]
  );

  // run htaccess writer on initialisation to clean up legacy rules and to make sure site URL is up to date
  electric_book_wp_htaccess_restricted_paths();
}

add_action('admin_init', 'electric_book_wp_settings_init');

// restrict section callback
// $args is the last parameter defined by add_settings_section()
function electric_book_wp_section_restrict_access_cb($args)
{ ?>
  <p>Paths should be relative to the root of your WordPress installation. A path to a directory will automatically include all subdirectories and files inside it.</p>
<?php }

// restrict section field callbacks
// $args is the last parameter defined by add_settings_field()
function electric_book_wp_field_restrict_path_cb($args)
{ ?>
  <input id="<?= esc_attr($args['label_for']) ?>" type="text" name="electric_book_wp_restrict[<?= esc_attr($args['label_for']) ?>]" placeholder="your/path/goes/here.html" class="regular-text">
  <?php }

function electric_book_wp_field_restrict_roles_cb($args)
{
  global $wp_roles;
  foreach ($wp_roles->roles as $key => $role) { ?>
    <p><label><input type="checkbox" name="electric_book_wp_restrict[<?= esc_attr($args['label_for']) . '_' . esc_attr($key) ?>]" value="<?= esc_attr($key) ?>"><?= $role['name'] ?></label></p>
  <?php }
}

function electric_book_wp_field_restrict_redirect_cb($args)
{ ?>
  <input id="<?= esc_attr($args['label_for']) ?>" type="text" name="electric_book_wp_restrict[<?= esc_attr($args['label_for']) ?>]" placeholder="E.g. '/custom-file.php' or '/custom/page/'" class="regular-text">
  <p>Leave blank to redirect to the WordPress login page. The path provided must either be relative to the root of your site or an absolute URL.</p>
  <p>Two GET parameters will be passed to your custom page:</p>
  <ol>
    <li><code>redirect_to</code> = the page originally requested by the user</li>
    <li><code>reason</code> = either <code>logged-out</code> or <code>role</code></li>
  </ol>
<?php }

/**
 * Create settings menu item
 */
function electric_book_wp_restrict_options_page()
{
  // add top level menu page
  add_menu_page(
    'Electric Book WP',
    'Electric Book WP',
    'manage_options',
    'electric_book_wp',
    'electric_book_wp_restrict_options_page_html',
    'dashicons-book-alt'
  );
}

add_action('admin_menu', 'electric_book_wp_restrict_options_page');

/**
 * Create settings page via callback from add_menu_page()
 */
function electric_book_wp_restrict_options_page_html()
{

  global $wp_roles, $electric_book_wp_field_path_id, $electric_book_wp_field_roles_id, $electric_book_wp_field_redirect_id;

  // check user capabilities
  if (!current_user_can('manage_options')) {
    return;
  }

  // check if the user has submitted the settings
  // wordpress will add the "settings-updated" $_GET parameter to the url
  if (isset($_GET['settings-updated'])) {

    // add latest addition to saved settings
    $restrict_options = get_option('electric_book_wp_restrict');

    // get path field
    $restrict_path_added = $restrict_options[$electric_book_wp_field_path_id];
    // remove fragment links (don't get passed to server)
    $restrict_path_added = strtok($restrict_path_added, '#');
    // remove query params
    $restrict_path_added = strtok($restrict_path_added, '?');
    $restrict_path_added = strtok($restrict_path_added, '&');
    // remove leading and trailing slashes
    $restrict_path_added = trim($restrict_path_added, '/');

    // check path exists and doesn't coflict with any WP URIs in DB
    $restrict_path_added_abspath = ABSPATH . '/' . $restrict_path_added;
    $file_folder_exists = file_exists($restrict_path_added_abspath) || is_dir($restrict_path_added_abspath);
    $is_wp_uri = get_page_by_path($restrict_path_added, OBJECT, ['page', 'post']);

    $restricted_path_url = get_option('siteurl') . '/' .  $restrict_path_added;

    if (!empty($restrict_path_added) && $file_folder_exists && !$is_wp_uri && filter_var($restricted_path_url, FILTER_VALIDATE_URL)) {
      $saved_restricted_roles = array();
      foreach ($restrict_options as $key => $option) {
        if (startsWith($electric_book_wp_field_roles_id, $key)) {
          array_push($saved_restricted_roles, $option);
        }
      }
      $new_restricted_path = array(
        'path' => $restrict_path_added,
        'roles' => $saved_restricted_roles
      );
      if (isset($restrict_options[$electric_book_wp_field_redirect_id]) && !empty($restrict_options[$electric_book_wp_field_redirect_id])) {
        $new_restricted_path['redirect'] = $restrict_options[$electric_book_wp_field_redirect_id];
      }
      $restrict_options_all = get_option('electric_book_wp_restrict_all');
      $restrict_options_all = is_array($restrict_options_all) ? $restrict_options_all : array();
      $restrict_path_key = '"' . esc_attr($restrict_path_added) . '"';
      $restrict_options_all[$restrict_path_key] = $new_restricted_path;
      $restrict_options_all_updated = update_option('electric_book_wp_restrict_all', $restrict_options_all);

      // if updated, show success. If not, show error.
      if ($restrict_options_all_updated) {
        electric_book_wp_htaccess_restricted_paths();
        add_settings_error('electric_book_wp_messages', 'electric_book_wp_message', __('Settings Saved', 'electric_book_wp'), 'success');
      } else {
        add_settings_error('electric_book_wp_messages', 'electric_book_wp_message', __('That particular restricted path setting already exists. No changes to existing settings were made.', 'electric_book_wp'), 'info');
      }
    } else {
      add_settings_error('electric_book_wp_messages', 'electric_book_wp_message', __('A valid path value has not been entered or it conflicts with an existing WordPress permalink.', 'electric_book_wp'), 'error');
    }
  }

  // show error/update messages
  settings_errors('electric_book_wp_messages');
?>
  <div class="wrap">
    <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
    <form action="options.php" method="post">
      <?php
      // output security fields for the registered setting "electric_book_wp"
      settings_fields('electric_book_wp');
      do_settings_sections('electric_book_wp');
      submit_button('Add restricted path');
      ?>
    </form>

    <?php
    $restrict_options_all = get_option('electric_book_wp_restrict_all');
    if (isset($restrict_options_all) && is_array($restrict_options_all) && !empty($restrict_options_all)) { ?>
      <hr>
      <h2>Saved restricted paths</h2>
      <form method="post">
        <?php
        foreach ($restrict_options_all as $key => $path) {
          $path_properties = $path; ?>
          <p>Restricted path: <?= esc_html($path_properties['path']) ?></p>
          <p>Permitted user roles:
            <?php
            if (empty($path_properties['roles'])) {
              echo 'All';
            } else {
              foreach ($path_properties['roles'] as $role) {
                echo $wp_roles->roles[$role]['name'] . ', ';
              }
            } ?>
          </p>
          <p>Redirect to: <code><?= isset($path['redirect']) ? $path['redirect'] : 'wp-login.php' ?></code></p>
          <p><button type="submit" value="<?= esc_attr($path_properties['path']) ?>" name="delete_restricted_path">Delete</button></p>
          <hr>
        <?php } ?>
      </form>
    <?php } ?>

  </div>
<?php
}
