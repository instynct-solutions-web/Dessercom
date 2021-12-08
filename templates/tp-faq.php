<?php
/*
Template Name: FAQ
*/

// Load header.php
get_header(); ?>

<?php
$faq = get_field('faq') ?>
<section class="faq">
    <img src="<?= $faq['background']['url'] ?>" alt="<?= $faq['background']['alt'] ?>" class="faq__background">
    <div class="faq__container">
        <div class="faq__top">
            <h1 class="faq__title"><?= $faq['title'] ?></h1>
        </div>
        <div class="faq__main">
            <div class="faq__filters">
                <?php echo do_shortcode('[searchandfilter id="727"]'); ?>
            </div>
            <div class="faq__questions">
                <?php echo do_shortcode('[searchandfilter id="727"  show="results"]'); ?>
            </div>
        </div>
    </div>
</section>

<?php
// Load footer.php
get_footer(); ?>