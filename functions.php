<?php

// Utilities

//include('inc/utilities.php');

// CONFIG

include('inc/configure.php');

// JAVASCRIPT & CSS

include('inc/js-css.php');

// ACF
include('inc/acf.php');

// Custom login styles
require_once('inc/login-css.php');

// CUSTOM POST TYPES
require_once('inc/custom-post-types.php');

// CUSTOM TAXONOMIES
require_once('inc/custom-taxonomies.php');

// Tiny MCE Styles
require_once('inc/tiny-mce.php');

// Support theme Title
add_theme_support('title-tag');

add_filter('gform_confirmation_anchor', '__return_true');

// Disable Search & Filter Pro Plugin
add_action('wp_print_scripts', 'my_deregister_javascript', 100);

function my_deregister_javascript()
{
    wp_deregister_script('search-filter-plugin-build');
    wp_deregister_script('search-filter-plugin-chosen');
}
