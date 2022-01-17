<?php
/*
Template Name: Invoice
*/

// Load header.php
get_header(); ?>

<?php $form = get_field('form') ?>
<section data-wolfpack-section class="invoice-form">
    <div class="invoice-form__container">
        <a href="<?= $form['link']['url'] ?>" class="invoice-form__cta">
            <span class="invoice-form__cta-text" data-circle-text>
                <?= $form['link']['title'] ?>
                <?= $form['link']['title'] ?>
                <?= $form['link']['title'] ?>
                <?= $form['link']['title'] ?>
            </span>
            <svg class="invoice-form__cta-icon" xmlns="http://www.w3.org/2000/svg" width="24.406" height="30.816" viewBox="0 0 24.406 30.816">
                <g id="Groupe_787" data-name="Groupe 787" transform="translate(1.5 1.5)">
                    <path id="Tracé_3" data-name="Tracé 3" d="M10.7,12.2a1.5,1.5,0,0,1-1.061-.439l-10.7-10.7a1.5,1.5,0,0,1,0-2.121,1.5,1.5,0,0,1,2.121,0L10.7,8.582l9.642-9.642a1.5,1.5,0,0,1,2.121,0,1.5,1.5,0,0,1,0,2.121l-10.7,10.7A1.5,1.5,0,0,1,10.7,12.2Z" transform="translate(0 17.113)" fill="#008884" />
                    <path id="Ligne_1" data-name="Ligne 1" d="M0,29.316a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V27.816A1.5,1.5,0,0,1,0,29.316Z" transform="translate(10.703 0)" fill="#008884" />
                </g>
            </svg>
        </a>
        <h1 class="invoice-form__title"><?= $form['title'] ?></h1>
        <div class="invoice-form__header">
            <img src="<?= $form['image']['url'] ?>" alt="<?= $form['image']['alt'] ?>" class="invoice-form__image">
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
            <img src="<?= $form['background']['url'] ?>" alt="<?= $form['background']['alt'] ?>" class="invoice-form__background">
        </div>
        <div class="invoice-form__body" data-form>
            <?php

            echo do_shortcode('[gravityform id="' . $form['form'] . '" title="false" description="false" ajax="false"]'); ?>

        </div>
    </div>
</section>


<?php
// Load footer.php
get_footer(); ?>