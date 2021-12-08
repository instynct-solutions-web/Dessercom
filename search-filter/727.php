<ul id="response" class="faq__answers-list">
    <?php
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $question = get_field('question')
            // Get project ACF Field
    ?>
            <li class="faq__answer">
                <div class="faq__answer-top">
                    <h4 class="faq__answer-title"><?= the_title() ?></h4>
                </div>
                <div class="faq__answer-content">
                    <p class="faq__answer-text"><?= $question['text'] ?></p>
                    <?php if ($question['subtext']) { ?>
                        <p class="faq__answer-subtext"><?= $question['subtext'] ?></p>
                    <?php
                    } ?>
                    <?php if ($question['link']) { ?>
                        <a href="<?= $question['link']['url'] ?>" target="<?= $question['link']['targer'] ?>" class="faq__answer-link"><?= $question['link']['title'] ?></a>
                    <?php
                    } ?>
                    <?php if ($question['file']) { ?>
                        <a href="<?= $question['file']['url'] ?>" target="<?= $question['file']['targer'] ?>" class="faq__file-link"><?= $question['file']['title'] ?></a>
                    <?php
                    } ?>
                </div>

            </li>
    <?php
        }
    } ?>
</ul>