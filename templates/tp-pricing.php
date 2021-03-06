<?php
/*
Template Name: Pricing
*/

// Load header.php
get_header(); ?>

<?php $hero = get_field('hero') ?>
<section data-wolfpack-section class="pricing-hero" data-tadam data-tadam-threshold="-1">
    <div class="pricing-hero__background" data-tadam-animate="lottie-lines-once" data-lottie-lines="/wp-content/themes/dessercom/assets/src/lottie/lines-gray.json"></div>
    <div class="pricing-hero__container">
        <a href="<?= $hero['link']['url'] ?>" class="pricing-hero__cta cta">
            <span class="pricing-hero__cta-text cta__text" data-circle-text>
                <?= $hero['link']['title'] ?>
                <div> . </div>
                <?= $hero['link']['title'] ?>
                <div> . </div>
                <?= $hero['link']['title'] ?>
                <div> . </div>
                <?= $hero['link']['title'] ?>
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
        <div class="pricing-hero__top">
            <span class="pricing-hero__separator" data-tadam-animate="scaleX-1"></span>
            <img data-tadam-animate="opacity-1--rotation-0--delay-0.1" src="<?= $hero['icon']['url'] ?>" alt="<?= $hero['icon']['alt'] ?>" class="pricing-hero__icon">
            <p class="pricing-hero__note" data-words data-tadam-animate="words--delay-0.2"><?= $hero['note'] ?></p>
        </div>
        <div class="pricing-hero__main">
            <div class="pricing-hero__info">
                <h1 class="pricing-hero__title" data-words data-tadam-animate="words--delay-0.3"><?= $hero['title'] ?></h1>
                <p class="pricing-hero__text" data-words data-tadam-animate="words--delay-0.5"><?= $hero['text'] ?></p>
            </div>
            <?php if ($hero['list']) { ?>
                <ul class="pricing-hero__list" data-tadam-animate="pricing-items">
                    <?php
                    foreach ($hero['list'] as $category) { ?>
                        <li class="pricing-hero__item" data-pricing>
                            <div data-cursor data-pricing-button class="pricing-hero__toggle-container">
                                <div class="pricing-hero__drawer-button">
                                    <svg class="pricing-hero__drawer-open" xmlns="http://www.w3.org/2000/svg" width="22.613" height="25.458" viewBox="0 0 22.613 25.458">
                                        <g id="Groupe_800" data-name="Groupe 800" transform="translate(1.414 -13.432)">
                                            <path id="Trac??_3" data-name="Trac?? 3" d="M0,0,9.892,9.892,19.785,0" transform="translate(0 27.997)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                            <line id="Ligne_1" data-name="Ligne 1" y1="23.458" transform="translate(9.893 14.432)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                        </g>
                                    </svg>
                                    <svg class="pricing-hero__drawer-close" xmlns="http://www.w3.org/2000/svg" width="17.93" height="17.493" viewBox="0 0 17.93 17.493">
                                        <g id="Groupe_1000" data-name="Groupe 1000" transform="translate(1.414 1.414)">
                                            <g id="Groupe_999" data-name="Groupe 999" transform="translate(0 0)">
                                                <g id="Groupe_796" data-name="Groupe 796" transform="translate(14.664 0) rotate(45)">
                                                    <line id="Ligne_1" data-name="Ligne 1" y1="20.739" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                                </g>
                                                <line id="Ligne_133" data-name="Ligne 133" x2="15.102" y2="14.632" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <h3 class="pricing-hero__drawer-title" data-words><?= $category['title'] ?></h3>
                            </div>
                            <?php if ($category['sublist']) { ?>
                                <div class="pricing-hero__sublist-container" data-pricing-content>
                                    <ul class="pricing-hero__sublist">
                                        <?php
                                        foreach ($category['sublist'] as $pricing) { ?>
                                            <li class="pricing-hero__subitem">
                                                <p class="pricing-hero__subitem-price" data-lines><?= $pricing['price'] ?></p>
                                                <span class="pricing-hero__subitem-line"></span>
                                                <p class="pricing-hero__subitem-text" data-lines><?= $pricing['text'] ?></p>
                                            </li>
                                        <?php
                                        } ?>
                                    </ul>
                                </div>
                            <?php
                            } ?>
                        </li>
                    <?php
                    } ?>
                </ul>
            <?php
            } ?>
        </div>
    </div>
</section>

<?php
$transport = get_field('transport') ?>
<section data-wolfpack-section class="pricing-transport">
    <div class="pricing-transport__container" data-tadam data-tadam-threshold="100">
        <div class="pricing-transport__top-container">
            <div class="pricing-transport__top">
                <span class="pricing-transport__separator" data-tadam-animate="scaleX-1"></span>
                <p class="pricing-transport__note" data-words data-tadam-animate="words--delay-0.2"><?= $transport['note'] ?></p>
            </div>
            <a href="<?= $transport['link']['url'] ?>" class="pricing-transport__cta cta" data-tadam-animate="opacity-1--rotation-0">
                <span class="pricing-transport__cta-text cta__text" data-circle-text>
                    <?= $transport['link']['title']  ?>
                    <div> . </div>
                    <?= $transport['link']['title'] ?>
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
        </div>
        <div class="pricing-transport__main">
            <svg class="pricing-transport__image" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 181.567 163.488" data-tadam-animate="mask-image">
                <defs>
                    <pattern id="image" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <image x="0" y="0" width="1" height="1" preserveAspectRatio="none slice" xlink:href="<?= $transport['image']['url']; ?>"></image>
                    </pattern>
                </defs>
                <path id="Trac??_974" data-name="Trac?? 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image)" />
            </svg>
            <div class="pricing-transport__text-container">
                <h2 class="pricing-transport__title"><?= $transport['title'] ?></h2>
                <p class="pricing-transport__text"><?= $transport['text'] ?></p>
                <p class="pricing-transport__subtext"><?= $transport['subtext'] ?></p>
            </div>
        </div>
    </div>
</section>


<?php
// Load footer.php
get_footer(); ?>