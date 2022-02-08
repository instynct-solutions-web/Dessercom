<?php
/*
Module Name: Tilted Slider
*/
?>

<?php
$hero = get_field('hero'); ?>
<section data-wolfpack-section class="tilted-slider" data-tadam data-tadam-threshold="-1">
    <div class="tilted-slider__container">
        <?php
        if ($hero['title']) { ?>
            <h1 class="tilted-slider__title" data-words data-tadam-animate="words--delay-0.5"><?= $hero['title'] ?></h1>
        <?php } ?>
        <ul class="tilted-slider__list">
            <?php foreach ($hero['list'] as $item) { ?>
                <li class="tilted-slider__item" data-tadam-animate="x-0--y-0">
                    <?php if ($item['title']) { ?>
                        <p class="tilted-slider__title"><?= $item['title'] ?></p>
                    <?php } ?>
                    <img class="tilted-slider__image" src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>">
                </li>
            <?php
            } ?>
        </ul>
    </div>
    <?php
    if ($hero['illustration']) { ?>
        <img src="<?= $hero['illustration']['url'] ?>" alt="<?= $hero['illustration']['alt'] ?>" class="tilted-slider__illustration">
    <?php
    } ?>
</section>