<?php
/*
Template Name: Services
*/

// Load header.php
get_header(); ?>
<?php
$map = get_field('map') ?>
<section data-calc-mobile class="services-map">

    <div class="services-map__svg-container">
        <?php get_template_part('modules/md-map'); ?>
    </div>
    <div class="services-map__container">
        <div class="services-map__scroll-wrapper">
            <div data-wolfpack class="services-map__scroll-container">
                <?php
                if ($map['region']) { ?>
                    <ul class="services-map__list">
                        <?php
                        foreach ($map['region'] as $region) { ?>
                            <li class="services-map__item">
                                <p class="services-map__region">
                                    <span class="services-map__counter"><?= $region['num'] ?></span>
                                    <span class="services-map__region-name">
                                        <?= $region['name'] ?>
                                    </span>

                                </p>
                            </li>
                        <?php
                        } ?>

                    </ul>
                <?php
                } ?>
            </div>


        </div>
        <div class="services-map__back-button">
            <span data-map-close class="services-map__button-icon">
                <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 13.98">
                    <path id="Polygone_14" data-name="Polygone 14" d="M.47,6.63A1,1,0,0,0,.19,8.1a.9.9,0,0,0,.28.27l8.85,5.94A1.08,1.08,0,0,0,10.81,14a1.07,1.07,0,0,0,.19-.6V1.57A1.06,1.06,0,0,0,9.92.51a1.08,1.08,0,0,0-.6.18Z" transform="translate(0 -0.51)" style="fill: #00938f" />
                </svg>
            </span>
        </div>
    </div>

</section>

<?php $hero = get_field('hero') ?>
<section data-map-hero class="services-hero">
    <div class="services-hero__background-container">
        <img src="<?= $hero['background']['url'] ?>" alt="<?= $hero['background']['alt'] ?>" class="services-hero__background-map">
    </div>
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
            <div data-map-show class="services-hero__cta">
                <span class="services-hero__cta-text" data-circle-text>
                    <?= $hero['cta'] ?>
                    <div> . </div>
                    <?= $hero['cta'] ?>
                    <div> . </div>
                </span>
                <svg class="services-hero__cta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 15">
                    <path id="Polygone_14" data-name="Polygone 14" d="M6.674,1.212a1,1,0,0,1,1.652,0l5.608,8.225A1,1,0,0,1,13.108,11H1.892a1,1,0,0,1-.826-1.563Z" transform="translate(11) rotate(90)" fill="#00938f" />
                </svg>
            </div>
        </div>
    </div>
</section>


<?php
$extra = get_field('services_ext'); ?>
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
            <svg class="services-paramedic__icon" viewBox="0 0 786.511 708.195">
                <path id="mat-napo-ejWJ3a92FEs-unsplash" d="M12.3,656.391c30.132,52.726,105.531,66.393,168.567,30.479,5.2-3.011,212.447-122.342,212.447-122.342l-.213-.346L604.991,687.563c62.77,36.367,138.3,23.392,168.78-28.96v-.133c30.48-52.459,4.4-124.527-58.268-161.027-4.981-2.771-196.594-113.071-211.54-121.623v.559h-1.626l.693-1.146.933.586V131.268C503.963,58.747,454.727,0,394.036,0,333.317,0,284.082,58.747,284.082,131.268c0,5.675,1.039,222.545,1.173,243.512l.905,1.6h-.905v-1.6l-.134-.24L72.087,495.817C9.052,531.731-17.7,603.559,12.3,656.391Z" transform="translate(0)" fill="#00938f" />
            </svg>
            <p class="services-paramedic__note"><?= $paramedic['note']; ?></p>
        </div>
        <div class="services-paramedic__main">
            <div class="services-paramedic__image-container">
                <img src="<?= $paramedic['image']['url']; ?>" alt="<?= $paramedic['image']['alt']; ?>" class="services-paramedic__image">
                <svg class="home-highlight__mask" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.4 302.3">
                    <polygon class="cls-1" points="213.3 160.5 214 160.5 214 160.3 213.6 160 213.3 160.5" />
                    <polygon class="cls-1" points="123.1 160.5 123.4 160.5 123.1 159.8 123.1 160.5" />
                    <path class="cls-1" d="M331.2,0H0V302.2H335.4V0ZM281.1,298.1a64.19,64.19,0,0,1-25.1-8.3l-88.1-51.3.1.1L79.7,289.5c-26.2,14.9-57.6,9.2-70.1-12.7S8.3,225,34.5,210l88.6-50.4.1.1c-.1-8.7-.5-98.9-.5-101.2,0-29,18.9-52.6,42.7-54.5h6C195.1,6,214,29.6,214,58.6V160.3c6.2,3.6,85.9,49.4,87.9,50.6,17.1,10,27.6,26.3,29.3,42.5v8.8a39.78,39.78,0,0,1-5.1,15.7c-6.9,11.8-19.3,18.8-33.4,20.3H281.1Z" />
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
        <div data-canvas-grid class="services-support__animation-container">
        </div>
        <div class="services-support__text-container">
            <h3 class="services-support__title"><?= $support['title'] ?></h3>
            <p class="services-support__text"><?= $support['text'] ?></p>
            <div class="services-support__button-container">
                <a href="<?= $support['link']['url'] ?>" class="services-support__button"><?= $support['link']['title'] ?></a>
                <a href="<?= $support['link_2']['url'] ?>" class="services-support__button services-support__button--secondary"><?= $support['link_2']['title'] ?></a>
            </div>

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
                        <div data-services-drawer-toggle class="services-other__item-header">
                            <h4 class="services-other__item-title"><?= $item['name'] ?></h4>
                            <div data-services-drawer-icon class="services-other__item-icon">
                                <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.1 16.66">
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