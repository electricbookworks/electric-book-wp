<?php

function is_associative_array($array) {
    return array_keys($array) !== range(0, count($array) - 1);
}
