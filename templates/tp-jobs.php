<?php
/*
Template Name: Jobs
*/

// Load header.php
get_header(); ?>

<?php get_template_part('modules/md-tilted-slider'); ?>

<?php
$benefits = get_field('benefits') ?>
<section data-wolfpack-section class="jobs-benefits" data-tadam data-tadam-threshold="100">
    <div class="jobs-benefits__background" data-tadam-animate="lottie-lines-once" data-lottie-lines="/wp-content/themes/dessercom/assets/src/lottie/lines-white.json"></div>
    <div class="jobs-benefits__container">
        <img src="<?= $benefits['icon']['url'] ?>" alt="<?= $benefits['icon']['alt'] ?>" class="jobs-benefits__logo">
        <div class="jobs-benefits__info">
            <h2 class="jobs-benefits__title" data-words data-tadam-animate="words"><?= $benefits['title'] ?></h2>
            <p class="jobs-benefits__text" data-words data-tadam-animate="words--delay-0.2"><?= $benefits['text'] ?></p>
        </div>
        <div class="jobs-benefits__list-container">
            <ul class="jobs-benefits__list" data-tadam-animate="jobs-benefits">
                <?php
                $counter = 1;
                foreach ($benefits['list'] as $item) { ?>
                    <li class="jobs-benefits__item">
                        <p class="jobs-benefits__item-num"><?= sprintf('%02d', $counter) ?></p>
                        <p class="jobs-benefits__item-text"><?= $item['feature'] ?></p>
                    </li>
                <?php
                    $counter++;
                } ?>

            </ul>
        </div>
    </div>
</section>


<?php
$values = get_field('benefits_2') ?>
<section data-wolfpack-section class="jobs-values">
    <div class="jobs-values__container">
        <div class="jobs-values__info">
            <h2 class="jobs-values__title"><?= $values['title'] ?></h2>
            <ul class="jobs-values__name-list">
                <?php foreach ($values['list'] as $item) { ?>
                    <li class="jobs-values__name-item" data-jobs-values-name>
                        <p class="jobs-values__name"><?= $item['title'] ?></p>
                    </li>
                <?php
                } ?>
            </ul>
            <div class="jobs-values__button-container">
                <div data-jobs-slider-prev class="jobs-values__nav jobs-values__nav--prev">
                    <svg class="jobs-values__nav-svg jobs-values__nav-svg--prev" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.73 13.41">
                        <g id="Groupe_456" data-name="Groupe 456">
                            <g id="Groupe_454" data-name="Groupe 454">
                                <path id="Tracé_3" data-name="Tracé 3" d="M7.12,1.41l-5.7,5.7,5.7,5.71" transform="translate(-0.01 -0.41)" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                                <line id="Ligne_1" data-name="Ligne 1" x1="1.41" y1="6.7" x2="19.73" y2="6.7" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                            </g>
                        </g>
                    </svg>
                </div>
                <div data-jobs-slider-next class="jobs-values__nav jobs-values__nav--next">
                    <svg class="jobs-values__nav-svg jobs-values__nav-svg--next" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.73 13.41">
                        <g id="Groupe_456" data-name="Groupe 456">
                            <g id="Groupe_454" data-name="Groupe 454">
                                <path id="Tracé_3" data-name="Tracé 3" d="M14,1l5.7,5.7L14,12.41" transform="translate(-0.41 0)" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                                <line id="Ligne_1" data-name="Ligne 1" x1="19.32" y1="6.7" x2="1" y2="6.7" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <div class="jobs-values__grid">
            <ul class="jobs-values__grid-list" data-jobs-slider>
                <?php foreach ($values['list'] as $item) { ?>
                    <li class="jobs-values__grid-item" data-jobs-values>
                        <span class="jobs-values__toggler" data-jobs-values-toggler>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                <g id="Groupe_1585" data-name="Groupe 1585" transform="translate(-976.5 -2024.5)">
                                    <line id="Ligne_168" data-name="Ligne 168" x2="12" transform="translate(976.5 2030.5)" fill="none" stroke="#fff" stroke-width="2" />
                                    <line id="Ligne_169" data-name="Ligne 169" x2="12" transform="translate(982.5 2024.5) rotate(90)" fill="none" stroke="#fff" stroke-width="2" />
                                </g>
                            </svg>
                        </span>
                        <p class="jobs-values__name jobs-values__name--mobile"><?= $item['title'] ?></p>
                        <img src="<?= $item['picto']['url'] ?>" alt="<?= $item['picto']['alt'] ?>" class="jobs-values__picto">
                        <p class="jobs-values__text"><?= $item['text'] ?></p>
                    </li>
                <?php
                } ?>
            </ul>
        </div>
    </div>
</section>

<?php $internship = get_field('internship') ?>
<section data-wolfpack-section class="jobs-internship">
    <div class="jobs-internship__background">
        <svg class="jobs-internship__foreground-image" xmlns="http://www.w3.org/2000/svg" width="181.567" height="163.488" viewBox="0 0 181.567 163.488">
            <defs>
                <pattern id="image" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" xlink:href="<?= $internship['image']['url']  ?>"></image>
                </pattern>
            </defs>
            <path id="Tracé_974" data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image)" />
        </svg>
        <img class="jobs-internship__backgound-image" src="<?= $internship['background']['url'] ?>" alt="<?= $internship['background']['alt'] ?>">
    </div>
    <div class="jobs-internship__container">
        <div class="jobs-internship__foreground">
            <p class="jobs-internship__note"><?= $internship['note'] ?></p>
            <div class="jobs-internship__info">
                <h2 class="jobs-internship__title"><?= $internship['title'] ?></h2>
                <p class="jobs-internship__text"><?= $internship['text'] ?></p>
                <a href="<?= $internship['link']['url'] ?>" class="jobs-internship__link">
                    <?= $internship['link']['title'] ?>
                    <svg class="jobs-internship__link-icon" xmlns="http://www.w3.org/2000/svg" width="13.384" height="14.515" viewBox="0 0 13.384 14.515">
                        <g id="Groupe_788" data-name="Groupe 788" transform="translate(1.414 1)">
                            <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5.278,5.278,10.555,0" transform="translate(0 7.237)" fill="none" stroke="#00938f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                            <line id="Ligne_1" data-name="Ligne 1" y1="12.515" transform="translate(5.278 0)" fill="none" stroke="#00938f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>

<?php $careers = get_field('careers') ?>
<section id="careers-list" data-wolfpack-section class="jobs-careers">
    <div class="jobs-careers__container">
        <div class="jobs-careers__top">
            <h2 class="jobs-careers__title"><?= $careers['title'] ?></h2>
        </div>
        <div class="jobs-careers__main">
            <div class="jobs-careers__filter">
                <?php echo do_shortcode('[searchandfilter id="689"]'); ?>
            </div>
            <div class="jobs-careers__grid">
                <?php echo do_shortcode('[searchandfilter id="689"  show="results"]'); ?>
            </div>
        </div>
    </div>
</section>
<?php
// Load footer.php
get_footer(); ?>