<?php
if (function_exists('acf_add_local_field_group')) :

    acf_add_local_field_group(array(
        'key' => 'group_61c4a8161d0ca',
        'title' => 'Page 404',
        'fields' => array(
            array(
                'key' => 'field_61c4a81fba52d',
                'label' => 'Page 404',
                'name' => '',
                'type' => 'tab',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'placement' => 'top',
                'endpoint' => 0,
            ),
            array(
                'key' => 'field_61c4a82dba52e',
                'label' => 'Page 404 (Groupe)',
                'name' => 'page_404',
                'type' => 'group',
                'instructions' => 'Modifier le contenu de la page d\'erreur 404.',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'layout' => 'block',
                'sub_fields' => array(
                    array(
                        'key' => 'field_61c4a841ba52f',
                        'label' => 'Titre',
                        'name' => 'title',
                        'type' => 'textarea',
                        'instructions' => 'Modifier le titre de la page d\'erreur 404.',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'default_value' => '',
                        'placeholder' => '',
                        'maxlength' => '',
                        'rows' => 3,
                        'new_lines' => 'br',
                    ),
                    array(
                        'key' => 'field_61c4a850ba530',
                        'label' => 'Bouton',
                        'name' => 'button',
                        'type' => 'link',
                        'instructions' => 'Modifier le bouton de la page d\'erreur 404.',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'return_format' => 'array',
                    ),
                ),
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'options_page',
                    'operator' => '==',
                    'value' => 'options',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
        'show_in_rest' => 0,
    ));

endif;
