<?php
/*
Template Name: Wysiwyg
*/

// Load header.php
get_header(); ?>

<?php
$wysiwyg = get_field('wysiwyg'); ?>
<section data-wolfpack-section class="wysiwyg">
    <div class="wysiwyg__container">
        <?= $wysiwyg ?>
    </div>
</section>
<?php
// Load footer.php
get_footer(); ?>