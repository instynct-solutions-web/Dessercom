<?php

/**
 * The template for displaying 404 pages (not found)
 *
 * @package WordPress
 */
?>

<?php get_header();
$page404 = get_field('page_404', 'options');
?>
<section data-wolfpack-section class="error" data-tadam data-tadam-threshold="-1">
    <div class="error__container">
        <h1 class="error__title" data-words data-tadam-animate="words--delay-0.2"><?= $page404['title'] ?></h1>
        <div class="error__button-container" data-tadam-animate="opacity-1--y-0--delay-0.4">
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
    </div>
    <div class="error__background" data-tadam-animate="lottie-lines" data-lottie-lines="/wp-content/themes/dessercom/assets/src/lottie/lines-white.json"></div>
</section>

<?php get_footer(); ?>