<?php
/*
Template Name: About
*/

// Load header.php
get_header(); ?>

<?php get_template_part('modules/md-tilted-slider'); ?>



<?php
$philosophy = get_field('philosophy'); ?>

<section class="about-philosophy">
    <div class="about-philosophy__container">
        <div class="about-philosophy__aside">
            <h2 class="about-philosphy__note"><?= $philosophy['note'] ?></h2>
        </div>
        <div class="about-philosphy__main">
            <p class="about-philosophy__text"><?= $philosophy['text'] ?></p>
        </div>
    </div>
</section>

<?php
$mission = get_field('mission') ?>
<section class="about-mission">
    <div class="about-mission__container">
        <div class="about-mission__top">
            <img src="<?= $mission['icon']['url'] ?>" alt="<?= $mission['icon']['alt'] ?>" class="about-mission__icon">
            <h2 class="about-mission__note"><?= $mission['note'] ?></h2>
        </div>
        <?php if ($mission['list']) { ?>
            <div class="about-mission__main">
                <ul class="about-mission__list">
                    <?php
                    $counter = 1;
                    foreach ($mission['list'] as $item) { ?>
                        <li class="about-mission__item">
                            <p class="about-mission__counter"><?= sprintf('%02d', $counter) ?></p>
                            <h3 class="about-mission__title"><?= $item['title'] ?></h3>
                            <p class="about-mission__text"><?= $item['text'] ?></p>
                        </li>
                    <?php
                        $counter++;
                    } ?>
                </ul>
            </div>
        <?php
        } ?>
    </div>
</section>

<?php
$history = get_field('history') ?>
<section class="about-history">
    <div class="about-history__container">
        <div class="about-history__media">
            <ul class="about-history__media-list">
                <?php foreach ($history['list'] as $item) { ?>
                    <li class="about-history__media-item">
                        <div class="about-history__media-background">
                            <img src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>" class="about-history__background-image">
                            <div class="about-history__background-mask"></div>
                        </div>
                        <div class="about-history__media-foreground">
                            <img src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>" class="about-history__foreground-image">
                            <div class="about-history__foreground-mask"></div>
                        </div>
                    </li>
                <?php
                } ?>
            </ul>
        </div>
        <div class="about-history__foreground">
            <h2 class="about-history__title"><?= $history['title'] ?></h2>
            <ul class="about-history__date-list">
                <?php foreach ($history['list'] as $item) { ?>
                    <li class="about-history__date-item">
                        <p class="about-history__year"><?= $item['date'] ?></p>
                        <h3 class="about-history__title"><?= $item['title'] ?></h3>
                        <p class="about-history__text"><?= $item['text'] ?></p>
                    </li>
                <?php
                } ?>
            </ul>
        </div>
    </div>
</section>

<?php $funding = get_field('funding'); ?>
<section class="about-funding">
    <div class="about-funding__container">
        <div class="about-funding__background">
            <canvas data-canvas-grid class="about-funding__canvas"></canvas>
        </div>
        <div class="about-funding__foreground">
            <div class="about-funding__info">
                <h3 class="about-funding__title"><?= $funding['title'] ?></h3>
                <p class="about-funding__text"><?= $funding['text'] ?></p>
            </div>
            <?php
            if ($funding['list']) { ?>
                <ul class="about-funding__list">
                    <?php foreach ($funding['list'] as $item) { ?>
                        <li class="about-funding__item">
                            <img src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>" class="about-funding__logo">
                            <a target="<?= $item['link']['target'] ?>" href="<?= $item['link']['url'] ?>" class="about-funding__link"><?= $item['link']['title'] ?></a>
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
// Load footer.php
get_footer(); ?>