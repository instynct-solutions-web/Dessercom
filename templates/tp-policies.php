<?php
/*
Template Name: Policies
*/

// Load header.php
get_header(); ?>

<?php
$questions = get_field('policies') ?>
<section data-wolfpack-section class="policies">
    <svg class="policies__background" xmlns="http://www.w3.org/2000/svg" width="473.919" height="759.8" viewBox="0 0 473.919 759.8">
        <g id="Groupe_157" data-name="Groupe 157" transform="translate(3 3)">
            <path id="Tracé_47" data-name="Tracé 47" d="M0,753.788V233.534H.077C.271,104.553,104.9,0,234,0S467.726,104.553,467.919,233.534V753.788" transform="translate(0 0)" fill="none" stroke="#e7e7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
            <path id="Tracé_48" data-name="Tracé 48" d="M0,702.632V182.819H.058C.209,81.845,82.12,0,183.183,0S366.153,81.845,366.3,182.819V702.636" transform="translate(50.808 51.16)" fill="none" stroke="#e7e7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
            <path id="Tracé_49" data-name="Tracé 49" d="M0,651.929V132.2H.043a132.419,132.419,0,0,1,264.838,0V651.929" transform="translate(101.519 101.855)" fill="none" stroke="#e7e7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
            <path id="Tracé_50" data-name="Tracé 50" d="M0,601.013V81.053H.027a81.19,81.19,0,0,1,162.38,0V601.009" transform="translate(152.756 152.787)" fill="none" stroke="#e7e7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
            <path id="Tracé_51" data-name="Tracé 51" d="M0,550.348V30.365H.008a30.415,30.415,0,0,1,60.83,0V550.348" transform="translate(203.541 203.436)" fill="none" stroke="#e7e7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
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
                        <h3 data-cursor class="policies__item-title" data-terms-policies-title>
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