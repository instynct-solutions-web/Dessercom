</main>
<?php
$footer = get_field('footer', 'options');
?>
<footer class="footer" data-wolfpack-section>
    <div class="footer__container">
        <div class="footer__brand">
            <div class="footer__logo-container">
                <img src="<?= $footer['logo']['url'] ?>" alt="<?= $footer['logo']['url'] ?>" class="footer__logo">
            </div>
            <div class="footer__copyright-container footer__copyright-container--desktop">
                <p class="footer__copyright"><?= $footer['copyright'] ?></p>
            </div>
        </div>
        <div class="footer__links">
            <ul class="footer__links-grid">
                <?php foreach ($footer['list'] as $link) { ?>
                    <li class="footer__links-item"><a data-footer-link data-cursor data-cursor-class="fade" target="<?= $link['link']['target'] ?>" href="<?= $link['link']['url'] ?>" class="footer__link"><span data-footer-cursor class="footer__link-cursor"></span><?= $link['link']['title'] ?></a></li>
                <?php
                } ?>
            </ul>
        </div>
        <div class="footer__copyright-container footer__copyright-container--mobile">
            <p class="footer__copyright"><?= $footer['copyright'] ?></p>
        </div>
    </div>
</footer>
</div>
</div>
</div>
<?php wp_footer(); ?>

<script>
    window.onUsersnapCXLoad = function(api) {
        api.init();
    }
    var script = document.createElement('script');
    script.defer = 1;
    script.src = 'https://widget.usersnap.com/global/load/8d2dcd87-5ad0-426a-9079-e74390e160d5?onload=onUsersnapCXLoad';
    document.getElementsByTagName('head')[0].appendChild(script);
</script>

</body>

</html>