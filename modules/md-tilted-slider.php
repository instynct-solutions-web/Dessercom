<?php
/*
Module Name: Tilted Slider
*/
?>

<?php
$hero = get_field('hero'); ?>
<section class="hero-slider">
    <div class="hero-slider__container">
        <?php
        if ($hero['title']) { ?>
            <h1 class="hero-slider__title"><?= $hero['title'] ?></h1>
        <?php } ?>
        <ul class="hero-slider__list">
            <?php foreach ($hero['list'] as $item) { ?>
                <li class="hero-slider__item">
                    <?php if ($item['title']) { ?>
                        <p class="hero-slider__title"><?= $item['title'] ?></p>
                    <?php } ?>
                    <img class="hero-slider__image" src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>">
                </li>
            <?php
            } ?>
        </ul>
        <?php
        if ($hero['illustration']) { ?>
            <div class="hero-slider__illustration">
                <img src="<?= $hero['illustration']['url'] ?>" alt="<?= $hero['illustration']['alt'] ?>" class="hero-slider__illustration">
            </div>
        <?php
        } ?>

    </div>
</section>