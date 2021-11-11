<?php

// Important: If a file external to WP's templating system is being used like this one, you need to make sure WP is loaded by requiring the below. This is so the token validation will work.
// Otherwise, see wp-content/themes/serve-restricted-html/page.php, which is a WP template implementation of this same example.
require_once('wp-blog-header.php');

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Electric Book WP</title>
</head>
<body>

<?php
// This is just a basic example redirect page using passed parameters.

// check once-off token to prevent XSS and CSRF hacks
$redirect_token = isset($_GET['_wpnonce']) ? wp_verify_nonce($_GET['_wpnonce'], 'electric_book_wp_redirect') : false;
if ($redirect_token && isset($_GET['redirect_to'])) {
  if (isset($_GET['reason']) && $_GET['reason'] === 'logged-out') { ?>
    This is a restricted page. Please <a href="/wp-login.php?redirect_to=<?=urlencode($_GET['redirect_to'])?>">login to view it</a>.
  <?php } elseif ($_GET['reason'] === 'role') {
    echo 'This is a restricted page. Although you are logged in, your profile lacks the necessary role required to view this page.';
  }
} else {
  echo 'Who goes there? This is Orc territory.';
}
?>

</body>
</html>
