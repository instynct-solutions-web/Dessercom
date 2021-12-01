<?php
/*
Template Name: Invoice
*/

// Load header.php
get_header(); ?>

<?php $form = get_field('form') ?>
<section class="invoice-form">
    <img src="<?= $form['background']['url'] ?>" alt="<?= $form['background']['alt'] ?>" class="invoice-form__image">
    <div class="invoice-form__container">
        <img src="<?= $form['image']['url'] ?>" alt="<?= $form['image']['alt'] ?>" class="invoice-form__image">
        <a href="<?= $form['link']['url'] ?>" class="invoice-form__cta"><?= $form['link']['title'] ?></a>
        <h1 class="invoice-form__title"><?= $form['title'] ?></h1>
        <div class="invoice-form__header">
            <p class="invoice-form__header-title"><?= $form['section_title'] ?></p><img src="<?= $form['icon']['url'] ?>" alt="<?= $form['icon']['url'] ?>" class="invoice-form__header-icon">
        </div>
        <div class="invoice-form__body">
            <?php
            echo do_shortcode('[gravityform id="3" title="false" description="false" ajax="false"]'); ?>
        </div>
    </div>
</section>


<?php
// Load footer.php
get_footer(); ?>