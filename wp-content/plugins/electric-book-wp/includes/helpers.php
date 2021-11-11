<?php

defined('ABSPATH') || exit;

function after($needle, $haystack) {
  if (!is_bool(strpos($haystack, $needle))) {
    return substr($haystack, strpos($haystack, $needle) + strlen($needle));
  }
}

function after_last($needle, $haystack) {
  if (!is_bool(strrevpos($haystack, $needle))) {
    return substr($haystack, strrevpos($haystack, $needle) + strlen($needle));
  }
}

function before($needle, $haystack) {
  return substr($haystack, 0, strpos($haystack, $needle));
}

function before_last($needle, $haystack) {
  return substr($haystack, 0, strrevpos($haystack, $needle));
}

function between($start, $end, $haystack) {
  return before($end, after($start, $haystack));
}

function between_last($needle, $that, $haystack) {
  return after_last($needle, before_last($that, $haystack));
}

// use strrevpos function in case your php version does not include it
function strrevpos($instr, $needle) {
  $rev_pos = strpos(strrev($instr), strrev($needle));
  if ($rev_pos === false) {
    return false;
  } else {
    return strlen($instr) - $rev_pos - strlen($needle);
  }
}

function startsWith($needle, $haystack) {
  $length = strlen($needle);
  return (substr($haystack, 0, $length) === $needle);
}

function endsWith($needle, $haystack) {
  $length = strlen($needle);
  if ($length == 0) {
    return true;
  }
  return (substr($haystack, - $length) === $needle);
}
