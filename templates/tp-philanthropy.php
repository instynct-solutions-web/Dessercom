<?php
/*
Template Name: Philanthropy
*/

// Load header.php
get_header(); ?>

<?php get_template_part('modules/md-tilted-slider'); ?>

<?php
$highlight = get_field('highlight') ?>
<section class="philanthropy-highlight" data-wolfpack-section data-tadam data-tadam-threshold="100">
    <div class="philanthropy-highlight__container">
        <div class="philanthropy-highlight__note-container">
            <h2 class="philanthropy-highlight__note" data-words data-tadam-animate="words"><?= $highlight['note'] ?></h2>
        </div>
        <div class="philanthropy-highlight__text-container">
            <p class="philanthropy-highlight__text" data-words data-tadam-animate="words--delay-0.2"><?= $highlight['text'] ?></p>
        </div>
    </div>
</section>

<?php $financing = get_field('financing') ?>
<section class="philanthropy-financing" data-wolfpack-section data-tadam data-tadam-threshold="100">
    <div class="philanthropy-financing__container">
        <div class="philanthropy-financing__top">
            <span class="philanthropy-financing__separator" data-tadam-animate="scaleX-1"></span>
            <img src="<?= $financing['icon']['url'] ?>" alt="<?= $financing['icon']['alt'] ?>" class="philanthropy-financing__icon" data-tadam-animate="opacity-1--rotation-0--delay-0.1">
            <h2 class="philanthropy-financing__note" data-words data-tadam-animate="words--delay-0.2"><?= $financing['title'] ?></>
        </div>
        <div class="philanthropy-financing__main">
            <?php if ($financing['list']) { ?>
                <div class="philanthropy-financing__logo-container">
                    <div class="philanthropy-financing__amount-container">
                        <p class="philanthropy-financing__amount" data-letters data-tadam-animate="letters--delay-0.2"><?= $financing['amount'] ?></p>
                    </div>
                    <ul class="philanthropy-financing__list" data-tadam-animate="philanthropy-logos">
                        <?php foreach ($financing['list'] as $logo) { ?>
                            <li class="philanthropy-financing__item">
                                <img src="<?= $logo['logo']['url'] ?>" alt="<?= $logo['logo']['alt'] ?>" class="philanthropy-financing__logo">
                            </li>
                        <?php
                        } ?>
                    </ul>
                </div>
            <?php
            } ?>
            <div class="philanthropy-financing__bottom-icon">
                <svg class="philanthropy-financing__bottom-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="786.511" height="708.195" viewBox="0 0 786.511 708.195">
                    <path id="mat-napo-ejWJ3a92FEs-unsplash" d="M12.3,656.391c30.132,52.726,105.531,66.393,168.567,30.479,5.2-3.011,212.447-122.342,212.447-122.342l-.213-.346L604.991,687.563c62.77,36.367,138.3,23.392,168.78-28.96v-.133c30.48-52.459,4.4-124.527-58.268-161.027-4.981-2.771-196.594-113.071-211.54-121.623v.559h-1.626l.693-1.146.933.586V131.268C503.963,58.747,454.727,0,394.036,0,333.317,0,284.082,58.747,284.082,131.268c0,5.675,1.039,222.545,1.173,243.512l.905,1.6h-.905v-1.6l-.134-.24L72.087,495.817C9.052,531.731-17.7,603.559,12.3,656.391Z" transform="translate(0)" fill="#fff" />
                </svg>
            </div>

        </div>
    </div>
</section>

<?php
$house = get_field('house'); ?>
<section class="philanthropy-house" data-wolfpack-section data-tadam data-tadam-threshold="100">
    <div class="philanthropy-house__container">
        <div class="philanthropy-house__top">
            <p class="philanthropy-house__note"><?= $house['note'] ?></p>
        </div>
        <div class="philanthropy-house__main">
            <div class="philanthropy-house__media">
                <div class="philanthropy-house__logo-container" data-tadam-animate="mask-image">
                    <svg class="philanthropy-house__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.567 163.488">
                        <defs>
                            <pattern id="image" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" xlink:href="<?= $house['list'][0]['image']['url']  ?>"></image>
                            </pattern>
                        </defs>
                        <path id="Tracé_974" data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image)" />
                    </svg>
                    <div data-lightbox-slider-toggle class="philanthropy-house__toggle" data-cursor data-cursor-class="blue"><span data-cursor class="philanthropy-house__plus">+</span></div>
                </div>
            </div>
            <div class="philanthropy-house__info">
                <h2 class="philanthropy-house__title"><?= $house['title'] ?></h2>
                <p class="philanthropy-house__text"><?= $house['text'] ?></p>
                <p class="philanthropy-house__subtext"><?= $house['text_2'] ?></p>
                <div class="philanthropy-house__link-container">
                    <a href="<?= $house['phone']['url'] ?>" class="philanthropy-house__phone"><?= $house['phone']['title'] ?></a>
                    <a href="<?= $house['website']['url'] ?>" target="<?= $house['website']['target'] ?>" class="philanthropy-house__website"><?= $house['website']['title'] ?></a>
                </div>

            </div>
        </div>
    </div>

