<?php
/*
Template Name: Jobs
*/

// Load header.php


get_header(); ?>

<?php $hero = get_field('hero') ?>
<section data-wolfpack-section class="jobs-hero" data-tadam data-tadam-threshold="-1">
    <div class="jobs-hero__container">
        <a href="https://www.facebook.com/sharer/sharer.php?u=<?= get_permalink() ?>" class="jobs-hero__cta cta">
            <span class="jobs-hero__cta-text cta__text" data-circle-text>
                <?= $hero['cta']['title'] ?>
                <div> . </div>
                <?= $hero['cta']['title'] ?>
                <div> . </div>
                <?= $hero['cta']['title'] ?>
                <div> . </div>
            </span>
            <div class="jobs-hero__cta-icon cta__icon">
                <div class="arrow">
                    <span class="arrow__left"></span>
                    <span class="arrow__right"></span>
                    <span class="arrow__line"></span>
                </div>
            </div>

        </a>
        <div class="jobs-hero__main">
            <div class="jobs-hero__link-container" data-tadam-animate="opacity-1--y-0--delay-0.2">
                <a target="<?= $hero['link']['target'] ?>" href="<?= $hero['link']['url'] ?>" class="jobs-hero__link">
                    <svg class="jobs-hero__link-icon" xmlns="http://www.w3.org/2000/svg" width="14.515" height="13.384" viewBox="0 0 14.515 13.384">
                        <g id="Groupe_788" data-name="Groupe 788" transform="translate(13.515 1.414) rotate(90)" opacity="0.3">
                            <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5.278,5.278,10.555,0" transform="translate(0 7.237)" fill="none" stroke="#051c2f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                            <line id="Ligne_1" data-name="Ligne 1" y1="12.515" transform="translate(5.278 0)" fill="none" stroke="#051c2f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                        </g>
                    </svg>
                    <?= $hero['link']['title'] ?>
                </a>
            </div>
            <div class="jobs-hero__info">
                <h1 class="jobs-hero__title" data-words data-tadam-animate="words--delay-0.2"><?= $hero['title'] ?></h1>
                <p class="jobs-hero__subtitle" data-words data-tadam-animate="words--delay-0.5"><?= $hero['location'] ?></p>
            </div>
        </div>
        <svg class="jobs-hero__image" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 181.567 163.488" data-tadam-animate="mask-image--delay-0.5">
            <defs>
                <pattern id="image" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" xlink:href="<?= $hero['image']['url']  ?>"></image>
                </pattern>
            </defs>
            <path id="Tracé_974" data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image)" />
        </svg>
    </div>
    <div class="jobs-hero__background-image" data-tadam-animate="lottie-lines-once" data-lottie-lines="/wp-content/themes/dessercom/assets/src/lottie/lines-yellow.json"></div>
</section>

