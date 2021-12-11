<?php
/*
Template Name: Home
*/

// Load header.php
get_header(); ?>


<?php
$hero = get_field('hero'); ?>
<section class="hero-slider">
    <div class="hero-slider__container">
        <ul data-hero-slider class="hero-slider__list">
            <?php foreach ($hero['list'] as $item) { ?>
                <li class="hero-slider__item">
                    <img class="hero-slider__image hero-slider__image--tablet" src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>">
                    <img class="hero-slider__image" src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>">
                    <img class="hero-slider__image hero-slider__image--tablet" src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>">
                </li>
            <?php
            } ?>
        </ul>
        <div class="hero-slider__title-container">
            <ul data-hero-slider-nav class="hero-slider__title-list">
                <?php foreach ($hero['list'] as $item) { ?>
                    <li class="hero-slider__title-item">
                        <p class="hero-slider__title"><?= $item['title'] ?></p>
                    </li>
                <?php } ?>
            </ul>
        </div>
    </div>
    <div class="hero-slider__button-container">
        <div data-hero-slider-prev class="hero-slider__nav hero-slider__nav--prev">
            <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.73 13.41">
                <g id="Groupe_456" data-name="Groupe 456">
                    <g id="Groupe_454" data-name="Groupe 454">
                        <path id="Tracé_3" data-name="Tracé 3" d="M7.12,1.41l-5.7,5.7,5.7,5.71" transform="translate(-0.01 -0.41)" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                        <line id="Ligne_1" data-name="Ligne 1" x1="1.41" y1="6.7" x2="19.73" y2="6.7" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                    </g>
                </g>
            </svg>
        </div>
        <div data-hero-slider-next class="hero-slider__nav hero-slider__nav--next">
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
    <?php
    if ($hero['illustration']) { ?>
        <img src="<?= $hero['illustration']['url'] ?>" alt="<?= $hero['illustration']['alt'] ?>" class="hero-slider__illustration">
    <?php } ?>
    <div class="hero-slider__indicator">
        <span class="hero-slider__indicator-bar">
            <span class="hero-slider__indicator-thumb"></span>
        </span>
    </div>

</section>

<?php
$highlight = get_field('highlight');
?>
<section class="home-highlight">
    <div class="home-highlight__top-container">
        <div class="home-highlight__text-container">
            <h1 class="home-highlight__text"><?= $highlight['text']  ?></h1>
        </div>
        <div class="home-highlight__image-container">
            <img class="home-highlight__image" src="<?= $highlight['image']['url']  ?>" alt="<?= $highlight['image']['alt'] ?>">

            <svg class="home-highlight__mask" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.4 302.3">
                <polygon class="cls-1" points="213.3 160.5 214 160.5 214 160.3 213.6 160 213.3 160.5" />
                <polygon class="cls-1" points="123.1 160.5 123.4 160.5 123.1 159.8 123.1 160.5" />
                <path class="cls-1" d="M331.2,0H0V302.2H335.4V0ZM281.1,298.1a64.19,64.19,0,0,1-25.1-8.3l-88.1-51.3.1.1L79.7,289.5c-26.2,14.9-57.6,9.2-70.1-12.7S8.3,225,34.5,210l88.6-50.4.1.1c-.1-8.7-.5-98.9-.5-101.2,0-29,18.9-52.6,42.7-54.5h6C195.1,6,214,29.6,214,58.6V160.3c6.2,3.6,85.9,49.4,87.9,50.6,17.1,10,27.6,26.3,29.3,42.5v8.8a39.78,39.78,0,0,1-5.1,15.7c-6.9,11.8-19.3,18.8-33.4,20.3H281.1Z" />
            </svg>

        </div>
    </div>
    <div class="home-highlight__bottom-container">
        <div class="home-highlight__note-wrapper">
            <p class="home-highlight__note home-highlight__note--left"><?= $highlight['left_note']  ?></p>
            <p class="home-highlight__note home-highlight__note--right"><?= $highlight['right_note']  ?></p>
        </div>

    </div>
</section>

<?php
$services = get_field('services');
?>
<section class="home-services">
    <div class="home-services__container">
        <div class="home-services__background">
            <ul class="home-services__backgound-list">
                <?php foreach ($services['list'] as $item) { ?>
                    <li class="home-services__background-item">
                        <img class="home-services__backgound-image" src="<?= $item['background']['url'] ?>" alt="<?= $item['background']['alt'] ?>">
                    </li>
                <?php
                } ?>
            </ul>
        </div>
        <div class="home-services__foreground">
            <div class="home-services__info">
                <h2 class="home-services__note"><?= $services['top_note'] ?></h2>
                <ul class="home-services__list">
                    <?php foreach ($services['list'] as $item) { ?>
                        <li class="home-services__item">
                            <a href="<?= $item['link']['url'] ?>" class="home-services__link"><?= $item['link']['title'] ?>
                                <span class="home-services__arrow">
                                    <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.19 14.19">
                                        <g id="Groupe_789" data-name="Groupe 789">
                                            <path id="Tracé_3" data-name="Tracé 3" d="M13.42,11.71V2.28H4" transform="translate(-0.74 -0.78)" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3px" />
                                            <line id="Ligne_1" data-name="Ligne 1" x1="12.69" y1="1.5" x2="1.5" y2="12.69" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-miterlimit: 9.99999982885729;stroke-width: 3px" />
                                        </g>
                                    </svg>
                                </span>
                            </a>
                        </li>
                    <?php
                    } ?>
                </ul>
            </div>
            <div class="home-services__media">
                <ul class="home-services__media-list">
                    <?php foreach ($services['list'] as $item) { ?>
                        <li class="home-services__media-item">
                            <img class="home-services__image" src="<?= $item['image']['url']  ?>" alt="<?= $item['image']['alt']  ?>">
                        </li>
                    <?php
                    } ?>
                </ul>
            </div>
        </div>
    </div>
