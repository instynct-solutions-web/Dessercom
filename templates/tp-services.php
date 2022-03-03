<?php
/*
Template Name: Services
*/

// Load header.php
get_header(); ?>
<?php
$map = get_field('map') ?>
<div data-calc-mobile data-map class="services-map">
    <div class="services-map__content" data-wolfpack>
        <div class="services-map__svg-container">
            <?php get_template_part('modules/md-map'); ?>
        </div>
        <div class="services-map__container">
            <div class="services-map__scroll-wrapper">
                <div class="services-map__scroll-container">
                    <?php
                    if ($map['region']) { ?>
                        <ul class="services-map__list">
                            <?php
                            foreach ($map['region'] as $region) { ?>
                                <li class="services-map__item">
                                    <p data-map-region="<?= $region['num'] ?>" data-cursor class="services-map__region">
                                        <span class="services-map__counter"><?= $region['num'] ?></span>
                                        <span data-region-name class="services-map__region-name">
                                            <?= $region['name'] ?>
                                        </span>
                                    </p>
                                </li>
                            <?php } ?>
                        </ul>
                    <?php } ?>
                </div>
            </div>
            <div class="services-map__back-button">
                <span data-cursor data-map-close class="services-map__button-icon">
                    <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 13.98">
                        <path id="Polygone_14" data-name="Polygone 14" d="M.47,6.63A1,1,0,0,0,.19,8.1a.9.9,0,0,0,.28.27l8.85,5.94A1.08,1.08,0,0,0,10.81,14a1.07,1.07,0,0,0,.19-.6V1.57A1.06,1.06,0,0,0,9.92.51a1.08,1.08,0,0,0-.6.18Z" transform="translate(0 -0.51)" style="fill: #00938f" />
                    </svg>
                </span>
            </div>
        </div>
    </div>
</div>

<?php $hero = get_field('hero') ?>
<section data-wolfpack-section data-map-hero class="services-hero" data-tadam data-tadam-threshold="-1">
    <div class="services-hero__background-container">
        <img src="<?= $hero['background']['url'] ?>" alt="<?= $hero['background']['alt'] ?>" class="services-hero__background-map">
    </div>
    <div class="services-hero__container">
        <div class="services-hero__text-container">
            <h1 class="services-hero__title" data-words data-tadam-animate="words--delay-0.3"><?= $hero['title'] ?></h1>
            <ul class="services-hero__list" data-tadam-animate="services-buttons">
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
            <div data-cursor data-map-show class="services-hero__cta cta">
                <span class="services-hero__cta-text cta__text" data-circle-text>
                    <?= $hero['cta'] ?>
                    <div> . </div>
                    <?= $hero['cta'] ?>
                    <div> . </div>
                </span>
                <svg class="services-hero__cta-icon cta__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 15">
                    <path id="Polygone_14" data-name="Polygone 14" d="M6.674,1.212a1,1,0,0,1,1.652,0l5.608,8.225A1,1,0,0,1,13.108,11H1.892a1,1,0,0,1-.826-1.563Z" transform="translate(11) rotate(90)" fill="#00938f" />
                </svg>
            </div>
        </div>
    </div>
</section>

