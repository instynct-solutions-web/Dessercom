<?php
/*
Template Name: FAQ
*/

// Load header.php
get_header(); ?>

<?php
$faq = get_field('faq') ?>
<section data-wolfpack-section class="faq" data-tadam data-tadam-threshold="-1">
    <div class="faq__background" data-tadam-animate="lottie-lines-once" data-lottie-lines="/wp-content/themes/dessercom/assets/src/lottie/lines-white.json"></div>
    <div class="faq__container">
        <div class="faq__top">
            <h1 class="faq__title" data-words data-tadam-animate="words--delay-0.2"><?= $faq['title'] ?></h1>
        </div>
        <div class="faq__main">
            <div class="faq__filters" data-tadam-animate="opacity-1--delay-0.6">
                <?php echo do_shortcode('[searchandfilter id="1182"]'); ?>
            </div>
            <div class="faq__questions" data-tadam-animate="opacity-1--delay-0.6">
                <?php echo do_shortcode('[searchandfilter id="1182"  show="results"]'); ?>
            </div>
        </div>
    </div>
</section>

<?php
// Load footer.php
get_footer(); ?>