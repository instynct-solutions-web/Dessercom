<?php
/*
Template Name: Contact
*/

// Load header.php
get_header(); ?>

<?php
$media = get_field('media') ?>
<section class="contact-media">
    <div class="contact-media__container">
        <div class="contact-media__cta-container">
            <div data-contact-close class="contact-media__cta">
                <span class="contact-media__cta-text" data-circle-text>
                    <?= __('Retour') ?>
                    <div> . </div>
                    <?= __('Retour') ?>
                    <div> . </div>
                    <?= __('Retour') ?>
                    <div> . </div>
                    <?= __('Retour') ?>
                    <div> . </div>
                    <?= __('Retour') ?>
                    <div> . </div>
                    <?= __('Retour') ?>
                    <div> . </div>
                </span>
                <svg class="contact-media__cta-icon" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.1 16.66">
                    <g id="Groupe_1000" data-name="Groupe 1000">
                        <g id="Groupe_999" data-name="Groupe 999">
                            <g id="Groupe_796" data-name="Groupe 796">
                                <line id="Ligne_1" data-name="Ligne 1" x1="1" y1="15.66" x2="15.66" y2="1" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-miterlimit: 9.99999982885729;stroke-width: 1.999999965771458px" />
                            </g>
                            <line id="Ligne_133" data-name="Ligne 133" x1="1" y1="1" x2="16.1" y2="15.63" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
        <h2 class="contact-media__title"><?= $media['title'] ?></h2>
        <?php if ($media['list']) { ?>
            <ul class="contact-media__list">
                <?php foreach ($media['list'] as $member) { ?>
                    <li class="contact-media__member">
                        <div class="contact-media__main">
                            <img src="<?= $member['image']['url'] ?>" alt="<?= $member['image']['alt'] ?>" class="contact-media__image">
                            <h3 class="contact-media__name"><?= $member['name'] ?></h3>
                            <p class="contact-media__position"><?= $member['position'] ?></p>
                            <p class="contact-media__function"><?= $member['function'] ?></p>
                        </div>
                        <div class="contact-media__contact">
                            <p class="contact-media__phone"><?= __('Téléphone: ') ?><a href="<?= $member['phone']['url'] ?>" class="contact-media__link"><?= $member['phone']['title'] ?></a></p>
                            <p class="contact-media__email"><?= __('Courriel: ') ?><a href="<?= $member['email']['url'] ?>" class="contact-media__link"><?= $member['email']['title'] ?></a></p>
                        </div>
                    </li>
                <?php } ?>
            </ul>
        <?php } ?>
    </div>
    <img src="<?= $media['background']['url'] ?>" alt="<?= $media['background']['alt'] ?>" class="contact-media__background">
</section>

<?php $hero = get_field('hero'); ?>
<section data-contact-hero class="contact-hero">
    <div class="contact-hero__map-container">
        <?php get_template_part('modules/md-map-contact'); ?>
    </div>
    <div class="contact-hero__container">
        <div class="contact-hero__cta-container">
            <div data-contact-show class="contact-hero__cta">
                <span class="contact-hero__cta-text" data-circle-text>
                    <?= $hero['link']['title'] ?>
                    <div> . </div>
                    <?= $hero['link']['title'] ?>
                    <div> . </div>
                    <?= $hero['link']['title'] ?>
                    <div> . </div>
                </span>
                <svg class="contact-hero__cta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 15">
                    <path id="Polygone_14" data-name="Polygone 14" d="M6.674,1.212a1,1,0,0,1,1.652,0l5.608,8.225A1,1,0,0,1,13.108,11H1.892a1,1,0,0,1-.826-1.563Z" transform="translate(11) rotate(90)" fill="#00938f" />
                </svg>
            </div>
        </div>
        <div class="contact-hero__info">
            <h1 class="contact-hero__title"><?= $hero['title'] ?></h1>
            <?php
            if ($hero['list']) { ?>
                <ul class="contact-hero__list">
                    <?php
                    foreach ($hero['list'] as $item) { ?>
                        <li class="contact-hero__item">
                            <div class="contact-hero__location">
                                <div data-contact-drawer-toggle class="contact-hero__header">
                                    <p class="contact-hero__name"><?= $item['name'] ?><span class="contact-hero__suffix"><?= $item['suffix'] ?></span></p>
                                    <div data-contact-drawer-icon data-services-drawer-icon class="contact-hero__item-icon">
                                        <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.1 16.66">
                                            <g id="Groupe_1000" data-name="Groupe 1000">
                                                <g id="Groupe_999" data-name="Groupe 999">
                                                    <g id="Groupe_796" data-name="Groupe 796">
                                                        <line id="Ligne_1" data-name="Ligne 1" x1="1" y1="15.66" x2="15.66" y2="1" style="fill: none;stroke: #008884;stroke-linecap: round;stroke-miterlimit: 9.99999982885729;stroke-width: 1.999999965771458px" />
                                                    </g>
                                                    <line id="Ligne_133" data-name="Ligne 133" x1="1" y1="1" x2="16.1" y2="15.63" style="fill: none;stroke: #008884;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div data-contact-drawer-container class="contact-hero__body">
                                    <p class="contact-hero__address"><?= $item['address'] ?></p>
                                    <div class="contact-hero__hours"><?= $item['hours'] ?></div>
                                    <?php
                                    if ($item['list']) { ?>
                                        <ul class="contact-hero__phone-list">
                                            <?php
                                            foreach ($item['list'] as $phone) { ?>
                                                <li class="contact-hero__phone-item">
                                                    <p class="contact-hero__phone-type"><?= $phone['name'] ?>:</p>
                                                    <a href="<?= $phone['number']['url'] ?>" class="contact-hero__phone-number"><?= $phone['number']['title'] ?></a>
                                                </li>
                                            <?php } ?>
                                        </ul>
                                    <?php } ?>
                                </div>

                            </div>
                        </li>
                    <?php } ?>
                </ul>
            <?php } ?>
        </div>


    </div>


</section>
<?php
$support = get_field('support') ?>
<section class="contact-support">
    <div class="contact-support__background">
        <svg class="contact-support__foreground-image" xmlns="http://www.w3.org/2000/svg" width="181.567" height="163.488" viewBox="0 0 181.567 163.488">
            <defs>
                <pattern id="image" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" xlink:href="<?= $support['image']['url']  ?>"></image>
                </pattern>
            </defs>
            <path id="Tracé_974" data-name="Tracé 974" d="M178.728,151.529c-6.956,12.172-24.362,15.327-38.914,7.036-1.2-.695-49.044-28.243-49.044-28.243l.049-.08L41.9,158.725c-14.49,8.4-31.927,5.4-38.963-6.686v-.031C-4.1,139.9,1.926,123.262,16.392,114.835c1.15-.64,45.384-26.1,48.834-28.077v.129H65.6l-.16-.264-.215.135V30.3C65.227,13.562,76.593,0,90.6,0s25.383,13.562,25.383,30.3c0,1.31-.24,51.375-.271,56.215l-.209.369h.209v-.369l.031-.055,49.179,28C179.478,122.751,185.653,139.333,178.728,151.529Z" transform="translate(0)" fill="url(#image)" />
        </svg>
        <img class="contact-support__backgound-image" src="<?= $support['background']['url'] ?>" alt="<?= $support['background']['alt'] ?>">
    </div>
    <div class="contact-support__container">
        <div class="contact-support__foreground">
            <p class="contact-support__note"><?= $support['note'] ?></p>
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