<?php
$extra = get_field('services_ext'); ?>
<section data-wolfpack-section class="services-extra" data-tadam data-tadam-threshold="100">
    <div class="services-extra__background" data-tadam-animate="lottie-lines-once" data-lottie-lines="/wp-content/themes/dessercom/assets/src/lottie/lines-white.json"></div>
    <div data-follow-me-container class="services-extra__container">
        <div class="services-extra__logo-container">
            <img src="<?= $extra['icon']['url'] ?>" alt="<?= $extra['icon']['alt'] ?>" class="services-extra__logo">
        </div>
        <div data-follow-me class="services-extra__info">
            <h2 class="services-extra__title" data-words data-tadam-animate="words"><?= $extra['title'] ?></h2>
            <p class="services-extra__text" data-words data-tadam-animate="words--delay-0.2"><?= $extra['text'] ?></pd>
        </div>
        <div class="services-extra__list-container">
            <ul class="services-extra__list" data-tadam-animate="services-extras">
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
<section data-wolfpack-section class="services-paramedic" id="soins-urgence-prehospitaliers" data-tadam data-tadam-threshold="100">
    <div class="services-paramedic__container">
        <div class="services-paramedic__top">
            <span class="services-paramedic__separator" data-tadam-animate="scaleX-1"></span>
            <svg class="services-paramedic__icon" viewBox="0 0 786.511 708.195" data-tadam-animate="opacity-1--rotation-0--delay-0.1">
                <path id="mat-napo-ejWJ3a92FEs-unsplash" d="M12.3,656.391c30.132,52.726,105.531,66.393,168.567,30.479,5.2-3.011,212.447-122.342,212.447-122.342l-.213-.346L604.991,687.563c62.77,36.367,138.3,23.392,168.78-28.96v-.133c30.48-52.459,4.4-124.527-58.268-161.027-4.981-2.771-196.594-113.071-211.54-121.623v.559h-1.626l.693-1.146.933.586V131.268C503.963,58.747,454.727,0,394.036,0,333.317,0,284.082,58.747,284.082,131.268c0,5.675,1.039,222.545,1.173,243.512l.905,1.6h-.905v-1.6l-.134-.24L72.087,495.817C9.052,531.731-17.7,603.559,12.3,656.391Z" transform="translate(0)" fill="#00938f" />
            </svg>
            <p class="services-paramedic__note" data-words data-tadam-animate="words--delay-0.2"><?= $paramedic['note']; ?></p>
        </div>
        <div class="services-paramedic__main">
            <div class="services-paramedic__image-container">
                <svg class="services-paramedic__image" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 181.567 163.488" data-tadam-animate="mask-image">
                    <defs>
                        <pattern id="image" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" xlink:href="<?= $paramedic['image']['url']; ?>"></image>
                        </pattern>
                    </defs>
                    <path id="Tracé_974" data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image)" />
                </svg>
            </div>
            <div class="services-paramedic__text-container">
                <h2 class="services-paramedic__title"><?= $paramedic['title'] ?></h2>
                <p class="services-paramedic__text"><?= $paramedic['text'] ?></p>
                <p class="services-paramedic__subtext"><?= $paramedic['subtext'] ?></p>
            </div>
            <div class="services-paramedic__button-container">
                <p class="services-paramedic__info"><?= $paramedic['info'] ?></p>
                <p class="services-paramedic__contact">
                    <a href="<?= $paramedic['email']['url'] ?>" class="services-paramedic__link"><?= $paramedic['email']['title'] ?></a>
                    <span><?= $paramedic['separator'] ?></span>
                    <a href="<?= $paramedic['phone']['url'] ?>" class="services-paramedic__link"><?= $paramedic['phone']['title'] ?></a>
                </p>
                <a href="<?= $paramedic['button']['url'] ?>" class="services-paramedic__button"><?= $paramedic['button']['title'] ?></a>
            </div>

        </div>
    </div>
</section>

<?php
$support = get_field('support') ?>

<section data-wolfpack-section class="services-support" id="transport-medical" data-tadam data-tadam-threshold="100">
    <div class="services-support__container">
        <div class="services-support__background">
            <div class="services-support__motif" data-tadam-animate="about-pattern" data-lottie-pattern="/wp-content/themes/dessercom/assets/src/lottie/pattern-1.json"></div>
        </div>
        <div class="services-support__text-container">
            <h3 class="services-support__title"><?= $support['title'] ?></h3>
            <p class="services-support__text"><?= $support['text'] ?></p>
            <div class="services-support__button-container">
                <?php if ($support['link']) { ?>
                    <a href="<?= $support['link']['url'] ?>" class="services-support__button"><?= $support['link']['title'] ?></a>
                <?php } ?>
                <a href="<?= $support['link_2']['url'] ?>" class="services-support__button services-support__button--secondary"><?= $support['link_2']['title'] ?></a>
            </div>
        </div>
    </div>
