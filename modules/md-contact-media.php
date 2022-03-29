<?php
$media = get_field('media', 'options') ?>
<section data-wolfpack data-calc-mobile data-contact-media class="contact-media">
    <div class="contact-media__cta-container">
        <div data-cursor data-contact-close class="contact-media__cta cta">
            <span class="contact-media__cta-text cta__text" data-circle-text>
                <?php for ($i = 0; $i <= 5; $i++) { ?>
                    <?= $media['back'] ?>
                    <div> . </div>
                <?php
                } ?>
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
    <div class="contact-media__container" data-wolfpack-section>
        <h2 class="contact-media__title" data-words><?= $media['title'] ?></h2>
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
                            <p class="contact-media__phone"><?= $member['phone_title'] ?><a href="<?= $member['phone']['url'] ?>" class="contact-media__link"><?= $member['phone']['title'] ?></a></p>
                            <p class="contact-media__email"><?= $member['email_title'] ?><a href="<?= $member['email']['url'] ?>" class="contact-media__link"><?= $member['email']['title'] ?></a></p>
                        </div>
                    </li>
                <?php } ?>
            </ul>
        <?php } ?>
        <a href="<?= $media['cta']['url'] ?>" class="contact-media__button"><?= $media['cta']['title'] ?></a>
    </div>
    <div class="contact-media__background" data-lottie-contact="/wp-content/themes/dessercom/assets/src/lottie/lines-white.json"></div>
</section>