<?php
/*
Template Name: Home
*/

// Load header.php
get_header(); ?>


<?php
$hero = get_field('hero'); ?>
<section class="hero-slider">
    <div class="hero-slider__container">
        <ul data-hero-slider class="hero-slider__list">
            <?php foreach ($hero['list'] as $item) { ?>
                <li class="hero-slider__item">
                    <img class="hero-slider__image hero-slider__image--tablet" src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>">
                    <img class="hero-slider__image" src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>">
                    <img class="hero-slider__image hero-slider__image--tablet" src="<?= $item['image']['url'] ?>" alt="<?= $item['image']['alt'] ?>">
                </li>
            <?php
            } ?>
        </ul>
        <div class="hero-slider__title-container">
            <ul data-hero-slider-nav class="hero-slider__title-list">
                <?php foreach ($hero['list'] as $item) { ?>
                    <li class="hero-slider__title-item">
                        <p class="hero-slider__title"><?= $item['title'] ?></p>
                    </li>
                <?php } ?>
            </ul>
        </div>
    </div>
    <div class="hero-slider__button-container">
        <div data-hero-slider-prev class="hero-slider__nav hero-slider__nav--prev">
            <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.73 13.41">
                <g id="Groupe_456" data-name="Groupe 456">
                    <g id="Groupe_454" data-name="Groupe 454">
                        <path id="Tracé_3" data-name="Tracé 3" d="M7.12,1.41l-5.7,5.7,5.7,5.71" transform="translate(-0.01 -0.41)" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                        <line id="Ligne_1" data-name="Ligne 1" x1="1.41" y1="6.7" x2="19.73" y2="6.7" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                    </g>
                </g>
            </svg>
        </div>
        <div data-hero-slider-next class="hero-slider__nav hero-slider__nav--next">
            <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.73 13.41">
                <g id="Groupe_456" data-name="Groupe 456">
                    <g id="Groupe_454" data-name="Groupe 454">
                        <path id="Tracé_3" data-name="Tracé 3" d="M14,1l5.7,5.7L14,12.41" transform="translate(-0.41 0)" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                        <line id="Ligne_1" data-name="Ligne 1" x1="19.32" y1="6.7" x2="1" y2="6.7" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <?php
    if ($hero['illustration']) { ?>
        <img src="<?= $hero['illustration']['url'] ?>" alt="<?= $hero['illustration']['alt'] ?>" class="hero-slider__illustration">
    <?php } ?>
    <div class="hero-slider__indicator">
        <span class="hero-slider__indicator-bar">
            <span class="hero-slider__indicator-thumb"></span>
        </span>
    </div>

</section>

<?php
$highlight = get_field('highlight');
?>
<section class="home-highlight">
    <div class="home-highlight__top-container">
        <div class="home-highlight__image-container">
            <img class="home-highlight__image" src="<?= $highlight['image']['url']  ?>" alt="<?= $highlight['image']['alt'] ?>">
        </div>
        <div class="home-highlight__text-container">
            <h1 class="home-highlight__text"><?= $highlight['text']  ?></h1>
        </div>
    </div>
    <div class="home-highlight__bottom-container">
        <p class="home-highlight__note home-highlight__note--left"><?= $highlight['left_note']  ?></p>
        <p class="home-highlight__note home-highlight__note--right"><?= $highlight['right_note']  ?></p>
    </div>
</section>

<?php
$services = get_field('services');
?>
<section class="home-services">
    <div class="home-services__container">
        <div class="home-services__background">
            <ul class="home-services__backgound-list">
                <?php foreach ($services['list'] as $item) { ?>
                    <li class="home-services__background-item">
                        <img class="home-services__backgound-image" src="<?= $item['background']['url'] ?>" alt="<?= $item['background']['alt'] ?>">
                    </li>
                <?php
                } ?>
            </ul>
        </div>
        <div class="home-services__foreground">
            <div class="home-services__info">
                <h2 class="home-services__note"><?= $services['note'] ?></h2>
                <ul class="home-services__list">
                    <?php foreach ($services['list'] as $item) { ?>
                        <li class="home-services__item">
                            <a href="<?= $item['link']['url'] ?>" class="home-services__link"><?= $item['link']['title'] ?></a>
                        </li>
                    <?php
                    } ?>
                </ul>
            </div>
            <div class="home-services__media">
                <ul class="home-services__media-list">
                    <?php foreach ($services['list'] as $item) { ?>
                        <li class="home-services__media-item">
                            <img class="home-services__image" src="<?= $item['image']['url']  ?>" alt="<?= $item['image']['alt']  ?>">
                        </li>
                    <?php
                    } ?>
                </ul>
            </div>
        </div>
    </div>
</section>
<?php $promo = get_field('promo') ?>
<section data-cursor-class="video" data-cursor data-cursor-text="<?= $promo['text'] ?>" class="home-promo">
    <div class="home-promo__container">
        <ul class="home-promo__list">
            <?php foreach ($promo['list'] as $list) { ?>
                <li class="home-promo__item">
                    <ul class="home-promo__word-list">
                        <?php foreach ($list['adjectives_list'] as $item) { ?>
                            <li class="home-promo__word"><?= $item['adjective'] ?></li>
                        <?php
                        } ?>
                    </ul>
                </li>
            <?php
            } ?>
        </ul>
        <div class="home-promo__container">
            <?= $promo['video'] ?>
        </div>
    </div>
</section>

<?php
$commitments = get_field('commitment');
?>
<section class="home-commitment">
    <div class="home-commitment__container">
        <div class="home-commitment__top">
            <h2 class="home-commitment__note"><?= $commitments['top_note'] ?></h2>
        </div>
        <div class="home-commitment__main">
            <div class="home-commitment__text-container">
                <p class="home-commitment__text"><?= $commitments['text'] ?></p>
            </div>
            <ul class="home-commitment__list">
                <?php
                foreach ($commitments['list'] as $commitment) { ?>
                    <li class="home-commitment__item">
                        <p class="home-commitment__item-text"><?= $commitment['name'] ?></p>
                    </li>
                <?php
                } ?>
            </ul>
        </div>
        <div class="home-commitment__bottom">
            <img src="<?= $commitments['image']['url'] ?>" alt="<?= $commitments['image']['alt'] ?>" class="home-commitment__image">
        </div>
    </div>
</section>

<?php $social = get_field('social') ?>
<section class="home-social">
    <div class="home-social__container">
        <div class="home-social__title-container">
            <h3 class="home-social__title"><?= $social['title'] ?></h3>
        </div>
        <div class="home-social__feed"></div>
    </div>
</section>
<?php
// Load footer.php
get_footer(); ?>