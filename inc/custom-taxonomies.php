<?php
/*------------------------------------*\
    CUSTOM TAXONOMIES
\*------------------------------------*/

function create_job_zone_taxonomy() {
    // Services
    $rewrite = array(
        'slug'                       => 'zone/?',
        'with_front'                 => false,
        'hierarchical'               => true,
    );
    $args = array(
        'labels' => array(
            'name' => __('Zones géographique', 'taxonomy'),
            'singular_name' => __('Zone géographique', 'taxonomy'),
            'add_new' => 'Ajouter une zone',
            'add_new_item' => 'Ajouter une zone',
            'edit' => 'Modifier une zone',
            'edit_item' => 'Modifier une zone',
            'new_item' => 'Ajouter une zone',
            'view' => 'Voir les zones',
            'view_item' => 'Voir la zone',
            'search_items' => 'Chercher une zone',
            'not_found' => 'Aucun résultat',
            'not_found_in_trash' => 'Aucun résultat dans la corbeille'
        ),
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
        'rewrite'                    => $rewrite,
        'show_in_rest'               => false,
        'has_archive'                => false,
        'publicly_queryable' => false
    );
    register_taxonomy('zone', 'jobs', $args);
}

function create_job_type_taxonomy() {
    // Services
    $rewrite = array(
        'slug'                       => 'type/?',
        'with_front'                 => false,
        'hierarchical'               => true,
    );
    $args = array(
        'labels' => array(
            'name' => __('Types d\'emplois', 'taxonomy'),
            'singular_name' => __('Type d\'emploi', 'taxonomy'),
            'add_new' => 'Ajouter une zone',
            'add_new_item' => 'Ajouter une zone',
            'edit' => 'Modifier une zone',
            'edit_item' => 'Modifier une zone',
            'new_item' => 'Ajouter une zone',
            'view' => 'Voir les zones',
            'view_item' => 'Voir la zone',
            'search_items' => 'Chercher une zone',
            'not_found' => 'Aucun résultat',
            'not_found_in_trash' => 'Aucun résultat dans la corbeille'
        ),
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
        'rewrite'                    => $rewrite,
        'show_in_rest'               => false,
        'has_archive'                => false,
        'publicly_queryable' => false
    );
    register_taxonomy('type', 'jobs', $args);
}

function create_team_division_taxonomy() {
    // Services
    $rewrite = array(
        'slug'                       => 'division/?',
        'with_front'                 => false,
        'hierarchical'               => true,
    );
    $args = array(
        'labels' => array(
            'name' => __('Départements', 'taxonomy'),
            'singular_name' => __('Département', 'taxonomy'),
            'add_new' => 'Ajouter un département',
            'add_new_item' => 'Ajouter un département',
            'edit' => 'Modifier un département',
            'edit_item' => 'Modifier un département',
            'new_item' => 'Ajouter un département',
            'view' => 'Voir les zones',
            'view_item' => 'Voir la zone',
            'search_items' => 'Chercher un département',
            'not_found' => 'Aucun résultat',
            'not_found_in_trash' => 'Aucun résultat dans la corbeille'
        ),
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
        'rewrite'                    => $rewrite,
        'show_in_rest'               => false,
        'has_archive'                => false,
        'publicly_queryable' => false
    );
    register_taxonomy('division', 'team', $args);
}

function create_faq_group_taxonomy() {
    // Services
    $rewrite = array(
        'slug'                       => 'group/?',
        'with_front'                 => false,
        'hierarchical'               => true,
    );
    $args = array(
        'labels' => array(
            'name' => __('Groupes de question', 'taxonomy'),
            'singular_name' => __('Groupe de question', 'taxonomy'),
            'add_new' => 'Ajouter un groupe',
            'add_new_item' => 'Ajouter un groupe',
            'edit' => 'Modifier un groupe',
            'edit_item' => 'Modifier un groupe',
            'new_item' => 'Ajouter un groupe',
            'view' => 'Voir les zones',
            'view_item' => 'Voir la zone',
            'search_items' => 'Chercher un groupe',
            'not_found' => 'Aucun résultat',
            'not_found_in_trash' => 'Aucun résultat dans la corbeille'
        ),
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
        'rewrite'                    => $rewrite,
        'show_in_rest'               => false,
        'has_archive'                => false,
        'publicly_queryable' => false
    );
    register_taxonomy('groupe', 'faq', $args);
}

function create_news_group_taxonomy() {
    // Services
    $rewrite = array(
        'slug'                       => 'section/?',
        'with_front'                 => false,
        'hierarchical'               => true,
    );
    $args = array(
        'labels' => array(
            'name' => __('Groupes d\'actualités ', 'taxonomy'),
            'singular_name' => __('Groupes d\'actualités', 'taxonomy'),
            'add_new' => 'Ajouter un groupe',
            'add_new_item' => 'Ajouter un groupe',
            'edit' => 'Modifier un groupe',
            'edit_item' => 'Modifier un groupe',
            'new_item' => 'Ajouter un groupe',
            'view' => 'Voir les zones',
            'view_item' => 'Voir la zone',
            'search_items' => 'Chercher un groupe',
            'not_found' => 'Aucun résultat',
            'not_found_in_trash' => 'Aucun résultat dans la corbeille'
        ),
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
        'rewrite'                    => $rewrite,
        'show_in_rest'               => false,
        'has_archive'                => false,
        'publicly_queryable' => false
    );
    register_taxonomy('section', 'news', $args);
}
//
//
// ACTION HOOK

// JOB TAXONOMIES
add_action('init', 'create_job_zone_taxonomy');
add_action('init', 'create_job_type_taxonomy');

// TEAM TAXONOMIES
add_action('init', 'create_team_division_taxonomy');

// FAQ TAXONOMIES
add_action('init', 'create_faq_group_taxonomy');

// NEWS TAXONOMIES
add_action('init', 'create_news_group_taxonomy');
