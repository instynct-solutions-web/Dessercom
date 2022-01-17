<?php
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title'    =>  'Options du site',
        'menu_title'    =>  'Options du site',
        'menu_slug'     =>  'options',
        'capability'    =>  'edit_posts',
        'position'      =>  false,
        'icon_url'      =>  false,
    ));
}

if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title'    =>  'Navigation',
        'menu_title'    =>  'Navigation',
        'menu_slug'     =>  'navigation',
        'capability'    =>  'edit_posts',
        'position'      =>  false,
        'icon_url'      =>  false,
    ));
}
