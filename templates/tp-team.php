<?php
/*
Template Name: Team
*/

// Load header.php
get_header(); ?>

<?php
$hero = get_field('hero'); ?>
<section class="team-hero">
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
            <div class="team-hero__media">
                <img src="<?= $hero['image']['url'] ?>" alt="<?= $hero['image']['alt'] ?>" class="team-hero__image">
                <div class="team-hero__mask"></div>
            </div>
        </div>
    </div>
</section>

<?php
$team = get_field('team');
$terms = get_terms(array(
    'taxonomy' => 'division',
    'hide_empty' => true,
)); ?>
<section class="team-grid">
    <div class="team-grid__container">
        <div class="team-grid__top">
            <h2 class="team-grid__title"><?= $team['title'] ?></h2>
        </div>
        <div class="team-grid__grid">
            <ul class="team-grid__division-list">
                <?php
                foreach ($terms as $division) { ?>
                    <li class="team-grid__division-item">
                        <a href="#<?= $division->slug ?>" class="team-grid__division-anchor"><?= $division->name ?></a>
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
                                <p class="team-grid__name"><?= $member['name'] ?><span class="team-grid__credit"><?= $member['credit'] ?></span></p>
                                <p class="team-grid__position"><?= $member['position'] ?></p>
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