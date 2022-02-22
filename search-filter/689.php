<ul id="response" class="jobs-careers__jobs-list">
    <?php
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $jobsHero = get_field('hero')
            // Get project ACF Field
    ?>
            <a data-cursor href="<?php the_permalink(); ?>" class="jobs-careers__job">
                <div class="jobs-careers__job-header">
                    <h4 class="jobs-careers__job-name"><?= the_title() ?></h4>
                    <p class="jobs-careers__location"><?= $jobsHero['location'] ?></p>
                </div>
                <span class="jobs-careers__job-link">
                    <?= $jobsHero['see_job'] ?>
                    <svg class="jobs-careers__job-link-icon" xmlns="http://www.w3.org/2000/svg" width="13.384" height="14.515" viewBox="0 0 13.384 14.515">
                        <g id="Groupe_788" data-name="Groupe 788" transform="translate(1.414 1)">
                            <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5.278,5.278,10.555,0" transform="translate(0 7.237)" fill="none" stroke="#00938f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                            <line id="Ligne_1" data-name="Ligne 1" y1="12.515" transform="translate(5.278 0)" fill="none" stroke="#00938f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                        </g>
                    </svg>
                </span>
            </a>
    <?php
        }
    } ?>
    <div class="jobs-careers__pagination pagination">
        <?php
        $big = 999999999; // need an unlikely integer
        echo paginate_links(array(
            'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
            'format' => '?paged=%#%',
            'current' => max(1, get_query_var('paged')),
            'total' => $query->max_num_pages,
            'show_all' => true,
            'prev_next' => false,
        ));
        ?>
    </div>
</ul>