<?php

function _add_javascript()
{
	wp_enqueue_script('theme-js', get_template_directory_uri() . '/assets/dist/js/main.js?v=1.1', array(), null, true );
}
add_action('wp_enqueue_scripts', '_add_javascript', 100);

function _add_stylesheets()
{
	wp_enqueue_style('theme-css', get_template_directory_uri() . '/assets/dist/css/main.css?v=1.1', array(), null, 'all' );
}
add_action('wp_enqueue_scripts', '_add_stylesheets');
