<?php
/*
Template Name: About
*/

// Load header.php
get_header(); ?>
<?php get_template_part('modules/md-tilted-slider'); ?>


<?php
$philosophy = get_field('philosophy'); ?>

<section data-wolfpack-section class="about-philosophy" data-tadam data-tadam-threshold="100">
    <div data-higlight-wrapper class="about-philosophy__container">
        <span class="about-philosophy__container-separator" data-tadam-animate="scaleX-1"></span>
        <div class="about-philosophy__aside">
            <span class="about-philosophy__separator"></span>
            <h2 class="about-philosophy__note" data-words data-tadam-animate="words--delay-0.2"><?= $philosophy['note'] ?></h2>
        </div>
        <div data-cursor data-cursor-class="highlight" data-highlight-container class="about-philosophy__main">
            <span data-highlight-cursor class="about-philosophy__cursor"></span>
            <p class="about-philosophy__text" data-words data-tadam-animate="words--delay-0.2"><?= $philosophy['text'] ?></p>
        </div>
    </div>
</section>

<?php
$mission = get_field('mission') ?>
<section data-wolfpack-section class="about-mission" data-tadam data-tadam-threshold="100">
    <div class="about-mission__container">
        <div class="about-mission__top">
            <span class="about-mission__separator" data-tadam-animate="scaleX-1"></span>
            <svg class="about-mission__icon" xmlns="http://www.w3.org/2000/svg" width="14" height="12.606" viewBox="0 0 14 12.606" data-tadam-animate="opacity-1--rotation-0--delay-0.1">
                <path id="Tracé_160" data-name="Tracé 160" d="M.219,11.684a2.174,2.174,0,0,0,3,.543L7,10.049l0-.006,3.772,2.2a2.176,2.176,0,0,0,3-.516v0a2.174,2.174,0,0,0-1.037-2.866c-.089-.049-3.5-2.013-3.765-2.165V6.7H8.942l.012-.02.017.01V2.337A2.172,2.172,0,0,0,7.014,0,2.172,2.172,0,0,0,5.057,2.337c0,.1.018,3.961.021,4.335l.016.028H5.078V6.671l0,0L1.283,8.826A2.175,2.175,0,0,0,.219,11.684Z" transform="translate(0)" fill="#00938f" />
            </svg>
            <h2 class="about-mission__note" data-words data-tadam-animate="words--delay-0.2"><?= $mission['note'] ?></h2>
        </div>
        <?php if ($mission['list']) { ?>
            <div class="about-mission__main">
                <ul class="about-mission__list" data-tadam-animate="about-missions">
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
$history = get_field('history');
$index = 0;
$indexBackground = 0;
?>
<section data-wolfpack-section class="about-history">
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
                    <?php
                    $index++;
                    $indexBackground++;
                    ?>
                    <li class="about-history__media-item">
                        <svg class="about-history__background-image" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 181.567 163.488">
                            <defs>
                                <pattern id="imageBackground-<?= $indexBackground ?>" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" xlink:href="<?= $item['image']['url'] ?>"></image>
                                </pattern>
                            </defs>
                            <path data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#imageBackground-<?= $indexBackground ?>)" />
                        </svg>
                        <svg class="about-history__foreground-image" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 181.567 163.488">
                            <defs>
                                <pattern id="image-<?= $index ?>" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" xlink:href="<?= $item['image']['url'] ?>"></image>
                                </pattern>
                            </defs>
                            <path data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image-<?= $index ?>)" />
                        </svg>
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
<section data-wolfpack-section class="about-funding" data-tadam data-tadam-threshold="100">
    <div class="about-funding__container">
        <div class="about-funding__background">
            <canvas data-canvas-grid class="about-funding__canvas"></canvas>
            <img class="about-funding__motif" src="/wp-content/themes/dessercom/assets/src/svg/dessercom-motif.svg" alt="Motif" data-tadam-animate="opacity-1--delay-0.4">
        </div>
        <div class="about-funding__foreground">
            <div class="about-funding__info">
                <h3 class="about-funding__title"><?= $funding['title'] ?></h3>
                <p class="about-funding__text"><?= $funding['text'] ?></p>
            </div>
            <?php
            if ($funding['list']) { ?>
                <ul class="about-funding__list" data-tadam-animate="about-fundings">
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