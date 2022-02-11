<?php
/*
Template Name: Invoice
*/

// Load header.php
get_header(); ?>

<?php $form = get_field('form') ?>
<section data-wolfpack-section class="invoice-form">
    <div class="invoice-form__container" data-tadam data-tadam-threshold="-1">
        <a href="<?= $form['link']['url'] ?>" class="invoice-form__cta cta">
            <span class="invoice-form__cta-text cta__text" data-circle-text>
                <?= $form['link']['title'] ?>
                <div> . </div>
                <?= $form['link']['title'] ?>
                <div> . </div>
                <?= $form['link']['title'] ?>
                <div> . </div>
                <?= $form['link']['title'] ?>
                <div> . </div>
            </span>
            <div class="pricing-hero__cta-icon cta__icon">
                <div class="arrow">
                    <span class="arrow__left"></span>
                    <span class="arrow__right"></span>
                    <span class="arrow__line"></span>
                </div>
            </div>
        </a>
        <h1 class="invoice-form__title" data-words data-tadam-animate="words--delay-0.2">
            <?= $form['title'] ?>
        </h1>
        <div class="invoice-form__header" data-tadam-animate="opacity-1--y-0--delay-0.4">
            <span class="invoice-form__separator"></span>
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
        <div class="invoice-form__body" data-form data-tadam-animate="opacity-1--y-0--delay-0.4">
            <?php echo do_shortcode('[gravityform id="' . $form['form'] . '" title="false" description="false" ajax="false"]'); ?>
        </div>
    </div>
</section>


<?php
// Load footer.php
get_footer(); ?>