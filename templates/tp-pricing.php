<?php
/*
Template Name: Pricing
*/

// Load header.php
get_header(); ?>

<?php $hero = get_field('hero') ?>
<section data-wolfpack-section class="pricing-hero">
    <img src="<?= $hero['background']['url'] ?>" alt="<?= $hero['background']['alt'] ?>" class="pricing-hero__background">
    <div class="pricing-hero__container">
        <div class="pricing-hero__top">
            <img src="<?= $hero['icon']['url'] ?>" alt="<?= $hero['icon']['alt'] ?>" class="pricing-hero__icon">
            <p class="pricing-hero__note"><?= $hero['note'] ?></p>
        </div>
        <div class="pricing-hero__main">
            <div class="pricing-hero__info">
                <h1 class="pricing-hero__title"><?= $hero['title'] ?></h1>
                <p class="pricing-hero__text"><?= $hero['text'] ?></p>
            </div>
            <?php if ($hero['list']) { ?>
                <ul class="pricing-hero__list">
                    <?php
                    foreach ($hero['list'] as $category) { ?>
                        <li class="pricing-hero__item" data-pricing>
                            <div class="pricing-hero__drawer-button" data-pricing-button>
                                <svg class="pricing-hero__drawer-open" xmlns="http://www.w3.org/2000/svg" width="22.613" height="25.458" viewBox="0 0 22.613 25.458">
                                    <g id="Groupe_800" data-name="Groupe 800" transform="translate(1.414 -13.432)">
                                        <path id="Tracé_3" data-name="Tracé 3" d="M0,0,9.892,9.892,19.785,0" transform="translate(0 27.997)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
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
                            <h3 class="pricing-hero__drawer-title"><?= $category['title'] ?></h3>
                            <?php if ($category['sublist']) { ?>
                                <ul class="pricing-hero__sublist">
                                    <?php
                                    foreach ($category['sublist'] as $pricing) { ?>
                                        <li class="pricing-hero__subitem">
                                            <p class="pricing-hero__subitem-price"><?= $pricing['price'] ?></p>
                                            <span class="pricing-hero__subitem-line"></span>
                                            <p class="pricing-hero__subitem-text"><?= $pricing['text'] ?></p>
                                        </li>
                                    <?php
                                    } ?>
                                </ul>
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
    <div class="pricing-transport__container">
        <div class="pricing-transport__top-container">
            <div class="pricing-transport__top">
                <p class="pricing-transport__note"><?= $transport['note'] ?></p>
            </div>
            <a href="<?= $transport['link']['url'] ?>" class="pricing-transport__cta">
                <span class="pricing-transport__cta-text" data-circle-text>
                    <?= $transport['link']['title'] ?>
                    <?= $transport['link']['title'] ?>
                </span>
                <svg class="pricing-transport__cta-icon" xmlns="http://www.w3.org/2000/svg" width="24.406" height="30.816" viewBox="0 0 24.406 30.816">
                    <g id="Groupe_787" data-name="Groupe 787" transform="translate(1.5 1.5)">
                        <path id="Tracé_3" data-name="Tracé 3" d="M10.7,12.2a1.5,1.5,0,0,1-1.061-.439l-10.7-10.7a1.5,1.5,0,0,1,0-2.121,1.5,1.5,0,0,1,2.121,0L10.7,8.582l9.642-9.642a1.5,1.5,0,0,1,2.121,0,1.5,1.5,0,0,1,0,2.121l-10.7,10.7A1.5,1.5,0,0,1,10.7,12.2Z" transform="translate(0 17.113)" fill="#008884" />
                        <path id="Ligne_1" data-name="Ligne 1" d="M0,29.316a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V27.816A1.5,1.5,0,0,1,0,29.316Z" transform="translate(10.703 0)" fill="#008884" />
                    </g>
                </svg>
            </a>
        </div>
        <div class="pricing-transport__main">
            <svg class="pricing-transport__image" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 181.567 163.488">
                <defs>
                    <pattern id="image" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <image x="0" y="0" width="1" height="1" preserveAspectRatio="none slice" xlink:href="<?= $transport['image']['url']; ?>"></image>
                    </pattern>
                </defs>
                <path id="Tracé_974" data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image)" />
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