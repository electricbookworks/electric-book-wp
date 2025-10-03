<?php

/**
 * Plugin Name:       Electric Book WP SSO
 * Description:       Enables an improved SSO experience with EBW Book Server
 * Version:           1.0.0
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

// Exit if accessed directly
defined('ABSPATH') || exit;

function electric_book_wp_sso_get_oauth_credentials($client_id) {
  // Check if wp-oauth-server is active and function exists
  if (!function_exists('get_client_by_client_id')) {
    return false;
  }
  $client = get_client_by_client_id($client_id);
  return $client ? ['client_id' => $client['client_id'], 'client_secret' => $client['client_secret']] : false;
}

function electric_book_wp_sso_set_shared_session($user_login, $user) {

  $client_id = 'LxkHtvSCopIXha8StEr8sfNq9CXtbMykUXDqww0m';
  $domains = '.core-econ.org';
  
  // Get OAuth client credentials
  $oauth_credentials = electric_book_wp_sso_get_oauth_credentials($client_id);
  
  if ($oauth_credentials && $oauth_credentials['client_secret']) {

    $json_object = json_encode([
      "ID" => $user->ID,
      "user_login" => $user->user_login,
      "user_nicename" => $user->user_nicename,
      "user_email" => $user->user_email,
      "user_registered" => $user->user_registered,
      "user_status" => $user->user_status,
      "display_name" => $user->display_name,
      "user_role" => $user->roles[0] ?? 'subscriber'
    ]);

    $key = $client_id . $oauth_credentials['client_secret'];
    $cipher_method = 'aes-256-cbc';
    $iv_length = openssl_cipher_iv_length($cipher_method);
    $iv = openssl_random_pseudo_bytes($iv_length);
    $encrypted_data = openssl_encrypt($json_object, $cipher_method, $key, 0, $iv);
    $encrypted_object_and_iv = base64_encode($iv . $encrypted_data);
    $cookie_value = $encrypted_object_and_iv;
    
    setcookie('ebwp_sso_session', $cookie_value, [
      'expires' => time() + (86400 * 30),
      'path' => '/',
      'domain' => '.core-econ.org',
      'secure' => false,
      'httponly' => true
    ]);

  }

}

add_action('wp_login', 'electric_book_wp_sso_set_shared_session', 10, 2);

function electric_book_wp_sso_unset_shared_session() {  
  setcookie('ebwp_sso_session', "", [
    'expires' => time() - 3600,
    'path' => '/',
    'domain' => '.core-econ.org',
    'secure' => false,
    'httponly' => true
  ]);
}

add_action('wp_logout', 'electric_book_wp_sso_unset_shared_session');

function electric_book_wp_sso_whitelist_redirects($allowed) {
	$allowed[] = 'books.core-econ.org';
	$allowed[] = 'ebw-test-1.core-econ.org';
	$allowed[] = 'ebw-test-2.core-econ.org';
	$allowed[] = 'ebw-test-3.core-econ.org';
	// $allowed[] = 'localhost';
	return $allowed;
}

add_filter('allowed_redirect_hosts', 'electric_book_wp_sso_whitelist_redirects');

function electric_book_wp_sso_logout(WP_REST_Request $request) {
  $redirect_to = $request->get_param('redirect_to');
  // Validate and sanitize the redirect URL
  if ($redirect_to) {
    $redirect_to = esc_url_raw($redirect_to);
    // Check if the redirect URL is allowed (including external whitelisted domains)
    $redirect_to = wp_validate_redirect($redirect_to, home_url(), true);
  } else {
    $redirect_to = home_url();
  }
  wp_logout();
  wp_redirect($redirect_to);
  exit;
}

function electric_book_wp_sso_register_route() {
  register_rest_route('electric-book-wp-sso/v1', '/logout', [
    [
      'methods' => 'GET',
      'callback' => 'electric_book_wp_sso_logout',
      'permission_callback' => function () {
        return true;
      }
    ]
  ]);
}
add_action('rest_api_init', 'electric_book_wp_sso_register_route');

// Use the custom login page for OAuth redirects and set the shared session if already logged in
function electric_book_wp_sso_custom_login_redirect() {
  if (!is_user_logged_in()) {
    wp_redirect(site_url() . '/login?redirect_to=' . urlencode(site_url() . $_SERVER['REQUEST_URI']));
    exit;
  } else {
    $user = wp_get_current_user();
    electric_book_wp_sso_set_shared_session($user->user_login, $user);
  }
}
add_action('wo_before_authorize_method', 'electric_book_wp_sso_custom_login_redirect');