</section>
<?php $promo = get_field('promo') ?>
<section data-cursor-class="video" data-cursor data-cursor-text="<?= $promo['text'] ?>" class="home-promo">
    <div class="home-promo__container">
        <ul data-video-overlay class="home-promo__list">
            <?php foreach ($promo['list'] as $list) { ?>
                <li class="home-promo__item">
                    <ul data-marquee data-marquee-speed="60" class="home-promo__word-list">
                        <?php foreach ($list['adjectives_list'] as $item) { ?>
                            <li class="home-promo__word"><?= $item['adjective'] ?></li>
                        <?php
                        } ?>
                    </ul>
                </li>
            <?php
            } ?>
        </ul>
        <div class="home-promo__video-container">
            <?= $promo['video'] ?>
        </div>
        <div data-video-button class="home-promo__video-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 15">
                <path id="Polygone_14" data-name="Polygone 14" d="M6.674,1.212a1,1,0,0,1,1.652,0l5.608,8.225A1,1,0,0,1,13.108,11H1.892a1,1,0,0,1-.826-1.563Z" transform="translate(11) rotate(90)" fill="#00938f" />
            </svg>

        </div>
    </div>
</section>

<?php
$commitments = get_field('commitment');
?>
<section class="home-commitment">
    <div class="home-commitment__container">
        <div class="home-commitment__top">
            <svg class="home-commitment__icon" viewBox="0 0 786.511 708.195">
                <path id="mat-napo-ejWJ3a92FEs-unsplash" d="M12.3,656.391c30.132,52.726,105.531,66.393,168.567,30.479,5.2-3.011,212.447-122.342,212.447-122.342l-.213-.346L604.991,687.563c62.77,36.367,138.3,23.392,168.78-28.96v-.133c30.48-52.459,4.4-124.527-58.268-161.027-4.981-2.771-196.594-113.071-211.54-121.623v.559h-1.626l.693-1.146.933.586V131.268C503.963,58.747,454.727,0,394.036,0,333.317,0,284.082,58.747,284.082,131.268c0,5.675,1.039,222.545,1.173,243.512l.905,1.6h-.905v-1.6l-.134-.24L72.087,495.817C9.052,531.731-17.7,603.559,12.3,656.391Z" transform="translate(0)" fill="#00938f" />
            </svg>
            <h2 class="home-commitment__note"><?= $commitments['top_note'] ?></h2>
        </div>
        <div class="home-commitment__main">
            <div class="home-commitment__text-container">
                <p class="home-commitment__text"><?= $commitments['text'] ?></p>
            </div>
            <ul class="home-commitment__list">
                <?php
                foreach ($commitments['list'] as $commitment) { ?>
                    <li class="home-commitment__item">
                        <p class="home-commitment__item-text"><?= $commitment['name'] ?></p>
                    </li>
                <?php
                } ?>
            </ul>
        </div>

    </div>
    <div class="home-commitment__bottom">
        <img src="<?= $commitments['image']['url'] ?>" alt="<?= $commitments['image']['alt'] ?>" class="home-commitment__image">
    </div>
</section>

<?php $social = get_field('social') ?>
<section class="home-social">
    <div class="home-social__container">
        <div class="home-social__title-container">
            <svg class="home-social__icon" viewBox="0 0 786.511 708.195">
                <path id="mat-napo-ejWJ3a92FEs-unsplash" d="M12.3,656.391c30.132,52.726,105.531,66.393,168.567,30.479,5.2-3.011,212.447-122.342,212.447-122.342l-.213-.346L604.991,687.563c62.77,36.367,138.3,23.392,168.78-28.96v-.133c30.48-52.459,4.4-124.527-58.268-161.027-4.981-2.771-196.594-113.071-211.54-121.623v.559h-1.626l.693-1.146.933.586V131.268C503.963,58.747,454.727,0,394.036,0,333.317,0,284.082,58.747,284.082,131.268c0,5.675,1.039,222.545,1.173,243.512l.905,1.6h-.905v-1.6l-.134-.24L72.087,495.817C9.052,531.731-17.7,603.559,12.3,656.391Z" transform="translate(0)" fill="#00938f" />
            </svg>
            <h3 class="home-social__title"><?= $social['title'] ?></h3>
        </div>
        <div class="home-social__feed"></div>
    </div>
</section>
<?php
// Load footer.php
get_footer(); ?>