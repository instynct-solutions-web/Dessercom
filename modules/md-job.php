<?php
$job = $args;
$news = $args['news'];
$permalink = get_permalink($job['job']->ID);

$title = get_the_title($job['job']->ID);
$hero = get_field('hero', $job['job']->ID);
$zone = get_the_terms($job['job']->ID, 'zone');
$type = get_the_terms($job['job']->ID, 'type');
?>
<a data-cursor href="<?= $permalink ?>" class="jobs-careers__job" data-job>
    <span class="jobs-careers__hide zone"><?= $zone[0]->slug ?></span>
    <span class="jobs-careers__hide type"><?= $type[0]->slug ?></span>
    <div class="jobs-careers__job-header">
        <h4 class="jobs-careers__job-name"><?= $title ?></h4>
        <p class="jobs-careers__location"><?= $hero['location'] ?></p>
    </div>
    <span class="jobs-careers__job-link">
        <?= $hero['see_job'] ?>
        <svg class="jobs-careers__job-link-icon" xmlns="http://www.w3.org/2000/svg" width="13.384" height="14.515" viewBox="0 0 13.384 14.515">
            <g id="Groupe_788" data-name="Groupe 788" transform="translate(1.414 1)">
                <path id="Tracé_3" data-name="Tracé 3" d="M0,0,5.278,5.278,10.555,0" transform="translate(0 7.237)" fill="none" stroke="#00938f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                <line id="Ligne_1" data-name="Ligne 1" y1="12.515" transform="translate(5.278 0)" fill="none" stroke="#00938f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
            </g>
        </svg>
    </span>
</a>