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
            <a target="<?= $hero['link']['target'] ?>" href="<?= $hero['link']['url'] ?>" class="jobs-hero__link"><?= $hero['link']['title'] ?></a>
            <div class="jobs-hero__info">
                <h1 class="jobs-hero__title"><?= $hero['title'] ?></h1>
                <p class="jobs-hero__subtitle"><?= $hero['location'] ?></p>
            </div>
        </div>
        <div class="jobs-hero__media mask">
            <img class="jobs-hero__image mask__image" src="<?= $hero['image']['url']  ?>" alt="<?= $hero['image']['alt']  ?>">
            <div class="jobs-hero __mask mask__overlay"></div>
        </div>
    </div>
    <img src="<?= $hero['illustration']['url']  ?>" alt="<?= $hero['illustration']['alt']  ?>" class="jobs-hero__background">
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
                        <li class="jobs-benefits__sector-item">
                            <a class="jobs-benefits__sector-button"><?= $item['name'] ?></a>
                        </li>
                    <?php
                    } ?>
                </ul>
            </div>
            <div class="jobs-benefits__content">
                <?php foreach ($benefits['list'] as $item) { ?>
                    <ul class="jobs-benefits__list">
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
<?php
get_footer();
?>