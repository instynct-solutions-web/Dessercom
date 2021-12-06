<ul id="response" class="jobs-careers__jobs-list">
    <?php
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $jobsHero = get_field('hero')
            // Get project ACF Field
    ?>
            <li class="jobs-careers__job">
                <div class="jobs-careers__job-header">
                    <h4 class="jobs-careers__job-name"><?= the_title() ?></h4>
                    <p class="jobs-careers__location"><?= $jobsHero['location'] ?></p>
                </div>
                <a href="<?php the_permalink(); ?>" class="jobs-careers__job-link"><?= __('Voir le poste', 'theme') ?></a>
            </li>
    <?php
        }
    } ?>
</ul>