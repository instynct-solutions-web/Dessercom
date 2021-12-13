<?php
/*
Template Name: Jobs
*/

// Load header.php


get_header(); ?>

<?php $hero = get_field('hero') ?>
<section class="jobs-hero">
    <div class="jobs-hero__container">
        <div class="jobs-hero__main">
            <a target="<?= $hero['link']['target'] ?>" href="<?= $hero['link']['url'] ?>" class="jobs-hero__link">
                <svg class="jobs-hero__link-icon" xmlns="http://www.w3.org/2000/svg" width="14.515" height="13.384" viewBox="0 0 14.515 13.384">
                    <g id="Groupe_788" data-name="Groupe 788" transform="translate(13.515 1.414) rotate(90)" opacity="0.3">
                        <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5.278,5.278,10.555,0" transform="translate(0 7.237)" fill="none" stroke="#051c2f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                        <line id="Ligne_1" data-name="Ligne 1" y1="12.515" transform="translate(5.278 0)" fill="none" stroke="#051c2f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                    </g>
                </svg>
                <?= $hero['link']['title'] ?>
            </a>
            <div class="jobs-hero__info">
                <h1 class="jobs-hero__title"><?= $hero['title'] ?></h1>
                <p class="jobs-hero__subtitle"><?= $hero['location'] ?></p>
            </div>
        </div>
        <svg class="jobs-hero__image" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 181.567 163.488">
            <defs>
                <pattern id="image" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" xlink:href="<?= $hero['image']['url']  ?>"></image>
                </pattern>
            </defs>
            <path id="Tracé_974" data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image)" />
        </svg>
    </div>
    <svg class="jobs-hero__background-image" xmlns="http://www.w3.org/2000/svg" width="233.926" height="375.014" viewBox="0 0 233.926 375.014">
        <g id="Groupe_157" data-name="Groupe 157" transform="translate(1.5 1.5)">
            <path id="Tracé_47" data-name="Tracé 47" d="M0,372.008V115.253H.038a115.444,115.444,0,0,1,230.888,0V372.008" transform="translate(0 0)" fill="none" stroke="#ffed2f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            <path id="Tracé_48" data-name="Tracé 48" d="M0,346.762V90.225H.029a90.374,90.374,0,0,1,180.749,0V346.764" transform="translate(25.075 25.248)" fill="none" stroke="#ffed2f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            <path id="Tracé_49" data-name="Tracé 49" d="M0,321.739V65.243H.021a65.351,65.351,0,0,1,130.7,0v256.5" transform="translate(50.101 50.267)" fill="none" stroke="#ffed2f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            <path id="Tracé_50" data-name="Tracé 50" d="M0,296.611V40H.013a40.069,40.069,0,0,1,80.138,0V296.609" transform="translate(75.388 75.403)" fill="none" stroke="#ffed2f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            <path id="Tracé_51" data-name="Tracé 51" d="M0,271.607V14.986H0a15.01,15.01,0,0,1,30.021,0V271.607" transform="translate(100.451 100.399)" fill="none" stroke="#ffed2f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
        </g>
    </svg>
</section>

<?php $benefits = get_field('benefits') ?>
<section class="jobs-benefits">
    <div class="jobs-benefits__container">
        <div class="jobs-benefits__background">
            <p class="jobs-benefits__sector-background"></p>
        </div>
        <div class="jobs-benefits__foreground">
            <div class="jobs-benefits__navigation">
                <h2 class="jobs-benefits__title"><?= $benefits['title'] ?></h2>
                <ul class="jobs-benefits__sector-list">
                    <?php foreach ($benefits['list'] as $item) { ?>
                        <li class="jobs-benefits__sector-item" data-job-sector-button>
                            <div class="jobs-benefits__sector-button">
                                <p class="jobs-benefits__sector-text"><?= $item['name'] ?></p>
                                <svg class="jobs-benefits__sector-icon" xmlns="http://www.w3.org/2000/svg" width="13.384" height="14.515" viewBox="0 0 13.384 14.515">
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
            <div class="jobs-benefits__content">
                <?php foreach ($benefits['list'] as $item) { ?>
                    <ul class="jobs-benefits__single-list" data-job-sector>
                        <?php foreach ($item['benefits_list'] as $benefit) { ?>
                            <li class="jobs-benefits__item">
                                <span class="jobs-benefits__counter"></span>
                                <p class="jobs-benefits__text"><?= $benefit['text'] ?></p>
                                <?php if ($benefit['subtext']) { ?>
                                    <p class="jobs-benefits__subtext"><?= $benefit['subtext'] ?></p>
                                <?php
                                } ?>

                            </li>
                        <?php
                        } ?>
                    </ul>
                <?php
                } ?>
            </div>
        </div>
    </div>
    <svg class="jobs-benefits__icon" xmlns="http://www.w3.org/2000/svg" width="24.805" height="22.335" viewBox="0 0 24.805 22.335">
        <path id="Tracé_795" data-name="Tracé 795" d="M24.417,20.7c-.95,1.663-3.328,2.094-5.316.961L12.4,17.8l.007-.011L5.725,21.685c-1.98,1.147-4.362.738-5.323-.913v0c-.961-1.654-.139-3.927,1.838-5.079.157-.087,6.2-3.566,6.672-3.836v.018h.051l-.022-.036-.029.018V4.14C8.911,1.853,10.464,0,12.378,0s3.468,1.853,3.468,4.14c0,.179-.033,7.019-.037,7.68l-.029.05h.029v-.05l0-.008,6.719,3.825C24.52,16.77,25.364,19.035,24.417,20.7Z" fill="#00938f" />
    </svg>
</section>

<?php $description = get_field('description') ?>
<section class="jobs-description">
    <div class="jobs-description__container">
        <div class="jobs-description__top">
            <h2 class="jobs-description__note"><?= $description['note'] ?></h2>
        </div>
        <div class="jobs-description__main">
            <div class="jobs-description__information">
                <h2 class="jobs-description__information-title"><?= __('Descriptif du poste', 'theme') ?></h2>
                <div class="jobs-description__information-content">
                    <p class="jobs-description__text"><?= $description['text'] ?></p>
                    <img src="<?= $description['image']['url'] ?>" alt="<?= $description['image']['url'] ?>" class="jobs-description__image">
                </div>

            </div>
            <div class="jobs-description__requirements">
                <h3 class="jobs-description__requirement-title"><?= __('Exigence du poste', 'theme') ?></h3>
                <div class="jobs-description__experience">
                    <h4 class="jobs-description__experience-title"><?= __('Expérience professionnelle', 'theme') ?></h4>
                    <p class="jobs-description__experience-text"><?= $description['experience_text'] ?></p>
                </div>
                <div class="jobs-description__formation">
                    <h4 class="jobs-description__formation-title"><?= __('Formation professionnelle', 'theme') ?></h4>
                    <p class="jobs-description__formation-text"><?= $description['training_text'] ?></p>
                </div>
                <div class="jobs-description__skills">
                    <h4 class="jobs-description__skills-title"><?= __('Compétences requises', 'theme') ?></h4>
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
                    <h4 class="jobs-description__schedule-title"><?= __('Horaire de travail', 'theme') ?></h4>
                    <p class="jobs-description__schedule-text"><?= $description['schedule_text'] ?></p>
                    <p class="jobs-description__schedule-subtext"><?= $description['schedule_text_2'] ?></p>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<?php $form = get_field('form') ?>
<section class="jobs-form">
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