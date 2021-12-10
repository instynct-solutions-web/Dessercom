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
            <h2 class="about-philosophy__note"><?= $philosophy['note'] ?></h2>
        </div>
        <div class="about-philosophy__main">
            <p class="about-philosophy__text"><?= $philosophy['text'] ?></p>
        </div>
    </div>
</section>

<?php
$mission = get_field('mission') ?>
<section class="about-mission">
    <div class="about-mission__container">
        <div class="about-mission__top">
            <h2 class="about-mission__note">
                <svg class="about-mission__icon" xmlns="http://www.w3.org/2000/svg" width="14" height="12.606" viewBox="0 0 14 12.606">
                    <path id="Tracé_160" data-name="Tracé 160" d="M.219,11.684a2.174,2.174,0,0,0,3,.543L7,10.049l0-.006,3.772,2.2a2.176,2.176,0,0,0,3-.516v0a2.174,2.174,0,0,0-1.037-2.866c-.089-.049-3.5-2.013-3.765-2.165V6.7H8.942l.012-.02.017.01V2.337A2.172,2.172,0,0,0,7.014,0,2.172,2.172,0,0,0,5.057,2.337c0,.1.018,3.961.021,4.335l.016.028H5.078V6.671l0,0L1.283,8.826A2.175,2.175,0,0,0,.219,11.684Z" transform="translate(0)" fill="#00938f" />
                </svg>
                <?= $mission['note'] ?>
            </h2>
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
        <h2 class="about-history__title"><?= $history['title'] ?></h2>
        <div class="about-history__dates">
            <ul class="about-history__date-list" data-history-slider-dates>
                <?php foreach ($history['list'] as $item) { ?>
                    <li class="about-history__date-item">
                        <p class="about-history__year"><?= $item['date'] ?></p>
                    </li>
                <?php
                } ?>
            </ul>
        </div>
        <div class="about-history__media">
            <ul class="about-history__media-list" data-history-slider-medias>
                <?php foreach ($history['list'] as $item) { ?>
                    <li class="about-history__media-item">
                        <div class="about-history__media-background">
                            <img src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>" class="about-history__background-image">
                            <div class="about-history__background-mask"></div>
                        </div>
                        <div class="about-history__media-foreground">
                            <img src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>" class="about-history__foreground-image">
                            <svg class="about-history__foreground-mask" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.4 302.3">
                                <polygon class="cls-1" points="213.3 160.5 214 160.5 214 160.3 213.6 160 213.3 160.5" />
                                <polygon class="cls-1" points="123.1 160.5 123.4 160.5 123.1 159.8 123.1 160.5" />
                                <path class="cls-1" d="M331.2,0H0V302.2H335.4V0ZM281.1,298.1a64.19,64.19,0,0,1-25.1-8.3l-88.1-51.3.1.1L79.7,289.5c-26.2,14.9-57.6,9.2-70.1-12.7S8.3,225,34.5,210l88.6-50.4.1.1c-.1-8.7-.5-98.9-.5-101.2,0-29,18.9-52.6,42.7-54.5h6C195.1,6,214,29.6,214,58.6V160.3c6.2,3.6,85.9,49.4,87.9,50.6,17.1,10,27.6,26.3,29.3,42.5v8.8a39.78,39.78,0,0,1-5.1,15.7c-6.9,11.8-19.3,18.8-33.4,20.3H281.1Z" />
                            </svg>
                        </div>
                    </li>
                <?php
                } ?>
            </ul>
        </div>
        <div class="about-history__content">
            <ul class="about-history__content-list" data-history-slider-content>
                <?php foreach ($history['list'] as $item) { ?>
                    <li class="about-history__content-item">
                        <h3 class="about-history__content-title"><?= $item['title'] ?></h3>
                        <p class="about-history__content-text"><?= $item['text'] ?></p>
                    </li>
                <?php
                } ?>
            </ul>
        </div>
        <div class="about-history__button-container">
            <div data-history-slider-prev class="about-history__nav about-history__nav--prev">
                <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.73 13.41">
                    <g id="Groupe_456" data-name="Groupe 456">
                        <g id="Groupe_454" data-name="Groupe 454">
                            <path id="Tracé_3" data-name="Tracé 3" d="M7.12,1.41l-5.7,5.7,5.7,5.71" transform="translate(-0.01 -0.41)" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                            <line id="Ligne_1" data-name="Ligne 1" x1="1.41" y1="6.7" x2="19.73" y2="6.7" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                        </g>
                    </g>
                </svg>
            </div>
            <div data-history-slider-next class="about-history__nav about-history__nav--next">
                <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.73 13.41">
                    <g id="Groupe_456" data-name="Groupe 456">
                        <g id="Groupe_454" data-name="Groupe 454">
                            <path id="Tracé_3" data-name="Tracé 3" d="M14,1l5.7,5.7L14,12.41" transform="translate(-0.41 0)" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                            <line id="Ligne_1" data-name="Ligne 1" x1="19.32" y1="6.7" x2="1" y2="6.7" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
        <span class="about-history__line"></span>
    </div>
</section>

<?php $funding = get_field('funding'); ?>
<section class="about-funding">
    <div class="about-funding__container">
        <div class="about-funding__background">
            <canvas data-canvas-grid class="about-funding__canvas"></canvas>
            <img class="about-funding__motif" src="/wp-content/themes/dessercom/assets/src/svg/dessercom-motif.svg" alt="Motif">
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
                            <a target="<?= $item['link']['target'] ?>" href="<?= $item['link']['url'] ?>" class="about-funding__link">
                                <?= $item['link']['title'] ?>
                                <svg class="about-funding__link-icon" xmlns="http://www.w3.org/2000/svg" width="13.384" height="14.515" viewBox="0 0 13.384 14.515">
                                    <g id="Groupe_788" data-name="Groupe 788" transform="translate(1.414 1)">
                                        <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5.278,5.278,10.555,0" transform="translate(0 7.237)" fill="none" stroke="#00938f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                        <line id="Ligne_1" data-name="Ligne 1" y1="12.515" transform="translate(5.278 0)" fill="none" stroke="#00938f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                    </g>
                                </svg>
                            </a>
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