<?php
/*
Template Name: Accueil
*/

// Load header.php
get_header(); ?>
<section class="styleguide">
    <div class="styleguide__container styleguide__container--black">
        <h1 class="styleguide__name"> INSTYNCT Bluprint V5.0</h1>
    </div>
    <div class="styleguide__container styleguide__container--green">
        <h1 class="styleguide__intro">Style Guide Example</h1>
    </div>
    <div class="styleguide__title-container">

        <h1>Titre H1</h1>
        <h2>Titre H2</h2>
        <h3>Titre H3</h3>
        <h4>Titre H4</h4>

    </div>
    <div class="styleguide__list-container">
        <h2>Liste</h2>
        <ul class="styleguide__list list">
            <li>
                [ES6] for JavaScript (transpiling with [Babel] and linting with [ESLint])
            </li>
            <li>
                [SASS] preprocessor for CSS with [SASS Guidelines]
            </li>
            <li>
                [Gulp 4](https://gulpjs.com/)
            </li>
            <li>
                [Webpack 5](https://webpack.js.org/) to manage, compile and optimize the theme's asset
            </li>
        </ul>
    </div>
    <div class="styleguide__text-container">
        <div class="styleguide__text-wrapper">
            <h2>Texte Primaire</h2>
            <p class="styleguide__text paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, cupiditate. Eligendi asperiores eum aspernatur saepe repudiandae sed est inventore vero sequi tenetur. Vel eligendi adipisci molestiae placeat expedita quis facilis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, cupiditate. Eligendi asperiores eum aspernatur saepe repudiandae sed est inventore vero sequi tenetur. Vel eligendi adipisci molestiae placeat expedita quis facilis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, cupiditate. Eligendi asperiores eum aspernatur saepe repudiandae sed est inventore vero sequi tenetur. Vel eligendi adipisci molestiae placeat expedita quis facilis.</p>
        </div>



    </div>

</section>


<?php $wysiwyg = get_field('wysiwyg') ?>
<section class="styleguide__wysiwyg" style="background-color: #d8d8c8;">
    <div class="styleguide__container styleguide__container--black">
        <h2 class="styleguide__wysiwyg-title">Section Wysiwyg (avec classe)</h2>
    </div>
    <div class="styleguide__container ">
        <?= $wysiwyg ?>
    </div>
</section>

<?php
// Load footer.php
get_footer(); ?>