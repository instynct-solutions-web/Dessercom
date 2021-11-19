</main>
<?php
$footer = get_field('footer', 'options');
?>

<footer class="footer">
    <div class="footer__container">
        <div class="footer__brand">
            <div class="footer__logo-container">
                <img src="<?= $footer['logo']['url'] ?>" alt="<?= $footer['logo']['url'] ?>" class="footer__logo">
            </div>
            <div class="footer__copyright-container">
                <p class="footer__copyright"><?= $footer['copyright'] ?></p>
            </div>
        </div>
        <div class="footer__links">
            <ul class="footer__links-grid">
                <?php foreach ($footer['list'] as $link) { ?>
                    <li class="footer__links-item"><a href="<?= $link['link']['url'] ?>" class="footer__link"><?= $link['link']['title'] ?></a></li>
                <?php
                } ?>
            </ul>
        </div>
    </div>
</footer>
</div>
</div>

<?php wp_footer(); ?>

</body>

</html>