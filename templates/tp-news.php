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

<section class="news-list" data-wolfpack-section data-tadam data-tadam-threshold="-1">
    <div class="news-list__container">
        <div class="news-list__filters" data-tadam-animate="opacity-1--y-0--delay-0.4">
            <?php
            $parentCategories = get_terms([
                'taxonomy' => 'section',
                'hide_empty' => false,
                'parent' => 0,
                'orderby'  => 'name',
                'order'    => 'ASC'
            ]);
            ?>
            <ul class="news-list__filters-list">
                <li class="news-list__filter" data-news-filter="all" data-cursor="expand">
                    <?= $news['label_all'] ?>
                </li>
                <?php foreach ($parentCategories as $parentCategory) { ?>
                    <?php
                    $childCategories = get_terms([
                        'taxonomy' => 'section',
                        'hide_empty' => false,
                        'parent' => $parentCategory->term_id,
                        'orderby'  => 'name',
                        'order'    => 'ASC'
                    ]);
                    ?>
                    <?php if ($childCategories) { ?>
                        <li class="news-list__filter" data-news-filter-parent data-cursor="expand">
                            <?= $parentCategory->name; ?>
                            <svg class="news-list__filter-icon" xmlns="http://www.w3.org/2000/svg" width="12.828" height="7.414" viewBox="0 0 12.828 7.414">
                                <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5,5l5-5" transform="translate(1.414 1.414)" fill="none" stroke="#041e36" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                            </svg>
                        </li>
                        <ul class="news-list__filter-children" data-news-filter-children>
                            <?php foreach ($childCategories as $childCategory) { ?>
                                <li class="news-list__filter-child" data-news-filter="<?= $childCategory->slug; ?>" data-cursor="expand"> <?= $childCategory->name; ?></li>
                            <?php } ?>
                        </ul>
                    <?php } else { ?>
                        <li class="news-list__filter" data-news-filter="<?= $parentCategory->slug; ?>" data-cursor="expand">
                            <?= $parentCategory->name; ?>
                        </li>
                    <?php } ?>
                <?php } ?>
            </ul>
        </div>
        <div id="news" class="news-list__articles" data-tadam-animate="opacity-1--y-0--delay-0.4">
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
            <ul class="pagination news-list__pagination" data-cursor="expand"></ul>
        </div>
    </div>
</section>

<?php get_footer(); ?>