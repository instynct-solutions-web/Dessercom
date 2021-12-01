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
                            <h3 class="pricing-hero__drawer-title"><?= $category['title'] ?></h3>
                            <?php if ($category['sublist']) { ?>
                                <ul class="pricing-hero__sublist">
                                    <?php
                                    foreach ($category['sublist'] as $pricing) { ?>
                                        <li class="pricing-hero__subitem">
                                            <p class="pricing-hero__subitem-price"><?= $pricing['price'] ?></p>
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
        </div>z
    </div>
</section>

<?php
$transport = get_field('transport') ?>
<section class="pricing-transport">
    <div class="pricing-transport__container">
        <div class="pricing-transport__top-container">
            <div class="pricing-transport__top">
                <p class="pricing-tranport__note"><?= $transport['note'] ?></p>
            </div>
            <a href="<?= $transport['link']['url'] ?>" class="pricing-transport__cta"><?= $transport['link']['title'] ?></a>
        </div>
        <div class="pricing-transport__main">
            <div class="pricing-transport__image-container">
                <img src="<?= $transport['image']['url']; ?>" alt="<?= $transport['image']['alt']; ?>" class="pricing-transport__image">
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