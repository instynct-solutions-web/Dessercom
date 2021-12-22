<?php
/*
Template Name: Team
*/

// Load header.php
get_header(); ?>

<?php
$hero = get_field('hero'); ?>
<section data-wolfpack-section class="team-hero">
    <div class="team-hero__container">
        <div class="team-hero__top">
            <img src="<?= $hero['icon']['url'] ?>" alt="<?= $hero['icon']['alt'] ?>" class="team-hero__icon">
            <p class="team-hero__note"><?= $hero['note'] ?></p>
        </div>
        <div class="team-hero__main">
            <div class="team-hero__info">
                <h1 class="team-hero__title"><?= $hero['title'] ?></h1>
                <p class="team-hero__text"><?= $hero['text'] ?></p>
            </div>
            <svg class="team-hero__image" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 181.567 163.488">
                <defs>
                    <pattern id="image" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" xlink:href="<?= $hero['image']['url'] ?>"></image>
                    </pattern>
                </defs>
                <path id="Tracé_974" data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image)" />
            </svg>
        </div>
    </div>
</section>

<?php
$team = get_field('team');
$terms = get_terms(array(
    'taxonomy' => 'division',
    'hide_empty' => true,
)); ?>
<section data-wolfpack-section class="team-grid">
    <div class="team-grid__container">
        <div class="team-grid__top">
            <h2 class="team-grid__title"><?= $team['title'] ?></h2>
        </div>
        <div class="team-grid__grid">
            <ul class="team-grid__division-list">
                <?php
                foreach ($terms as $division) { ?>
                    <li class="team-grid__division-item">
                        <a href="#<?= $division->slug ?>" class="team-grid__division-anchor">
                            <?= $division->name ?>
                            <svg class="team-grid__division-icon" xmlns="http://www.w3.org/2000/svg" width="13.384" height="14.515" viewBox="0 0 13.384 14.515">
                                <g id="Groupe_790" data-name="Groupe 790" transform="translate(1.414 -13.432)">
                                    <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5.278,5.278,10.555,0" transform="translate(0 21.669)" fill="none" stroke="#008884" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                    <line id="Ligne_1" data-name="Ligne 1" y1="12.515" transform="translate(5.278 14.432)" fill="none" stroke="#008884" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                </g>
                            </svg>

                        </a>
                    </li>
                <?php
                } ?>
            </ul>
            <div class="team-grid__members">
                <?php foreach ($terms as $division) {
                    $args = array(
                        'posts_per_page' => -1,
                        'post_type' => 'team',
                        'tax_query' => array(
                            array(
                                'taxonomy' => 'division',
                                'terms' => $division->term_id,
                            )
                        )
                    );
                    $members = get_posts($args); ?>

                    <ul class="team-grid__division-grid">
                        <?php foreach ($members as $post) {
                            $member = get_field('member');
                        ?>
                            <li class="team-grid__division-member">
                                <?php if ($member['image']) { ?>
                                    <img src="<?= $member['image']['url'] ?>" alt="<?= $member['image']['alt'] ?>" class="team-grid__image">
                                <?php
                                } ?>
                                <div class="team-grid__member-content">
                                    <p class="team-grid__name"><?= $member['name'] ?><span class="team-grid__credit"><?= $member['credit'] ?></span></p>
                                    <p class="team-grid__position"><?= $member['position'] ?></p>
                                </div>

                            </li>
                        <?php
                        } ?>

                    </ul>
                <?php
                } ?>
            </div>
        </div>
    </div>
</section>

<?php
// Load footer.php
get_footer(); ?>