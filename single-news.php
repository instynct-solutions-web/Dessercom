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
        <a class="article-back__button" href="<?= $hero['back']['url'] ?>" target="<?= $hero['back']['target'] ?>"><?= $hero['back']['title'] ?></a>
    </div>
</section>

<?php $content = get_field('content'); ?>
<section class="article-content" data-wolfpack-section>
    <div class="article-content__container">
        <h1 class="article-container__title"><?= $hero['title'] ?></h1>
        <div class="article-content__content">
            <?= $content ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>