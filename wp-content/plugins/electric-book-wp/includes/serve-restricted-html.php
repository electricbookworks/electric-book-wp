<?php

defined('ABSPATH') || exit;

function electric_book_wp_basic_auth()
{
  $AUTH_USER = 'ebwpclient';
  $AUTH_PASS = 'pV0zIfE13b%$';
  header('Cache-Control: no-cache, must-revalidate, max-age=0');
  $has_supplied_credentials = !(empty($_SERVER['PHP_AUTH_USER']) && empty($_SERVER['PHP_AUTH_PW']));
  $is_not_authenticated = (!$has_supplied_credentials ||
    $_SERVER['PHP_AUTH_USER'] != $AUTH_USER ||
    $_SERVER['PHP_AUTH_PW']   != $AUTH_PASS
  );
  return !$is_not_authenticated;
}

function electric_book_wp_can_user_view($current_setting)
{
  $can_they = false;
  if (electric_book_wp_basic_auth()) {
    $can_they = true;
  } elseif (is_user_logged_in()) {
    $user = wp_get_current_user();
    if (!empty($current_setting['roles'])) {
      foreach ($current_setting['roles'] as $role) {
        if (in_array($role, (array) $user->roles)) {
          $can_they = true;
        }
      }
    } else {
      $can_they = true;
    }
  }
  return $can_they;
}

function electric_book_wp_serve_restricted_html($get_restricted_path)
{
  $restrict_options_all = get_option('electric_book_wp_restrict_all');
  $current_setting = $restrict_options_all['"' . $get_restricted_path . '"'];
  $requested_url = $_GET['electric-book-wp-serve'];
  if (is_dir($requested_url)) {
    $requested_url .= '/index.html';
  }
  $mime_type = mime_content_type(ABSPATH . $requested_url);
  if (electric_book_wp_can_user_view($current_setting)) {
    header('Content-Type: ' . $mime_type);
    readfile(ABSPATH . $requested_url);
  } elseif (is_user_logged_in()) {
    if (isset($current_setting['redirect'])) {
      $redirect_url = $current_setting['redirect'] . '?redirect_to=' . urlencode($requested_url) . '&reason=role';
      $redirect_url = add_query_arg('_wpnonce', wp_create_nonce('electric_book_wp_redirect'), $redirect_url);
      wp_redirect($redirect_url, 302);
    } else {
      echo 'This is a restricted page. Although you are logged in, your profile lacks the necessary role required to view this page.';
    }
  } else {
    if (isset($current_setting['redirect'])) {
      $redirect_url = $current_setting['redirect'] . '?redirect_to=' . urlencode($requested_url) . '&reason=logged-out';
      $redirect_url = add_query_arg('_wpnonce', wp_create_nonce('electric_book_wp_redirect'), $redirect_url);
      wp_redirect($redirect_url, 302);
    } else {
      wp_redirect('/wp-login.php?redirect_to=' . urlencode($requested_url), 302);
    }
  }
  exit;
}

function electric_book_wp_check_incoming()
{
  $get_restricted_path = isset($_GET['electric-book-wp-restricted-path']) && !empty($_GET['electric-book-wp-restricted-path']) ? $_GET['electric-book-wp-restricted-path'] : false;
  if ($get_restricted_path !== false) {
    electric_book_wp_serve_restricted_html($get_restricted_path);
  }
}

add_action('init', 'electric_book_wp_check_incoming');
