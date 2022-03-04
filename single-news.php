<?php
/*
Template Name: News
*/

get_header(); ?>

<?php $hero = get_field('hero'); ?>
<section class="article-image" data-wolfpack-section>
    <div class="article-image__container">
        <img src="<?= $hero['image']['url'] ?>" alt="<?= $hero['image']['alt'] ?>" class="article-image__image">
    </div>
</section>

<section class="article-back" data-wolfpack-section>
    <div class="article-back__container">
        <div class="article-back__button-container">
            <a class="article-back__button" href="<?= $hero['back']['url'] ?>" target="<?= $hero['back']['target'] ?>">
                <svg class="article-back__button-icon" xmlns="http://www.w3.org/2000/svg" width="14.515" height="13.384" viewBox="0 0 14.515 13.384">
                    <g id="Groupe_788" data-name="Groupe 788" transform="translate(13.515 1.414) rotate(90)" opacity="0.3">
                        <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5.278,5.278,10.555,0" transform="translate(0 7.237)" fill="none" stroke="#051c2f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                        <line id="Ligne_1" data-name="Ligne 1" y1="12.515" transform="translate(5.278 0)" fill="none" stroke="#051c2f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                    </g>
                </svg>
                <span class="article-back__button-content">
                    <?= $hero['back']['title'] ?>
                </span>
            </a>
        </div>
    </div>
</section>

<?php $content = get_field('content'); ?>
<section class="article-content" data-wolfpack-section>
    <div class="article-content__container">
        <h1 class="article-content__title"><?= $hero['title'] ?></h1>
        <div class="article-content__content">
            <?= $content ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>