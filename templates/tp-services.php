<?php
/*
Template Name: Services
*/

// Load header.php
get_header(); ?>
<?php $hero = get_field('hero') ?>
<section class="services-hero">
    <div class="services-hero__container">
        <div class="services-hero__text-container">
            <h1 class="services-hero__title"><?= $hero['title'] ?></h1>
            <ul class="services-hero__list">
                <?php
                foreach ($hero['list'] as $services) { ?>
                    <li class="services-hero__item">
                        <a target="<?= $services['link']['target'] ?>" href="<?= $services['link']['url'] ?>" class="services-hero__link"><?= $services['link']['title'] ?></a>
                    </li>
                <?php
                } ?>

            </ul>
        </div>
        <div class="services-hero__cta-container">
            <p class="services-hero__cta-button"><?= $hero['cta'] ?></p>
        </div>
    </div>
</section>

<?php
$extra = get_field('services_ext') ?>
<section class="services-extra">
    <img src="<?= $extra['image']['url'] ?>" alt="<?= $extra['image']['alt'] ?>" class="services-extra__background">
    <div class="services-extra__container">
        <div class="services-extra__logo-container">
            <img src="<?= $extra['icon']['url'] ?>" alt="<?= $extra['icon']['alt'] ?>" class="services-extra__logo">
        </div>
        <div class="services-extra__info">
            <h2 class="services-extra__title"><?= $extra['title'] ?></h2>
            <p class="services-extra__text"><?= $extra['text'] ?></p>
        </div>
        <div class="services-extra__list-container">
            <ul class="services-extra__list">
                <?php
                $counter = 1;
                foreach ($extra['list'] as $item) { ?>
                    <li class="services-extra__item">
                        <span class="services-extra__item-num"><?= sprintf('%02d', $counter) ?></span>
                        <p class="services-extra__item-text"><?= $item['feature'] ?></p>
                    </li>
                <?php
                    $counter++;
                } ?>

            </ul>
        </div>
    </div>
</section>

<?php
// Load footer.php
get_footer(); ?>