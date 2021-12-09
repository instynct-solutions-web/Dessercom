<?php
/*
Template Name: Pricing
*/

// Load header.php
get_header(); ?>

<?php $hero = get_field('hero') ?>
<section class="pricing-hero">
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
                        <li class="pricing-hero__item">
                            <svg class="pricing-hero__drawer-button" xmlns="http://www.w3.org/2000/svg" width="17.93" height="17.493" viewBox="0 0 17.93 17.493">
                                <g id="Groupe_1000" data-name="Groupe 1000" transform="translate(1.414 1.414)">
                                    <g id="Groupe_999" data-name="Groupe 999" transform="translate(0 0)">
                                        <g id="Groupe_796" data-name="Groupe 796" transform="translate(14.664 0) rotate(45)">
                                            <line id="Ligne_1" data-name="Ligne 1" y1="20.739" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                        </g>
                                        <line id="Ligne_133" data-name="Ligne 133" x2="15.102" y2="14.632" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                    </g>
                                </g>
                            </svg>
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
<section class="pricing-transport">
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
                </span>
            </a>
        </div>
        <div class="pricing-transport__main">
            <div class="pricing-transport__image-container">
                <img src="<?= $transport['image']['url']; ?>" alt="<?= $transport['image']['alt']; ?>" class="pricing-transport__image">
                <svg class="pricing-transport__mask" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.4 302.3">
                    <polygon class="cls-1" points="213.3 160.5 214 160.5 214 160.3 213.6 160 213.3 160.5" />
                    <polygon class="cls-1" points="123.1 160.5 123.4 160.5 123.1 159.8 123.1 160.5" />
                    <path class="cls-1" d="M331.2,0H0V302.2H335.4V0ZM281.1,298.1a64.19,64.19,0,0,1-25.1-8.3l-88.1-51.3.1.1L79.7,289.5c-26.2,14.9-57.6,9.2-70.1-12.7S8.3,225,34.5,210l88.6-50.4.1.1c-.1-8.7-.5-98.9-.5-101.2,0-29,18.9-52.6,42.7-54.5h6C195.1,6,214,29.6,214,58.6V160.3c6.2,3.6,85.9,49.4,87.9,50.6,17.1,10,27.6,26.3,29.3,42.5v8.8a39.78,39.78,0,0,1-5.1,15.7c-6.9,11.8-19.3,18.8-33.4,20.3H281.1Z" />
                </svg>
            </div>
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