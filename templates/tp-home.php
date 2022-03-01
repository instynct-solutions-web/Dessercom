<?php
/*
Template Name: Home
*/

// Load header.php
get_header(); ?>


<?php
$hero = get_field('hero'); ?>
<section class="hero-slider" data-wolfpack-section data-tadam data-tadam-threshold=-1>
    <div data-hero-slider-container class="hero-slider__container">
        <ul data-hero-slider class="hero-slider__list" data-tadam-animate="x-0--y-0">
            <?php foreach ($hero['list'] as $item) { ?>
                <li class="hero-slider__item">
                    <img class="hero-slider__image" src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>">
                </li>
            <?php
            } ?>
        </ul>
        <div class="hero-slider__title-container">
            <ul data-hero-slider-nav class="hero-slider__title-list">
                <?php foreach ($hero['list'] as $item) { ?>
                    <li class="hero-slider__title-item">
                        <p class="hero-slider__title" data-words data-tadam-animate="words--delay-0.7"><?= $item['title'] ?></p>
                    </li>
                <?php } ?>
            </ul>
        </div>
    </div>
    <div class="hero-slider__button-container">
        <div data-hero-slider-prev class="hero-slider__nav hero-slider__nav--prev">
            <svg class="hero-slider__nav-svg hero-slider__nav-svg--prev" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.73 13.41">
                <g id="Groupe_456" data-name="Groupe 456">
                    <g id="Groupe_454" data-name="Groupe 454">
                        <path id="Tracé_3" data-name="Tracé 3" d="M7.12,1.41l-5.7,5.7,5.7,5.71" transform="translate(-0.01 -0.41)" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                        <line id="Ligne_1" data-name="Ligne 1" x1="1.41" y1="6.7" x2="19.73" y2="6.7" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                    </g>
                </g>
            </svg>
        </div>
        <div data-hero-slider-next class="hero-slider__nav hero-slider__nav--next">
            <svg id="Calque_1" class="hero-slider__nav-svg hero-slider__nav-svg--next" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.73 13.41">
                <g id="Groupe_456" data-name="Groupe 456">
                    <g id="Groupe_454" data-name="Groupe 454">
                        <path id="Tracé_3" data-name="Tracé 3" d="M14,1l5.7,5.7L14,12.41" transform="translate(-0.41 0)" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                        <line id="Ligne_1" data-name="Ligne 1" x1="19.32" y1="6.7" x2="1" y2="6.7" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <div class="hero-slider__illustration" data-tadam-animate="lottie-lines" data-lottie-lines="/wp-content/themes/dessercom/assets/src/lottie/lines-yellow.json"></div>
    <div class="hero-slider__indicator">
        <span class="hero-slider__indicator-bar">
            <span class="hero-slider__indicator-thumb"></span>
        </span>
    </div>
</section>

<?php
$highlight = get_field('highlight');
?>
<section class="home-highlight" data-wolfpack-section>
    <div class="home-highlight__top-container" data-tadam data-tadam-threshold="100">
        <div class="home-highlight__text-container">
            <h1 class="home-highlight__text" data-words data-tadam-animate="words"><?= $highlight['text']  ?></h1>
        </div>
        <svg class="home-highlight__image" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 181.567 163.488" data-tadam-animate="mask-image">
            <defs>
                <pattern id="image" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" xlink:href="<?= $highlight['image']['url']  ?>"></image>
                </pattern>
            </defs>
            <path id="Tracé_974" data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image)" />
        </svg>
    </div>
    <div class="home-highlight__bottom-container" data-tadam data-tadam-threshold="100">
        <div class="home-highlight__note-wrapper">
            <span class="home-highlight__note-separator" data-tadam-animate="scaleX-1"></span>
            <p class="home-highlight__note home-highlight__note--left" data-words data-tadam-animate="words"><?= $highlight['left_note']  ?></p>
            <p class="home-highlight__note home-highlight__note--right" data-words data-tadam-animate="words--delay-0.2"><?= $highlight['right_note']  ?></p>
        </div>
    </div>
</section>

<?php
$services = get_field('services');
$index = 0;
?>
<section class="home-services" data-wolfpack-section>
    <div class="home-services__container">
        <div class="home-services__background">
            <?php foreach ($services['list'] as $item) { ?>
                <?php $index++; ?>
                <div class="home-services__background-item" data-home-service-image>
                    <svg class="home-services__foreground-image" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 181.567 163.488">
                        <defs>
                            <pattern id="image-<?= $index ?>" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <image x="0" y="0" width="1" height="1" preserveAspectRatio="none slice" xlink:href="<?= $item['image']['url']  ?>"></image>
                            </pattern>
                        </defs>
                        <path id="Tracé_974" data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image-<?= $index ?>)" />
                    </svg>
                    <img class="home-services__background-image" src="<?= $item['background']['url'] ?>" alt="<?= $item['background']['alt'] ?>">
                    <span class="home-services__background-color"></span>
                </div>
            <?php
            } ?>
        </div>
        <div class="home-services__foreground" data-tadam data-tadam-threshold="100">
            <div class="home-services__info">
                <h2 class="home-services__note" data-words data-tadam-animate="words"><?= $services['top_note'] ?></h2>
                <ul class="home-services__list" data-tadam-animate="home-services">
                    <?php foreach ($services['list'] as $item) { ?>
                        <li class="home-services__item" data-home-service>
                            <a href="<?= $item['link']['url'] ?>" class="home-services__link">
                                <span class="home-services__link-content">
                                    <?= $item['link']['title'] ?>
                                </span>
                                <span class="home-services__arrow">
                                    <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.19 14.19">
                                        <g id="Groupe_789" data-name="Groupe 789">
                                            <path id="Tracé_3" data-name="Tracé 3" d="M13.42,11.71V2.28H4" transform="translate(-0.74 -0.78)" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3px" />
                                            <line id="Ligne_1" data-name="Ligne 1" x1="12.69" y1="1.5" x2="1.5" y2="12.69" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-miterlimit: 9.99999982885729;stroke-width: 3px" />
                                        </g>
                                    </svg>
                                </span>
                                <div class="home-services__link-background-container">
                                    <span class="home-services__link-background"></span>
                                </div>
                            </a>
                        </li>
                    <?php
                    } ?>
                </ul>
            </div>
            <span class="home-services__separator" data-tadam-animate="scaleX-1--delay-0.7"></span>
        </div>
    </div>
