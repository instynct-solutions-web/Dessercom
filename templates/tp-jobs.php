<?php
/*
Template Name: Jobs
*/

// Load header.php
get_header(); ?>

<?php get_template_part('modules/md-tilted-slider'); ?>

<?php
$benefits = get_field('benefits') ?>
<section class="services-extra">
    <img src="<?= $benefits['image']['url'] ?>" alt="<?= $benefits['image']['alt'] ?>" class="jobs-benefits__background">
    <div class="jobs-benefits__container">
        <div class="jobs-benefits__logo-container">
            <img src="<?= $benefits['icon']['url'] ?>" alt="<?= $benefits['icon']['alt'] ?>" class="jobs-benefits__logo">
        </div>
        <div class="jobs-benefits__info">
            <h2 class="jobs-benefits__title"><?= $benefits['title'] ?></h2>
            <p class="jobs-benefits__text"><?= $benefits['text'] ?></p>
        </div>
        <div class="jobs-benefits__list-container">
            <ul class="jobs-benefits__list">
                <?php
                $counter = 1;
                foreach ($benefits['list'] as $item) { ?>
                    <li class="jobs-benefits__item">
                        <span class="jobs-benefits__item-num"><?= sprintf('%02d', $counter) ?></span>
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
<section class="jobs-values">
    <div class="jobs-values__container">
        <div class="jobs-values__info">
            <h2 class="jobs-values__title"><?= $values['title'] ?></h2>
            <ul class="jobs-values__name-list">
                <?php foreach ($values['list'] as $item) { ?>
                    <li class="jobs-values__name-item">
                        <p class="jobs-values__name"><?= $item['title'] ?></p>
                    </li>
                <?php
                } ?>
            </ul>
        </div>
        <div class="jobs-values__grid">
            <ul class="jobs-values__grid-list">
                <?php foreach ($values['list'] as $item) { ?>
                    <li class="jobs-values__grid-item">
                        <span class="jobs-values__toggler">+</span>
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
<section class="jobs-internship">
    <div class="jobs-internship__container">
        <div class="jobs-internship__background">
            <img class="jobs-internship__backgound-image" src="<?= $internship['background']['url'] ?>" alt="<?= $internship['background']['alt'] ?>">
        </div>
        <div class="jobs-internship__foreground">
            <p class="jobs-internship__note"><?= $internship['note'] ?></p>
            <div class="jobs-internship__media mask">
                <img class="jobs-internship__image mask__image" src="<?= $internship['image']['url']  ?>" alt="<?= $internship['image']['alt']  ?>">
                <div class="jobs-internship__mask mask__overlay"></div>
            </div>
            <div class="jobs-internship__info">
                <h2 class="jobs-internship__title"><?= $internship['title'] ?></h2>
                <p class="jobs-internship__text"><?= $internship['text'] ?></p>
                <a href="<?= $internship['link']['url'] ?>" class="jobs-internship__link"><?= $internship['link']['title'] ?></a>
            </div>
        </div>
    </div>
</section>

<?php $careers = get_field('careers') ?>
<section class="jobs-careers">
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