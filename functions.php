<?php

// Utilities

include('inc/utilities.php');

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

// Gravity Form Remove Currency
add_filter('gform_currencies', 'gw_modify_currencies');
function gw_modify_currencies($currencies)
{
    $currencies['CAD'] = array(
        'name' => esc_html__('Euro', 'gravityforms'),
        'symbol_left' => '',
        'symbol_right' => '',
        'symbol_padding' => ' ',
        'thousand_separator' => '.',
        'decimal_separator' => ',',
        'decimals' => 2
    );
    return $currencies;
}


add_filter('gform_stripe_charge_description', 'gf_replace_charge_description', 10, 5);
function gf_replace_charge_description($description, $strings, $entry, $submission_data, $feed)
{

    // Change 21 to your field id number.
    $description = 'Facture : ' . rgar($entry, '1');

    return $description;
}
