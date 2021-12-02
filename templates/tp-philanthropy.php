<?php
/*
Template Name: Philanthropy
*/

// Load header.php
get_header(); ?>

<?php get_template_part('modules/md-tilted-slider'); ?>

<?php
$highlight = get_field('highlight') ?>
<section class="philanthropy-highlight">
    <div class="philanthropy-highlight__container">
        <div class="philanthropy-highlight__note-container">
            <h2 class="philanthropy-highlight__note"><?= $highlight['note'] ?></h2>
        </div>
        <div class="philanthropy-highlight__text-container">
            <p class="philanthropy-highlight__text"><?= $highlight['text'] ?></p>
        </div>
    </div>
</section>

<?php $financing = get_field('financing') ?>
<section class="philanthropy-financing">
    <div class="philanthropy-financing__container">
        <div class="philanthropy-financing__top">
            <img src="<?= $financing['icon']['url'] ?>" alt="<?= $financing['icon']['alt'] ?>" class="philanthropy-financing__icon">
            <h2 class="philanthropy-financing__note"><?= $financing['title'] ?></>
        </div>
        <div class="philanthropy-financing__main">
            <div class="philanthropy-financing__amount-container">
                <p class="philanthropy-financing__amount"><?= $financing['amount'] ?></p>
            </div>
            <?php if ($financing['list']) { ?>
                <div class="philanthropy-financing__logo-container">
                    <ul class="philanthropy-financing__list">
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

        </div>
    </div>
</section>

<?php
$house = get_field('house'); ?>
<section class="philanthropy-house">
    <div class="philanthropy-house__container">
        <div class="philanthropy-house__top">
            <p class="philanthropy-house__note"><?= $house['note'] ?></p>
        </div>
        <div class="philanthropy-house__main">
            <div class="philanthropy-house__media">
                <img src="<?= $house['list'][0]['image']['url'] ?>" alt="<?= $house['list'][0]['image']['alt'] ?>" class="philanthropy-house__image">
                <div class="philanthropy-house__mask"></div>
                <a class="philanthropy-house__toggle">+</a>
            </div>
            <div class="philanthropy-house__info">
                <h2 class="philanthropy-house__title"><?= $house['title'] ?></h2>
                <p class="philanthropy-house__text"><?= $house['text'] ?></p>
                <p class="philanthropy-house__subtext"><?= $house['text_2'] ?></p>
            </div>
        </div>
    </div>
    <?php
    if ($house['list']) { ?>
        <div class="philanthropy-house__slider-container lightbox-slider">
            <ul class="philanthropy-house__slider-list lightbox-slider__list">
                <?php foreach ($house['list'] as $slide) { ?>
                    <li class="philanthropy-house__slider-item lightbox-slider__item">
                        <img src="<?= $slide['image']['url'] ?>" alt="<?= $slide['image']['alt'] ?>" class="philanthropy-house__slider-image lightbox-slider__image">
                    </li>
                <?php
                } ?>
            </ul>
        </div>
    <?php
    } ?>
</section>

<?php
$research = get_field('research') ?>
<section class="philanthropy-research">
    <div class="philanthropy-research__container">
        <div class="philanthropy-research__background">
            <p class="philanthropy-research__background-text"><?= $research['text'] ?></p>
            <?php if ($research['list']) { ?>
                <ul class="philanthropy-research__background-list">
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
        <div class="philanthropy-research__foreground">
            <div class="philanthropy-research__top">
                <img src="<?= $research['icon']['url'] ?>" alt="<?= $research['icon']['alt'] ?>" class="philanthropy-research__icon">
                <p class="philanthropy-research__note"><?= $research['note'] ?></p>
            </div>
            <div class="philanthropy-research__text-container">
                <p class="philanthropy-research__text"><?= $research['text'] ?></p>
            </div>
            <img src="<?= $research['icon']['url'] ?>" alt="<?= $research['icon']['alt'] ?>" class="philanthropy-research__logo">
        </div>
    </div>
</section>

<?php
$borders = get_field('borders') ?>
<section class="philanthropy-borders">
    <div class="philanthropy-borders__container">
        <div class="philanthropy-borders__top">
            <img src="<?= $borders['icon']['url'] ?>" alt="<?= $borders['icon']['alt'] ?>" class="philanthropy-borders__icon">
            <p class="philanthropy-borders__note"><?= $borders['note'] ?></p>
        </div>
        <div class="philanthropy-borders__main">
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
            <div class="philanthropy-borders__media">
                <img src="<?= $borders['image_list'][0]['image']['url'] ?>" alt="<?= $borders['image_list'][0]['image']['alt'] ?>" class="philanthropy-borders__image">
                <div class="philanthropy-borders__mask"></div>
                <a class="philanthropy-borders__toggle">+</a>
            </div>
        </div>
    </div>
    <?php
    if ($borders['image_list']) { ?>
        <div class="philanthropy-borders__slider-container lightbox-slider">
            <ul class="philanthropy-borders__slider-list lightbox-slider__list">
                <?php foreach ($borders['image_list'] as $slide) { ?>
                    <li class="philanthropy-borders__slider-item lightbox-slider__item">
                        <img src="<?= $slide['image']['url'] ?>" alt="<?= $slide['image']['alt'] ?>" class="philanthropy-borders__slider-image lightbox-slider__image">
                    </li>
                <?php
                } ?>
            </ul>
        </div>
    <?php
    } ?>
</section>

<?php
$grant = get_field('grant') ?>
<section class="philanthropy-grant">
    <img src="<?= $grant['background']['url'] ?>" alt="<?= $grant['background']['alt'] ?>" class="philanthropy-grant__background">
    <div class="philanthropy-grant__container">
        <div class="philanthropy-grant__info">
            <p class="philanthropy-grant__text"><?= $grant['text'] ?></p>
        </div>
        <div class="philanthropy-grant__link-container">
            <a href="<?= $grant['button']['url'] ?>" class="philanthropy-grant__link"><?= $grant['button']['title'] ?></a>
            <a href="<?= $grant['button_2']['url'] ?>" class="philanthropy-grant__link philanthropy-grant__link--alt"><?= $grant['button_2']['title'] ?></a>
        </div>
    </div>
</section>
<?php
// Load footer.php
get_footer(); ?>