<?php $media = get_field('media', 'options') ?>
<div class="contact-hero__cta-container">
    <div data-cursor data-contact-show class="contact-hero__cta cta">
        <span class="contact-hero__cta-text cta__text" data-circle-text>
            <?php for ($i = 0; $i <= 2; $i++) { ?>
                <?= $media['toggle'] ?>
                <div> . </div>
            <?php } ?>
        </span>
        <svg class="contact-hero__cta-icon cta__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 15">
            <path id="Polygone_14" data-name="Polygone 14" d="M6.674,1.212a1,1,0,0,1,1.652,0l5.608,8.225A1,1,0,0,1,13.108,11H1.892a1,1,0,0,1-.826-1.563Z" transform="translate(11) rotate(90)" fill="#00938f" />
        </svg>
    </div>
</div>