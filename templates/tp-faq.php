<?php
/*
Template Name: FAQ
*/

// Load header.php
get_header(); ?>

<?php
$faq = get_field('faq') ?>
<section data-wolfpack-section class="faq" data-tadam data-tadam-threshold="-1">
    <div class="faq__background" data-tadam-animate="lottie-lines-once" data-lottie-lines="/wp-content/themes/dessercom/assets/src/lottie/lines-white.json"></div>
    <div class="faq__container">
        <div class="faq__top">
            <h1 class="faq__title" data-words data-tadam-animate="words--delay-0.2"><?= $faq['title'] ?></h1>
        </div>
        <div class="faq__main">
            <div class="faq__filters" data-tadam-animate="opacity-1--delay-0.6">
                <?php
                $categories = get_terms([
                    'taxonomy' => 'groupe',
                    'hide_empty' => true,
                    'orderby'  => 'name',
                    'order'    => 'ASC'
                ]);
                ?>
                <ul class="faq__filters-list">
                    <li class="faq__filter" data-faq-category="all" data-cursor="expand">
                        <?= $faq['label_all'] ?>
                    </li>
                    <?php foreach ($categories as $category) { ?>
                        <li class="faq__filter" data-faq-category="<?= $category->slug; ?>" data-cursor="expand">
                            <?= $category->name; ?>
                            <span class="faq__filter-count">(<?= $category->count ?>)</span>
                        </li>
                    <?php } ?>
                </ul>
            </div>
            <div id="faqs" class="faq__answers" data-tadam-animate="opacity-1--delay-0.6">
                <ul class="list faq__answers-list">
                    <?php
                    $args = array(
                        'posts_per_page' => -1,
                        'post_type' => 'faq',
                    );
                    $query = new WP_Query($args);
                    if ($query->have_posts()) {
                    ?>
                        <?php
                        while ($query->have_posts()) {
                            $query->the_post();
                        ?>
                            <?php get_template_part('modules/md-faq', null, array(
                                'faq' => $faq,
                            )); ?>
                        <?php } ?>
                    <?php } ?>
                    <?php wp_reset_postdata(); ?>
                </ul>
            </div>
        </div>
    </div>
</section>

<?php
// Load footer.php
get_footer(); ?>