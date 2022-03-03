<?php
$article = $args;
$news = $args['news'];
$permalink = get_permalink($article['article']->ID);
$hero = get_field('hero', $article['article']->ID);
$content = get_field('content', $article['article']->ID);
$postExerpt = strWordCut($content, 135, '....');
$category = get_the_terms($article['article']->ID, 'section');
?>
<li class="article <?= $category[0]->slug ?>" data-post>
    <a href="<?= esc_url($permalink); ?>" class="article__link">
        <div class="article__image-container">
            <img class="article__image" src="<?= $hero['image']['url'] ?>" alt="<?= $hero['image']['alt'] ?>">
        </div>
        <div class="article__content">
            <p class="article__category category"><?= $category[0]->name ?></p>
            <p class="article__title"><?= $hero['title'] ?></p>
            <span class="article__separator"></span>
            <p class="articles__text"> <?= $postExerpt ?></p>
            <span class="article__button"><?= $news['button_read'] ?></span>
        </div>
    </a>
</li>