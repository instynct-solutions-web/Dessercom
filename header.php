<!doctype html>
<html class="website" <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="format-detection" content="telephone=no">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<?php get_template_part('modules/md-preloader'); ?>
	<?php
	$cursor = get_field('cursor', 'options'); ?>
	<div class="cursor" data-cursor-container>
		<div class="cursor__ball cursor__ball--big" data-cursor-pointer>
			<svg height="32" width="32">
				<circle cx="16" cy="16" r="9" stroke-width="0"></circle>
			</svg>
		</div>
		<div data-cursor-pointer class="cursor__cta cta">

			<span class="cursor__cta-text cta__text" data-circle-text>
				<?= $cursor['text'] ?>
				<div> . </div>
				<?= $cursor['text'] ?>
				<div> . </div>
				<?= $cursor['text'] ?>
				<div> . </div>
				<?= $cursor['text'] ?>
				<div> . </div>
				<?= $cursor['text'] ?>
				<div> . </div>
			</span>
			<svg class="cursor__cta-icon cta__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 15">
				<path id="Polygone_14" data-name="Polygone 14" d="M6.674,1.212a1,1,0,0,1,1.652,0l5.608,8.225A1,1,0,0,1,13.108,11H1.892a1,1,0,0,1-.826-1.563Z" transform="translate(11) rotate(90)" fill="#00938f" />
			</svg>
			<span class="cursor__cta-background"></span>
		</div>
	</div>

	<div id="swup" class="wolfpack-container" data-calc-mobile data-calc-mobile-responsive="responsive">
		<div class="scrollbar" data-scrollbar data-scrollbar-index=2><span class="scrollbar__thumb" data-scrollbar-thumb></span></div>
		<?php $header = get_field('header', 'options'); ?>
		<header class="header transition-fade" data-header data-tadam data-tadam-threshold=-1>
			<div data-header-hide class="header__top">
				<div class="header__lang-container" data-tadam-animate="opacity-1--y-0--delay-0.4">
					<?php do_action('wpml_add_language_selector') ?>
				</div>
			</div>
			<div class="header__main">
				<a data-header-logo href="<?= get_home_url() ?>" class="header__logo-container" data-tadam-animate="opacity-1--y-0--delay-0.4">
					<img data-header-logo src="<?= $header['logo']['url'] ?>" alt="<?= $header['logo']['alt'] ?>" class="header__logo header__logo--desktop">
					<svg class="header__logo header__logo--mobile" xmlns="http://www.w3.org/2000/svg" width="48" height="41.362" viewBox="0 0 48 41.362">
						<g id="Groupe_163" data-name="Groupe 163" transform="translate(-150.322 -21.855)">
							<g id="Groupe_121" data-name="Groupe 121" transform="translate(150.322 21.855)">
								<path id="Tracé_31" data-name="Tracé 31" d="M206.76,21.855c-3.7,0-6.706,3.589-6.706,8.016V44.832h6.059V42.981h-2.075V29.575h.015a2.748,2.748,0,1,1,5.414.027c0,.063,0,.122-.006.184V44.832H213.4s.07-14.593.07-14.961c0-4.427-3-8.016-6.708-8.016" transform="translate(-182.807 -21.855)" fill="#00938f" />
								<path id="Tracé_32" data-name="Tracé 32" d="M242.771,105.275c1.832-3.221.2-7.607-3.647-9.8l-13-7.4-3,5.264,1.752.969,1.027-1.8,11.505,6.581-.007.014a2.749,2.749,0,1,1-2.7,4.692c-.055-.029-.1-.064-.157-.1l-13.074-7.445-1.948,3.422s12.646,7.28,12.967,7.464c3.847,2.189,8.451,1.355,10.283-1.862" transform="translate(-195.523 -67.077)" fill="#00938f" />
								<path id="Tracé_33" data-name="Tracé 33" d="M151.1,105.483c1.862,3.2,6.472,3.992,10.3,1.767l12.931-7.527-3.045-5.234-1.719,1.029,1.042,1.791-11.469,6.646-.008-.014a2.749,2.749,0,1,1-2.7-4.7c.053-.032.11-.058.163-.085L169.6,91.594l-1.98-3.4s-12.647,7.279-12.967,7.464c-3.826,2.224-5.418,6.624-3.557,9.828" transform="translate(-150.322 -67.152)" fill="#00938f" />
							</g>
						</g>
					</svg>
				</a>
				<div data-header-hide class="header__nav-container">
					<nav role="navigation" class="header__main-nav header__main-nav--desktop">
						<?php
						$mainNav = get_field('main_nav', 'options') ?>
						<ul class="menu">
							<?php
							$pageTitle = get_the_title();
							$currentPageClass = '';
							foreach ($mainNav['list'] as $item) {
								if ($pageTitle  == $item['link']['title']) {
									$currentPageClass = 'menu__item--current';
								} else {
									$currentPageClass = '';
								} ?>
								<li class="menu__item <?= $currentPageClass ?>" data-tadam-animate="opacity-1--y-0--delay-0.4">
									<a href="<?= $item['link']['url'] ?>" class="menu__item-link <?= $currentPageClass ?>">
										<?= $item['link']['title'] ?>
									</a>
								</li>
							<?php
							} ?>
						</ul>
					</nav>
					<div class="header__buttons-container">
						<div class="header__hamburger" data-cursor data-navigation-button data-tadam-animate="scaleX-1--delay-0.5">
							<div class="header__hamburger-line-container" data-tadam-animate="scaleX-1--delay-1.3">
								<span class="header__hamburger-line"></span>
							</div>
							<div class="header__hamburger-line-container" data-tadam-animate="scaleX-1--delay-1.4">
								<span class="header__hamburger-line"></span>
							</div>
							<div class="header__hamburger-line-container" data-tadam-animate="scaleX-1--delay-1.5">
								<span class="header__hamburger-line"></span>
							</div>
						</div>
						<div class="header__button" data-invoice-button-container data-tadam-animate="scaleX-1--delay-0.5">
							<a href="<?= $header['button']['url'] ?>" class="header__button-label" data-tadam-animate="opacity-1--y-0--delay-1" data-invoice-button data-marquee-speed=20 data-marquee><?= $header['button']['title'] ?></a>
							<a href="<?= $header['button']['url'] ?>" class="header__button-label header__button-label--mock" data-invoice-mock>
								<p class="header__button-content" data-tadam-animate="opacity-1--y-0--delay-1"><?= $header['button']['title'] ?></p>
							</a>
						</div>
					</div>
				</div>
				<?php
				$mainNavMobile = get_field('main_nav_mobile', 'options') ?>
				<div class="header__navigation navigation" data-calc-mobile data-navigation>
					<div class="navigation__container" data-wolfpack>
						<nav role="navigation" class="header__main-nav header__main-nav--mobile">
							<ul class="header__main-nav-container">
								<?php
								foreach ($mainNavMobile['list'] as $item) { ?>
									<li class="header__main-nav-item">
										<a href="<?= $item['link']['url'] ?>" class="header__main-nav-link">
											<?= $item['link']['title'] ?>
											<svg class="header__main-nav-icon" xmlns="http://www.w3.org/2000/svg" width="22.917" height="20.954" viewBox="0 0 22.917 20.954">
												<g id="Groupe_1094" data-name="Groupe 1094" transform="translate(3.924 2.121)">
													<path id="Tracé_3" data-name="Tracé 3" d="M-2.863,10.394,7.531,0l10.4,10.4" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" />
													<line id="Ligne_1" data-name="Ligne 1" y2="18.833" transform="translate(7.531)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" />
												</g>
											</svg>
										</a>
									</li>
								<?php
								} ?>
							</ul>
						</nav>
						<?php
						$subNav = get_field('sub_nav', 'options') ?>
						<nav role="navigation" class="header__sub-nav header__sub-nav">
							<ul class="header__sub-nav-container">
								<?php
								foreach ($subNav['list'] as $item) { ?>
									<li class="header__sub-nav-item">
										<a href="<?= $item['link']['url'] ?>" class="header__sub-nav-link">
											<?= $item['link']['title'] ?>
											<svg class="header__sub-nav-icon" xmlns="http://www.w3.org/2000/svg" width="13.686" height="12.527" viewBox="0 0 13.686 12.527">
												<g id="Groupe_1547" data-name="Groupe 1547" transform="translate(3.57 1.414)">
													<path id="Tracé_3" data-name="Tracé 3" d="M-2.863,6.134,3.27,0,9.408,6.138" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
													<line id="Ligne_1" data-name="Ligne 1" y2="11.113" transform="translate(3.27)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
												</g>
											</svg>
										</a>
									</li>
								<?php } ?>
							</ul>
						</nav>
						<div class="navigation__image" data-lottie-menu="/wp-content/themes/dessercom/assets/src/lottie/lines-white.json"></div>
					</div>
				</div>
			</div>
		</header>

		<?php
		$contentList = [];
		$contentList[0] = get_field('house');
		$contentList[1] = get_field('borders');
		if ($contentList[0]) {
			foreach ($contentList as $content) { ?>
				<div data-lightbox-slider-container class="lightbox-slider">
					<div class="lightbox-slider__container">
						<div class="lightbox-slider__cta-wrapper">
							<div data-lightbox-slider-close class="lightbox-slider__cta">
								<span class="lightbox-slider__cta-text" data-circle-text>
									<?php for ($i = 0; $i <= 5; $i++) { ?>
										<?= $content['back'] ?>
										<div> . </div>
									<?php
									} ?>
								</span>
								<svg class="lightbox-slider__cta-icon" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.1 16.66">
									<g id="Groupe_1000" data-name="Groupe 1000">
										<g id="Groupe_999" data-name="Groupe 999">
											<g id="Groupe_796" data-name="Groupe 796">
												<line id="Ligne_1" data-name="Ligne 1" x1="1" y1="15.66" x2="15.66" y2="1" style="fill: none;stroke: #041e36;stroke-linecap: round;stroke-miterlimit: 9.99999982885729;stroke-width: 1.999999965771458px" />
											</g>
											<line id="Ligne_133" data-name="Ligne 133" x1="1" y1="1" x2="16.1" y2="15.63" style="fill: none;stroke: #041e36;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
										</g>
									</g>
								</svg>
							</div>
						</div>

						<ul data-lightbox-slider class="lightbox-slider__list ">
							<?php foreach ($content['list'] as $slide) { ?>
								<li data-lightbox-slider-item class="lightbox-slider__item ">
									<img src="<?= $slide['image']['url'] ?>" alt="<?= $slide['image']['alt'] ?>" class="lightbox-slider__image">
								</li>
							<?php
							} ?>
						</ul>
						<div class="lightbox-slider__button-wrapper">
							<div class="lightbox-slider__button-container">
								<div data-lightbox-slider-prev class="lightbox-slider__nav lightbox-slider__nav--prev">
									<svg class="lightbox-slider__nav-svg lightbox-slider__nav-svg--prev" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.73 13.41">
										<g id="Groupe_456" data-name="Groupe 456">
											<g id="Groupe_454" data-name="Groupe 454">
												<path id="Tracé_3" data-name="Tracé 3" d="M7.12,1.41l-5.7,5.7,5.7,5.71" transform="translate(-0.01 -0.41)" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
												<line id="Ligne_1" data-name="Ligne 1" x1="1.41" y1="6.7" x2="19.73" y2="6.7" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
											</g>
										</g>
									</svg>
								</div>
								<div data-lightbox-slider-next class="lightbox-slider__nav lightbox-slider__nav--next">
									<svg id="Calque_1" class="lightbox-slider__nav-svg lightbox-slider__nav-svg--next" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.73 13.41">
										<g id="Groupe_456" data-name="Groupe 456">
											<g id="Groupe_454" data-name="Groupe 454">
												<path id="Tracé_3" data-name="Tracé 3" d="M14,1l5.7,5.7L14,12.41" transform="translate(-0.41 0)" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
												<line id="Ligne_1" data-name="Ligne 1" x1="19.32" y1="6.7" x2="1" y2="6.7" style="fill: none;stroke: #e7e7e7;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px" />
											</g>
										</g>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
		<?php
			}
		} ?>

		<div class="dom-wrapper transition-fade" data-wolfpack="main">
			<div class="page-wrapper">
				<main role="main">