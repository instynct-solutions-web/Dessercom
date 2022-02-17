<ul id="response" class="faq__answers-list">
    <?php
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $question = get_field('question')
            // Get project ACF Field
    ?>
            <li class="faq__answer" data-terms-policies>
                <div class="faq__answer-top">
                    <h4 data-cursor class="faq__answer-title" data-terms-policies-title>
                        <?= the_title() ?>
                        <svg class="faq__answer-icon" xmlns="http://www.w3.org/2000/svg" width="12.828" height="7.414" viewBox="0 0 12.828 7.414">
                            <g id="Groupe_1175" data-name="Groupe 1175" transform="translate(1.414 -22.704)">
                                <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5,5l5-5" transform="translate(0 24.118)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                            </g>
                        </svg>
                    </h4>
                </div>
                <div class="faq__answer-content">
                    <div class="faq__answer-text"><?= $question['text'] ?></div>
                    <?php if ($question['subtext']) { ?>
                        <div class="faq__answer-subtext"><?= $question['subtext'] ?></div>
                    <?php
                    } ?>
                    <?php if ($question['link']) { ?>
                        <a href="<?= $question['link']['url'] ?>" target="<?= $question['link']['target'] ?>" class="faq__answer-link"><?= $question['link']['title'] ?></a>
                    <?php
                    } ?>
                    <?php if ($question['file']) { ?>
                        <a href="<?= $question['file']['url'] ?>" target="<?= $question['file']['target'] ?>" class="faq__file-link"><?= $question['file']['title'] ?></a>
                    <?php
                    } ?>
                </div>

            </li>
    <?php
        }
    } ?>
</ul>