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
            'taxonomies' => array('jobs'),
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
            'publicly_queryable' => false,
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
            'taxonomies' => array('team'),
        )
    );
    // JOBS
    register_post_type(
        'faq',
        array(
            'labels' => array(
                'name' => __('FAQ', 'cpt'),
                'singular_name' => __('FAQ', 'cpt'),
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
            'publicly_queryable' => false,
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
            'taxonomies' => array('faq'),
        )
    );
}

//
//
// ACTION HOOK
add_action('init', 'create_post_type');