</section>

<?php
$research = get_field('research') ?>
<section class="philanthropy-research" data-wolfpack-section data-tadam data-tadam-threshold="100">
    <div class="philanthropy-research__container">
        <div class="philanthropy-research__background">
            <div class="philanthropy-research__top-container">
                <div data-research-background-text class="philanthropy-research__background-top">
                    <img src="<?= $research['icon']['url'] ?>" alt="<?= $research['icon']['alt'] ?>" class="philanthropy-research__icon">
                    <p class="philanthropy-research__note"><?= $research['note'] ?></p>
                </div>
            </div>
            <div class="philanthropy-research__left-container">

                <p data-research-text class="philanthropy-research__background-text"><?= $research['text'] ?></p>
                <div class="philanthropy-research__close-container">
                    <div data-cursor data-research-slider-close class="philanthropy-research__close">
                        <svg class="philanthropy-research__close-svg" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.73 13.41">
                            <g id="Groupe_456" data-name="Groupe 456">
                                <g id="Groupe_454" data-name="Groupe 454">
                                    <path id="Tracé_3" data-name="Tracé 3" d="M14,1l5.7,5.7L14,12.41" transform="translate(-0.41 0)" style="fill: none;stroke: #00938f;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                                    <line id="Ligne_1" data-name="Ligne 1" x1="19.32" y1="6.7" x2="1" y2="6.7" style="fill: none;stroke: #00938f;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <?php if ($research['list']) { ?>
                <ul data-research-slider-images data-research-slider class="philanthropy-research__background-list">
                    <?php foreach ($research['list'] as $item) { ?>
                        <li class="philanthropy-research__background-item">
                            <img src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>" class="philanthropy-research__background-image">
                        </li>
                    <?php
                    } ?>
                </ul>
            <?php
            } ?>

        </div>
        <div data-research-foreground class="philanthropy-research__foreground">
            <div class="philanthropy-research__top">
                <span class="philanthropy-research__separator" data-tadam-animate="scaleX-1"></span>
                <img src="<?= $research['icon']['url'] ?>" alt="<?= $research['icon']['alt'] ?>" class="philanthropy-research__icon" data-tadam-animate="opacity-1--rotation-0--delay-0.1">
                <p class="philanthropy-research__note" data-words data-tadam-animate="words--delay-0.2"><?= $research['note'] ?></p>
            </div>
            <div class="philanthropy-research__text-container">
                <p class="philanthropy-research__text" data-words data-tadam-animate="words--delay-0.5"><?= $research['text'] ?></p>
                <div class="philanthropy-research__link-container" data-cursor data-cursor-class="blue" data-tadam-animate="opacity-1--y-0--delay-0.6">
                    <a href="<?= $research['link']['url'] ?>" target="<?= $research['link']['target'] ?>" class="philanthropy-research__link"><?= $research['link']['title'] ?></a>
                </div>
            </div>
            <div class="philanthropy-research__toggle-container" data-cursor data-cursor-class="blue">
                <div data-cursor data-research-slider-toggle class="philanthropy-research__toggle">
                    <svg class="philanthropy-research__toggle-svg" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.73 13.41">
                        <g id="Groupe_456" data-name="Groupe 456">
                            <g id="Groupe_454" data-name="Groupe 454">
                                <path id="Tracé_3" data-name="Tracé 3" d="M14,1l5.7,5.7L14,12.41" transform="translate(-0.41 0)" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                                <line id="Ligne_1" data-name="Ligne 1" x1="19.32" y1="6.7" x2="1" y2="6.7" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <img src="<?= $research['icon']['url'] ?>" alt="<?= $research['icon']['alt'] ?>" class="philanthropy-research__logo">
        </div>
    </div>