</section>
<?php
$community = get_field('paramed'); ?>
<section data-wolfpack-section class="services-community" id="paramedecine-communautaire" data-tadam data-tadam-threshold="100">
    <div class="services-community__container">
        <div class="services-community__main">
            <div class="services-community__image-container">
                <svg class="services-community__image" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 181.567 163.488" data-tadam-animate="mask-image">
                    <defs>
                        <pattern id="image2" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" xlink:href="<?= $community['image']['url']; ?>"></image>
                        </pattern>
                    </defs>
                    <path id="Tracé_974" data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image2)" />
                </svg>
            </div>
            <div class="services-community__text-container">
                <h2 class="services-community__title"><?= $community['title'] ?></h2>
                <p class="services-community__text"><?= $community['text'] ?></p>
            </div>
            <div class="services-community__button-container">
                <a href="<?= $community['link']['url'] ?>" class="services-community__button"><?= $community['link']['title'] ?></a>
            </div>

        </div>
    </div>
</section>
<?php
$other = get_field('other') ?>
<section data-wolfpack-section class="services-other" id="services-aux-entreprises" data-tadam data-tadam-threshold="100">
    <div class="services-other__container">
        <div class="services-other__top">
            <h2 class="services-other__title" data-words data-tadam-animate="words"><?= $other['title'] ?></h2>
            <a target="<?= $other['link']['target'] ?>" href="<?= $other['link']['url'] ?>" class="services-other__button services-other__button--desktop"><?= $other['link']['title'] ?></a>
            <span class="services-other__separator" data-tadam-animate="scaleY-1--delay-0.4"></span>
        </div>
        <?php
        if ($other['list']) { ?>
            <ul class="services-other__list" data-tadam-animate="services-others">
                <?php
                foreach ($other['list'] as $item) { ?>
                    <li class="services-other__item">
                        <div data-services-drawer-toggle data-cursor class="services-other__item-header">
                            <h4 class="services-other__item-title"><?= $item['name'] ?></h4>
                            <div data-services-drawer-icon class="services-other__item-icon">
                                <svg class="services-other__item-open" xmlns="http://www.w3.org/2000/svg" width="22.614" height="25.458" viewBox="0 0 22.614 25.458">
                                    <g id="Groupe_1004" data-name="Groupe 1004" transform="translate(1.414 -13.432)">
                                        <path id="Tracé_3" data-name="Tracé 3" d="M0,0,9.892,9.892,19.785,0" transform="translate(0 27.997)" fill="none" stroke="#008884" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                        <line id="Ligne_1" data-name="Ligne 1" y1="23.458" transform="translate(9.893 14.432)" fill="none" stroke="#008884" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                    </g>
                                </svg>
                                <svg class="services-other__item-close" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.1 16.66">
                                    <g id="Groupe_1000" data-name="Groupe 1000">
                                        <g id="Groupe_999" data-name="Groupe 999">
                                            <g id="Groupe_796" data-name="Groupe 796">
                                                <line id="Ligne_1" data-name="Ligne 1" x1="1" y1="15.66" x2="15.66" y2="1" style="fill: none;stroke: #008884;stroke-linecap: round;stroke-miterlimit: 9.99999982885729;stroke-width: 1.999999965771458px" />
                                            </g>
                                            <line id="Ligne_133" data-name="Ligne 133" x1="1" y1="1" x2="16.1" y2="15.63" style="fill: none;stroke: #008884;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div data-services-drawer-container class="services-other__item-body">
                            <p class="services-other__item-text"><?= $item['text'] ?></p>
                        </div>
                    </li>
                <?php } ?>
            </ul>
        <?php } ?>
        <div class="services-other__button-container">
            <a target="<?= $other['link']['target'] ?>" href="<?= $other['link']['url'] ?>" class="services-other__button services-other__button--mobile"><?= $other['link']['title'] ?></a>
        </div>
    </div>
</section>



<?php
// Load footer.php
get_footer(); ?>