<?php
$benefits = get_field('benefits');
$theTerm = get_the_terms(the_ID(), 'type');
if ($theTerm[0]->term_id === 22 || $theTerm[0]->term_id === 54) { ?>
    <section data-wolfpack-section class="job-benefits">
        <div class="job-benefits__container">
            <div class="job-benefits__background">
                <?php foreach ($benefits['list'] as $item) { ?>
                    <p class="job-benefits__sector-background" data-job-sector-background><?= $item['name'] ?></p>
                <?php
                } ?>
            </div>
            <div class="job-benefits__foreground">
                <div class="job-benefits__navigation">
                    <h2 class="job-benefits__title"><?= $benefits['title'] ?></h2>
                    <ul class="job-benefits__sector-list">
                        <?php foreach ($benefits['list'] as $item) { ?>
                            <li class="job-benefits__sector-item" data-job-sector-button>
                                <div class="job-benefits__sector-button">
                                    <p class="job-benefits__sector-text"><?= $item['name'] ?></p>
                                    <svg class="job-benefits__sector-icon" xmlns="http://www.w3.org/2000/svg" width="13.384" height="14.515" viewBox="0 0 13.384 14.515">
                                        <g id="Groupe_1326" data-name="Groupe 1326" transform="translate(1.414 1)">
                                            <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5.278,5.278,10.555,0" transform="translate(0 7.237)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                            <line id="Ligne_1" data-name="Ligne 1" y1="12.515" transform="translate(5.278 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                        </g>
                                    </svg>
                                </div>
                            </li>
                        <?php
                        } ?>
                    </ul>
                </div>
                <div class="job-benefits__content">
                    <?php foreach ($benefits['list'] as $item) {
                        $counter = 1;
                    ?>
                        <ul class="job-benefits__single-list" data-job-sector>
                            <?php foreach ($item['benefits_list'] as $benefit) { ?>
                                <li class="job-benefits__item">
                                    <span class="job-benefits__counter"><?= sprintf('%02d', $counter) ?></span>
                                    <p class="job-benefits__text"><?= $benefit['text'] ?></p>
                                    <?php if ($benefit['subtext']) { ?>
                                        <p class="job-benefits__subtext"><?= $benefit['subtext'] ?></p>
                                    <?php
                                    } ?>

                                </li>
                            <?php
                                $counter++;
                            } ?>
                        </ul>
                    <?php
                    } ?>
                </div>
            </div>
        </div>
        <svg class="job-benefits__icon" xmlns="http://www.w3.org/2000/svg" width="24.805" height="22.335" viewBox="0 0 24.805 22.335">
            <path id="Tracé_795" data-name="Tracé 795" d="M24.417,20.7c-.95,1.663-3.328,2.094-5.316.961L12.4,17.8l.007-.011L5.725,21.685c-1.98,1.147-4.362.738-5.323-.913v0c-.961-1.654-.139-3.927,1.838-5.079.157-.087,6.2-3.566,6.672-3.836v.018h.051l-.022-.036-.029.018V4.14C8.911,1.853,10.464,0,12.378,0s3.468,1.853,3.468,4.14c0,.179-.033,7.019-.037,7.68l-.029.05h.029v-.05l0-.008,6.719,3.825C24.52,16.77,25.364,19.035,24.417,20.7Z" fill="#00938f" />
        </svg>
    </section>
<?php
} ?>


<?php $description = get_field('description') ?>
<section data-wolfpack-section class="jobs-description">
    <div class="jobs-description__container">
        <div class="jobs-description__top">
            <h2 class="jobs-description__note"><?= $description['note'] ?></h2>
        </div>
        <div class="jobs-description__main">
            <div class="jobs-description__information">
                <h2 class="jobs-description__information-title"><?= $description['text_title'] ?></h2>
                <div class="jobs-description__information-content">
                    <p class="jobs-description__text"><?= $description['text'] ?></p>
                    <img src="<?= $description['image']['url'] ?>" alt="<?= $description['image']['url'] ?>" class="jobs-description__image">
                </div>

            </div>
            <div class="jobs-description__requirements">
                <h3 class="jobs-description__requirement-title"><?= $description['experience_title'] ?></h3>
                <div class="jobs-description__experience">
                    <h4 class="jobs-description__experience-title"><?= $description['experience_subtitle'] ?></h4>
                    <p class="jobs-description__experience-text"><?= $description['experience_text'] ?></p>
                </div>
                <div class="jobs-description__formation">
                    <h4 class="jobs-description__formation-title"><?= $description['training_subtitle'] ?></h4>
                    <p class="jobs-description__formation-text"><?= $description['training_text'] ?></p>
                </div>
                <div class="jobs-description__skills">
                    <h4 class="jobs-description__skills-title"><?= $description['list_title'] ?></h4>
                    <?php if ($description['list']) { ?>
                        <ul class="jobs-description__skills-list">
                            <?php foreach ($description['list'] as $item) { ?>
                                <li class="jobs-description__skills-item">
                                    <?= $item['name'] ?>
                                </li>
                            <?php
                            } ?>
                        </ul>
                    <?php
                    } ?>

                </div>
                <img src="<?= $description['image_large']['url'] ?>" alt="<?= $description['image_large']['alt'] ?>" class="jobs-description__image-large">
                <div class="jobs-description__schedule">
                    <h4 class="jobs-description__schedule-title"><?= $description['schedule_title'] ?></h4>
                    <p class="jobs-description__schedule-text"><?= $description['schedule_text'] ?></p>
                    <p class="jobs-description__schedule-subtext"><?= $description['schedule_text_2'] ?></p>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<?php $form = get_field('form') ?>
<section data-wolfpack-section class="jobs-form">
    <div class="jobs-form__container">
        <div class="jobs-form__top">
            <h2 class="jobs-form__note"><?= $form['title'] ?></h2>
        </div>
        <div class="jobs-form__main" data-form>
            <?php echo do_shortcode('[gravityform id="' . $form['form'] . '" title="false" description="false" ajax="true"]') ?>
        </div>
    </div>
</section>

<?php
get_footer();
?>