<?php
/*------------------------------------*\
    CUSTOM POST TYPES
\*------------------------------------*/

function create_post_type() {


    // JOBS
    register_post_type(
        'Jobs',
        array(
            'labels' => array(
                'name' => __('Emplois', 'cpt'),
                'singular_name' => __('Emploi', 'cpt'),
                'add_new' => 'Ajouter',
                'add_new_item' => 'Ajouter',
                'edit' => 'Modifier',
                'edit_item' => 'Modifier',
                'new_item' => 'Ajouter',
                'view' => 'Voir',
                'view_item' => 'Voir',
                'search_items' => 'Chercher',
                'not_found' => 'Aucun résultat',
                'not_found_in_trash' => 'Aucun résultat dans la corbeille'
            ),
            'public' => true,
            'has_archive' => false,
            'menu_position' => 21,
            'menu_icon' => 'dashicons-money-alt',
            'supports' => array(
                'title',
                'editor'
            ),
            'rewrite' => array(
                'slug' => __('emplois', 'slug')
            ),
            'can_export' => true,
            'taxonomies' => array('jobs', 'category'),
        )
    );
    // JOBS
    register_post_type(
        'Team',
        array(
            'labels' => array(
                'name' => __('Équipe', 'cpt'),
                'singular_name' => __('Équipe', 'cpt'),
                'add_new' => 'Ajouter',
                'add_new_item' => 'Ajouter',
                'edit' => 'Modifier',
                'edit_item' => 'Modifier',
                'new_item' => 'Ajouter',
                'view' => 'Voir',
                'view_item' => 'Voir',
                'search_items' => 'Chercher',
                'not_found' => 'Aucun résultat',
                'not_found_in_trash' => 'Aucun résultat dans la corbeille'
            ),
            'public' => true,
            'has_archive' => false,
            'menu_position' => 21,
            'menu_icon' => 'dashicons-groups',
            'supports' => array(
                'title',
                'editor'
            ),
            'rewrite' => array(
                'slug' => __('equipe', 'slug')
            ),
            'can_export' => true,
            'taxonomies' => array('team', 'category'),
        )
    );
    // JOBS
    register_post_type(
        'FAQ',
        array(
            'labels' => array(
                'name' => __('Faq', 'cpt'),
                'singular_name' => __('Faq', 'cpt'),
                'add_new' => 'Ajouter',
                'add_new_item' => 'Ajouter',
                'edit' => 'Modifier',
                'edit_item' => 'Modifier',
                'new_item' => 'Ajouter',
                'view' => 'Voir',
                'view_item' => 'Voir',
                'search_items' => 'Chercher',
                'not_found' => 'Aucun résultat',
                'not_found_in_trash' => 'Aucun résultat dans la corbeille'
            ),
            'public' => true,
            'has_archive' => false,
            'menu_position' => 21,
            'menu_icon' => 'dashicons-info',
            'supports' => array(
                'title',
                'editor'
            ),
            'rewrite' => array(
                'slug' => __('faq', 'slug')
            ),
            'can_export' => true,
            'taxonomies' => array('faq', 'category'),
        )
    );
}

//
//
// ACTION HOOK
add_action('init', 'create_post_type');
