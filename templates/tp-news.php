<?php
/*
Template Name: News
*/

get_header(); ?>

<?php get_template_part('modules/md-contact-media'); ?>

<?php $news = get_field('news'); ?>
<section data-wolfpack-section data-contact-hero class="news-hero" data-tadam data-tadam-threshold="-1">
    <div class="news-hero__container">
        <?php get_template_part('modules/md-contact-media-button'); ?>
        <h1 class="news-hero__title" data-words data-tadam-animate="words--delay-0.2"><?= $news['title'] ?></h1>
    </div>
</section>

<section class="news-list" data-wolfpack-section>
    <div class="news-list__container">
        <div class="news-list__filters">
            <?php
            $categories = get_terms([
                'taxonomy' => 'section',
                'hide_empty' => false,
            ]);
            ?>
            <ul class="news-list__filters-list">
                <li class="news-list__filter" data-news-filter="all">
                    Toutes
                </li>
                <?php foreach ($categories as $category) { ?>
                    <li class="news-list__filter" data-news-filter="<?= $category->name; ?>">
                        <?= $category->name; ?>
                    </li>
                <?php } ?>
            </ul>
        </div>
        <div id="news" class="news-list__articles">
            <ul class="list news-list__news">
                <?php
                $args = array(
                    'posts_per_page' => -1,
                    'post_type' => 'news',
                );
                $query = new WP_Query($args);
                if ($query->have_posts()) {
                ?>
                    <?php
                    while ($query->have_posts()) {
                        $query->the_post();
                    ?>
                        <?php get_template_part('modules/md-article', null, array(
                            'news' => $news,
                        )); ?>
                    <?php } ?>
                <?php } ?>
                <?php wp_reset_postdata(); ?>
            </ul>
            <ul class="pagination news-list__pagination"></ul>
        </div>
    </div>
</section>

<?php get_footer(); ?>