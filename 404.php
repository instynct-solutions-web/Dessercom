<?php

/**
 * The template for displaying 404 pages (not found)
 *
 * @package WordPress
 */
?>

<?php get_header(); ?>

<?php
$page404 = get_field('page_404', 'options');
?>
<section data-wolfpack-section class="error">
    <div class="error__container">
        <h1 class="error__title"><?= $page404['title'] ?></h1>
        <a class="error__button" href="<?= $page404['button']['url'] ?>" target="<?= $page404['button']['target'] ?>">
            <?= $page404['button']['title'] ?>
            <svg class="error__button-icon" xmlns="http://www.w3.org/2000/svg" width="13.384" height="14.515" viewBox="0 0 13.384 14.515">
                <g id="Groupe_788" data-name="Groupe 788" transform="translate(1.414 1)">
                    <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5.278,5.278,10.555,0" transform="translate(0 7.237)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                    <line id="Ligne_1" data-name="Ligne 1" y1="12.515" transform="translate(5.278 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                </g>
            </svg>
        </a>
    </div>
    <svg class=" error__background" xmlns="http://www.w3.org/2000/svg" width="287.999" height="462.123" viewBox="0 0 287.999 462.123">
        <g id="Groupe_157" data-name="Groupe 157" transform="translate(1.5 1.5)">
            <path id="Tracé_47" data-name="Tracé 47" d="M0,459.116V142.241H.047a142.476,142.476,0,0,1,284.952,0V459.116" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            <path id="Tracé_48" data-name="Tracé 48" d="M0,427.958V111.351H.035a111.536,111.536,0,0,1,223.072,0V427.96" transform="translate(30.946 31.16)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            <path id="Tracé_49" data-name="Tracé 49" d="M0,397.076V80.521H.026a80.654,80.654,0,0,1,161.307,0V397.076" transform="translate(61.833 62.038)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            <path id="Tracé_50" data-name="Tracé 50" d="M0,366.064V49.368H.016a49.451,49.451,0,0,1,98.9,0V366.062" transform="translate(93.04 93.059)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            <path id="Tracé_51" data-name="Tracé 51" d="M0,335.205V18.495H0a18.525,18.525,0,0,1,37.05,0V335.205" transform="translate(123.972 123.909)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
        </g>
    </svg>

</section>

<?php get_footer(); ?>