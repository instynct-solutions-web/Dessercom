<?php
/*
Template Name: Contact
*/

// Load header.php
get_header(); ?>

<?php $hero = get_field('hero'); ?>
<section class="contact-hero">
    <div class="contact-hero__container">
        <div class="contact-hero__info">
            <h1 class="contact-hero__title"><?= $hero['title'] ?></h1>
            <?php
            if ($hero['list']) { ?>
                <ul class="contact-hero__list">
                    <?php
                    foreach ($hero['list'] as $item) { ?>
                        <li class="contact-hero__item">
                            <div class="contact-hero__location">
                                <p class="contact-hero__name"><?= $item['name'] ?><span class="contact-hero__suffix"><?= $item['suffix'] ?></span></p>
                                <p class="contact-hero__address"><?= $item['address'] ?></p>
                                <div class="contact-hero__hours"><?= $item['hours'] ?></div>
                                <?php
                                if ($item['list']) { ?>
                                    <ul class="contact-hero__phone-list">
                                        <?php
                                        foreach ($item['list'] as $phone) { ?>
                                            <li class="contact-hero__phone-item">
                                                <p class="contact-hero__phone-type"><?= $phone['name'] ?></p>
                                                <a href="<?= $phone['number']['url'] ?>" class="contact-hero__phone-number"><?= $phone['number']['title'] ?></a>
                                            </li>
                                        <?php } ?>
                                    </ul>
                                <?php } ?>
                            </div>
                        </li>
                    <?php } ?>
                </ul>
            <?php } ?>
        </div>
        <div class="contact-hero__map">

        </div>

    </div>
    <a class="contact-hero__cta"><?= $hero['link']['title'] ?></a>
    <?php
    $media = get_field('media') ?>
    <div class="contact-hero__media">
        <div class="contact-hero__media-container">
            <h2 class="contact-hero__media-title"><?= $media['title'] ?></h2>
            <?php if ($media['list']) { ?>
                <ul class="contact-hero__media-list">
                    <?php foreach ($media['list'] as $member) { ?>
                        <li class="contact-hero__media-member">
                            <div class="contact-hero__main">
                                <img src="<?= $member['image']['url'] ?>" alt="<?= $member['image']['alt'] ?>" class="contact-hero__media-image">
                                <h3 class="contact-hero__media-name"><?= $member['name'] ?></h3>
                                <p class="contact-hero__media-position"><?= $member['position'] ?></p>
                                <p class="contact-hero__media-function"><?= $member['function'] ?></p>
                            </div>
                            <div class="contact-hero__contact">
                                <p class="contact-hero__phone"><?= __('Téléphone: ') ?><a href="<?= $member['phone']['url'] ?>" class="contact-hero__link"><?= $member['phone']['title'] ?></a></p>
                                <p class="contact-hero__email"><?= __('Courriel: ') ?><a href="<?= $member['email']['url'] ?>" class="contact-hero__link"><?= $member['email']['title'] ?></a></p>
                            </div>
                        </li>
                    <?php } ?>
                </ul>
            <?php } ?>
        </div>
        <img src="<?= $media['background']['url'] ?>" alt="<?= $media['background']['alt'] ?>" class="contact-hero__media-background">
    </div>
</section>

<?php
$support = get_field('support') ?>
<section class="contact-support">
    <div class="contact-support__container">
        <div class="contact-support__background">
            <img class="contact-support__backgound-image" src="<?= $support['background']['url'] ?>" alt="<?= $support['background']['alt'] ?>">
        </div>
        <div class="contact-support__foreground">
            <p class="contact-support__note"><?= $support['note'] ?></p>
            <div class="contact-support__media mask">
                <img class="contact-support__image mask__image" src="<?= $support['image']['url']  ?>" alt="<?= $support['image']['alt']  ?>">
                <div class="contact-support__mask mask__overlay"></div>
            </div>
            <div class="contact-support__info">
                <h2 class="contact-support__title"><?= $support['title'] ?></h2>
                <p class="contact-support__text"><?= $support['text'] ?></p>
                <?php
                if ($support['list']) { ?>
                    <ul class="contact-support__phone-list">
                        <?php
                        foreach ($support['list'] as $phone) { ?>
                            <li class="contact-support__phone-item">
                                <p class="contact-support__phone-type"><?= $phone['name'] ?></p>
                                <a href="<?= $phone['phone']['url'] ?>" class="contact-support__phone-number"><?= $phone['phone']['title'] ?></a>
                            </li>
                        <?php } ?>
                    </ul>
                <?php } ?>
            </div>
        </div>
    </div>
</section>

<?php
$contact = get_field('form'); ?>
<section class="contact-form">
    <img src="<?= $contact['image']['url'] ?>" alt="<?= $contact['image']['alt'] ?>" class="contact-form__background">
    <div class="contact-form__container">
        <h2 class="contact-form__title"><?= $contact['title'] ?></h2>
        <div class="contact-form__form-container">
            <?php
            echo do_shortcode('[gravityform id="2" title="false" description="false" ajax="false"]'); ?>
        </div>
    </div>
</section>

<?php
// Load footer.php
get_footer(); ?>