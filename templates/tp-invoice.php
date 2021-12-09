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
            <p class="invoice-form__header-title"><?= $form['section_title'] ?></p>
            <svg class="invoice-form__header-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="Groupe_178" data-name="Groupe 178" transform="translate(-424 -480)" opacity="0.5">
                    <text id="_" data-name="!" transform="translate(430 493)" fill="#041e36" font-size="13" font-family="F37Ginger, F37 Ginger">
                        <tspan x="0" y="0">!</tspan>
                    </text>
                    <g id="Ellipse_43" data-name="Ellipse 43" transform="translate(424 480)" fill="none" stroke="#0a1e34" stroke-width="1">
                        <circle cx="8" cy="8" r="8" stroke="none" />
                        <circle cx="8" cy="8" r="7.5" fill="none" />
                    </g>
                </g>
            </svg>
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