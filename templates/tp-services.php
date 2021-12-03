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
$map = get_field('map') ?>
<section class="services-map">
    <div class="services-map__svg-container">
        <?php get_template_part('modules/md-map'); ?>
    </div>
    <div class="services-map__container">
        <?php
        if ($map['region']) { ?>
            <ul class="services-map__list">
                <?php
                foreach ($map['region'] as $region) { ?>
                    <li class="services-map__item">
                        <p class="services-map__region">
                            <span class="services-map__counter"><?= $region['num'] ?></span>
                            <?= $region['name'] ?>
                        </p>
                    </li>
                <?php
                } ?>

            </ul>
        <?php
        } ?>

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
$paramedic = get_field('services_paramedic'); ?>
<section class="services-paramedic">
    <div class="services-paramedic__container">
        <div class="services-paramedic__top">
            <p class="services-paramedic__note"><?= $paramedic['note']; ?></p>
        </div>
        <div class="services-paramedic__main">
            <div class="services-paramedic__image-container">
                <img src="<?= $paramedic['image']['url']; ?>" alt="<?= $paramedic['image']['alt']; ?>" class="services-paramedic__image">
            </div>
            <div class="services-paramedic__text-container">
                <h2 class="services-paramedic__title"><?= $paramedic['title'] ?></h2>
                <p class="services-paramedic__text"><?= $paramedic['text'] ?></p>
                <p class="services-paramedic__subtext"><?= $paramedic['subtext'] ?></p>
                <p class="services-paramedic__info"><?= $paramedic['info'] ?></p>
                <p class="services-paramedic__contact">
                    <a href="<?= $paramedic['email']['url'] ?>" class="services-paramedic__link"><?= $paramedic['email']['title'] ?></a>
                    <span><?= ' ' . __('ou') . ' ' ?></span>
                    <a href="<?= $paramedic['phone']['url'] ?>" class="services-paramedic__link"><?= $paramedic['phone']['title'] ?></a>
                </p>
                <a href="<?= $paramedic['button']['url'] ?>" class="services-paramedic__button"><?= $paramedic['button']['title'] ?></a>
            </div>
        </div>
    </div>
</section>

<?php
$support = get_field('support') ?>
<section class="services-support">
    <div class="services-support__container">
        <div class="services-support__text-container">
            <h3 class="services-support__title"><?= $support['title'] ?></h3>
            <p class="services-support__text"><?= $support['text'] ?></p>
            <div class="services-support__button-container">
                <a href="<?= $support['link']['url'] ?>" class="services-support__button"><?= $support['link']['title'] ?></a>
                <a href="<?= $support['link_2']['url'] ?>" class="services-support__button services-support__button--secondary"><?= $support['link_2']['title'] ?></a>
            </div>

        </div>
        <div class="services-support__animation-container">
            <canvas data-canvas-grid class="services-support__canvas"></canvas>
        </div>
    </div>
</section>

<?php
$other = get_field('other') ?>
<section class="services-other">
    <div class="services-other__container">
        <div class="services-other__top">
            <h2 class="services-other__title"><?= $other['title'] ?></h2>
            <a target="<?= $other['link']['target'] ?>" href="<?= $other['link']['url'] ?>" class="services-other__button services-other__button--desktop"><?= $other['link']['title'] ?></a>
        </div>
        <?php
        if ($other['list']) { ?>
            <ul class="services-other__list">
                <?php
                foreach ($other['list'] as $item) { ?>
                    <li class="services-other__item">
                        <div class="services-other__item-header">
                            <h4 class="services-other__item-title"><?= $item['name'] ?></h4>
                        </div>
                        <div class="services-other__item-body">
                            <p class="services-other__item-text"><?= $item['text'] ?></p>
                        </div>
                    </li>
                <?php
                } ?>

            </ul>
        <?php
        } ?>

        <div class="services-other__button-container">
            <a target="<?= $other['link']['target'] ?>" href="<?= $other['link']['url'] ?>" class="services-other__button services-other__button--mobile"><?= $other['link']['title'] ?></a>
        </div>
    </div>
</section>



<?php
// Load footer.php
get_footer(); ?>