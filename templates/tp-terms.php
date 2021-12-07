<?php
/*
Template Name: Terms
*/

// Load header.php
get_header(); ?>

<?php
$questions = get_field('terms') ?>
<section class="policies">
    <img src="<?= $questions['background']['url'] ?>" alt="<?= $questions['background']['alt'] ?>" class="policies__background">
    <div class="policies__container">
        <div class="policies__top">
            <h1 class="policies__title"><?= $questions['title'] ?></h1>
        </div>
        <div class="policies__content">
            <ul class="policies__list">
                <?php foreach ($questions['list'] as $item) { ?>
                    <li class="policies__item">
                        <h3 class="policies__item-title"><?= $item['title'] ?></h3>
                        <div class="policies__text"><?= $item['text'] ?></div>
                    </li>
                <?php
                } ?>

            </ul>
        </div>
    </div>
</section>
<?php
// Load footer.php
get_footer(); ?>