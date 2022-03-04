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
            <p class="article__text"> <?= $postExerpt ?></p>
            <span class="article__button">
                <?= $news['button_read'] ?>
                <svg class="article__button-icon" xmlns="http://www.w3.org/2000/svg" width="13.384" height="14.515" viewBox="0 0 13.384 14.515">
                    <g id="Groupe_788" data-name="Groupe 788" transform="translate(1.414 1)">
                        <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5.278,5.278,10.555,0" transform="translate(0 7.237)" fill="none" stroke="#00938f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                        <line id="Ligne_1" data-name="Ligne 1" y1="12.515" transform="translate(5.278 0)" fill="none" stroke="#00938f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                    </g>
                </svg>
            </span>
        </div>
    </a>
</li>