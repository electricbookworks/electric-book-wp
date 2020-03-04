<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Electric Book WP</title>
</head>
<body>

<?php
if (isset($_GET['reason']) && $_GET['reason'] === 'logged-out') { ?>
This is a restricted page. Please <a href="/wp-login.php?redirect_to=<?=$_GET['redirect_to']?>">login to view it</a>.
<?php } elseif ($_GET['reason'] === 'role') {
  echo 'This is a restricted page. Although you are logged in, your profile lacks the necessary role required to view this page.';
} else {
  echo 'I\'m just a normal WordPress page';
} ?>


</body>
</html>