</section>

<?php
$borders = get_field('borders')  ?>
<section class="philanthropy-borders" data-wolfpack-section data-tadam data-tadam-threshold="100">
    <div class="philanthropy-borders__container">
        <div class="philanthropy-borders__top-container">
            <div class="philanthropy-borders__top">
                <img src="<?= $borders['icon']['url'] ?>" alt="<?= $borders['icon']['alt'] ?>" class="philanthropy-borders__icon">
                <p class="philanthropy-borders__note"><?= $borders['note'] ?></p>
                <a target="<?= $borders['link'] ?>" href="<?= $borders['link']['url'] ?>" class="philanthropy-borders__cta cta">
                    <span class="philanthropy-borders__cta-text cta__text" data-circle-text>
                        <?= $borders['link']['title'] ?>
                        <div> . </div>
                        <?= $borders['link']['title'] ?>
                        <div> . </div>
                        <?= $borders['link']['title'] ?>
                        <div> . </div>
                    </span>
                    <div class="philanthropy-borders__cta-icon cta__icon">
                        <div class="arrow">
                            <span class="arrow__left"></span>
                            <span class="arrow__right"></span>
                            <span class="arrow__line"></span>
                        </div>
                    </div>

                </a>
            </div>

        </div>
        <div class="philanthropy-borders__main">
            <div class="philanthropy-borders__media">
                <div class="philanthropy-borders__logo-container" data-tadam-animate="mask-image">
                    <svg class="philanthropy-borders__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.567 163.488">
                        <defs>
                            <pattern id="image2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" xlink:href="<?= $borders['list'][0]['image']['url']  ?>"></image>
                            </pattern>
                        </defs>
                        <path id="Tracé_974" data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image2)" />
                    </svg>
                    <div data-lightbox-slider-toggle class="philanthropy-borders__toggle" data-cursor data-cursor-class="blue"><span data-cursor class="philanthropy-borders__plus">+</span></div>
                </div>
            </div>
            <div class="philanthropy-borders__info">
                <h2 class="philanthropy-borders__title"><?= $borders['title'] ?></h2>
                <?php if ($borders['data_list']) { ?>
                    <ul class="philanthropy-borders__data-list">
                        <?php foreach ($borders['data_list'] as $item) { ?>
                            <li class="philanthropy-borders__data-item">
                                <p class="philanthropy-borders__data-content"><?= $item['data'] ?></p>
                                <p class="philanthropy-borders__data-label"><?= $item['label'] ?></p>
                            </li>
                        <?php
                        } ?>

                    </ul>
                <?php
                } ?>
                <p class="philanthropy-borders__text"><?= $borders['text'] ?></p>
            </div>

        </div>
    </div>

</section>

<?php
$grant = get_field('grant') ?>
<section class="philanthropy-grant" data-wolfpack-section data-tadam data-tadam-threshold="100">
    <div class="philanthropy-grant__background" data-tadam-animate="lottie-lines-once" data-lottie-lines="/wp-content/themes/dessercom/assets/src/lottie/lines-white.json"></div>
    <div class="philanthropy-grant__container">
        <div class="philanthropy-grant__info">
            <p class="philanthropy-grant__text" data-words data-tadam-animate="words--delay-0.2"><?= $grant['text'] ?></p>
        </div>
        <div class="philanthropy-grant__link-container">
            <div class="philanthropy-grant__link-wrapper" data-tadam-animate="opacity-1--y-0--delay-0.4">
                <a onclick="window.open('<?= $grant['button']['url'] ?>', '');" href="javascript:void(0);" target="<?= $grant['button']['target'] ?>" class="philanthropy-grant__link"><?= $grant['button']['title'] ?></a>
            </div>
            <div class="philanthropy-grant__link-wrapper" data-tadam-animate="opacity-1--y-0--delay-0.5">
                <a href="<?= $grant['button_2']['url'] ?>" target="<?= $grant['button_2']['target'] ?>" class="philanthropy-grant__link philanthropy-grant__link--alt"><?= $grant['button_2']['title'] ?></a>
            </div>
        </div>
    </div>
</section>
<?php
// Load footer.php
get_footer(); ?>