</section>

<?php $promo = get_field('promo') ?>
<section data-wolfpack-section class="home-promo">
    <div class="home-promo__container">
        <div class="home-promo__video-container">
            <video controls class="home-promo__video" src="<?= $promo['video']['url'] ?>"></video>

        </div>
        <ul data-cursor-class="video" data-cursor data-cursor-text="<?= $promo['text'] ?>" data-video-overlay class="home-promo__list">
            <?php foreach ($promo['list'] as $list) { ?>
                <li class="home-promo__item">
                    <ul data-marquee data-marquee-speed="60" class="home-promo__word-list">
                        <?php foreach ($list['adjectives_list'] as $item) { ?>
                            <li class="home-promo__word"><?= $item['adjective'] ?></li>
                        <?php } ?>
                    </ul>
                </li>
            <?php } ?>
        </ul>

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
<section class="home-commitment" data-wolfpack-section>
    <div class="home-commitment__container" data-tadam data-tadam-threshold="100">
        <div class="home-commitment__top">
            <span class="home-commitment__separator" data-tadam-animate="scaleX-1"></span>
            <svg class="home-commitment__icon" data-tadam-animate="opacity-1--rotation-0--delay-0.1" viewBox="0 0 786.511 708.195">
                <path id="mat-napo-ejWJ3a92FEs-unsplash" d="M12.3,656.391c30.132,52.726,105.531,66.393,168.567,30.479,5.2-3.011,212.447-122.342,212.447-122.342l-.213-.346L604.991,687.563c62.77,36.367,138.3,23.392,168.78-28.96v-.133c30.48-52.459,4.4-124.527-58.268-161.027-4.981-2.771-196.594-113.071-211.54-121.623v.559h-1.626l.693-1.146.933.586V131.268C503.963,58.747,454.727,0,394.036,0,333.317,0,284.082,58.747,284.082,131.268c0,5.675,1.039,222.545,1.173,243.512l.905,1.6h-.905v-1.6l-.134-.24L72.087,495.817C9.052,531.731-17.7,603.559,12.3,656.391Z" transform="translate(0)" fill="#00938f" />
            </svg>
            <h2 class="home-commitment__note" data-words data-tadam-animate="words--delay-0.2"><?= $commitments['top_note'] ?></h2>
        </div>
        <div class="home-commitment__main">
            <div class="home-commitment__text-container">
                <p class="home-commitment__text" data-words data-tadam-animate="words--delay-0.5"><?= $commitments['text'] ?></p>
            </div>
            <ul class="home-commitment__list" data-tadam-animate="home-commitments">
                <?php
                foreach ($commitments['list'] as $commitment) { ?>
                    <li class="home-commitment__item">
                        <p class="home-commitment__item-text"><?= $commitment['name'] ?></p>
                        <span class="home-commitment__item-separator"></span>
                    </li>
                <?php
                } ?>
            </ul>
        </div>

    </div>
    <div class="home-commitment__bottom">
        <div class="home-commitment__image-container" data-parallax data-parallax-speed=20>
            <img src="<?= $commitments['image']['url'] ?>" alt="<?= $commitments['image']['alt'] ?>" class="home-commitment__image">
        </div>
    </div>
</section>

<?php $social = get_field('social') ?>
<section class="home-social" data-wolfpack-section>
    <div class="home-social__container" data-tadam data-tadam-threshold="100">
        <span class="home-social__separator home-social__separator--desktop" data-tadam-animate="scaleX-1"></span>
        <div class="home-social__title-container">
            <span class="home-social__separator home-social__separator--mobile" data-tadam-animate="scaleX-1"></span>
            <svg class="home-social__icon" viewBox="0 0 786.511 708.195" data-tadam-animate="opacity-1--rotation-0--delay-0.1">
                <path id="mat-napo-ejWJ3a92FEs-unsplash" d="M12.3,656.391c30.132,52.726,105.531,66.393,168.567,30.479,5.2-3.011,212.447-122.342,212.447-122.342l-.213-.346L604.991,687.563c62.77,36.367,138.3,23.392,168.78-28.96v-.133c30.48-52.459,4.4-124.527-58.268-161.027-4.981-2.771-196.594-113.071-211.54-121.623v.559h-1.626l.693-1.146.933.586V131.268C503.963,58.747,454.727,0,394.036,0,333.317,0,284.082,58.747,284.082,131.268c0,5.675,1.039,222.545,1.173,243.512l.905,1.6h-.905v-1.6l-.134-.24L72.087,495.817C9.052,531.731-17.7,603.559,12.3,656.391Z" transform="translate(0)" fill="#00938f" />
            </svg>
            <h3 class="home-social__title" data-words data-tadam-animate="words--delay-0.5"><?= $social['title'] ?></h3>
        </div>
        <div class="home-social__feed" data-tadam-animate="opacity-1--y-0--delay-0.7">
            <?php echo do_shortcode('[custom-facebook-feed feed=2]') ?>
        </div>
    </div>
</section>
<?php
// Load footer.php
get_footer(); ?>