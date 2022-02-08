<?php
/*
Template Name: Terms
*/

// Load header.php
get_header(); ?>

<?php
$questions = get_field('terms') ?>
<section data-wolfpack-section class="policies" data-tadam data-tadam-threshold="-1">
    <div class="policies__background" data-tadam-animate="lottie-lines-once" data-lottie-lines="/wp-content/themes/dessercom/assets/src/lottie/lines-white.json"></div>
    <div class="policies__container">
        <div class="policies__top">
            <h1 class="policies__title" data-words data-tadam-animate="words--delay-0.2"><?= $questions['title'] ?></h1>
        </div>
        <div class="policies__content">
            <ul class="policies__list" data-tadam-animate="opacity-1--delay-0.6">
                <?php foreach ($questions['list'] as $item) { ?>
                    <li class="policies__item" data-terms-policies>
                        <h3 class="policies__item-title" data-terms-policies-title>
                            <?= $item['title'] ?>
                            <svg class="policies__item-icon" xmlns="http://www.w3.org/2000/svg" width="12.828" height="7.414" viewBox="0 0 12.828 7.414">
                                <g id="Groupe_1175" data-name="Groupe 1175" transform="translate(1.414 -22.704)">
                                    <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5,5l5-5" transform="translate(0 24.118)" fill="none" stroke="#041e36" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                </g>
                            </svg>
                        </h3>
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