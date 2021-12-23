<?php
/*
Template Name: Terms
*/

// Load header.php
get_header(); ?>

<?php
$questions = get_field('terms') ?>
<section data-wolfpack-section class="policies">
    <svg class="policies__background" xmlns="http://www.w3.org/2000/svg" width="379.912" height="608.358" viewBox="0 0 379.912 608.358">
        <g id="Groupe_157" data-name="Groupe 157" transform="translate(3 3)">
            <path id="Tracé_47" data-name="Tracé 47" d="M0,602.349V186.616H.062C.216,83.548,83.826,0,186.987,0S373.758,83.548,373.912,186.616V602.349" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
            <path id="Tracé_48" data-name="Tracé 48" d="M0,561.47V146.09H.046a146.333,146.333,0,0,1,292.665,0V561.473" transform="translate(40.6 40.881)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
            <path id="Tracé_49" data-name="Tracé 49" d="M0,520.953V105.641H.034a105.816,105.816,0,0,1,211.631,0V520.953" transform="translate(81.123 81.392)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
            <path id="Tracé_50" data-name="Tracé 50" d="M0,480.267V64.769H.022a64.879,64.879,0,0,1,129.757,0V480.263" transform="translate(122.067 122.091)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
            <path id="Tracé_51" data-name="Tracé 51" d="M0,439.781V24.264H.006a24.3,24.3,0,0,1,48.609,0V439.781" transform="translate(162.648 162.565)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
        </g>
    </svg>
    <div class="policies__container">
        <div class="policies__top">
            <h1 class="policies__title"><?= $questions['title'] ?></h1>
        </div>
        <div class="policies__content">
            <ul class="policies__list">
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