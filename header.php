<!doctype html>
<html class="website" <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div class="cursor" data-cursor-container>
		<div class="cursor__ball cursor__ball--small" data-cursor-pointer>
			<svg height="32" width="32">
				<circle cx="15" cy="16" r="9" stroke-width="0"></circle>
			</svg>
		</div>

	</div>
	<?php $header = get_field('header', 'options'); ?>
	<header class="header" data-header>
		<div class="header__top">
			<div class="header__lang-container">
				<?php do_action('wpml_add_language_selector') ?>
			</div>
		</div>
		<div class="header__main">
			<a href="/" class="header__logo-container">
				<img src="<?= $header['logo']['url'] ?>" alt="<?= $header['logo']['alt'] ?>" class="header__logo header__logo--desktop">
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

			<div class="header__nav-container">
				<nav role="navigation" class="header__main-nav header__main-nav--desktop">
					<?php wp_nav_menu(array(
						'theme_location'  => 'navigation'
					)); ?>
				</nav>
				<div class="header__buttons-container">
					<div class="header__hamburger" data-navigation-button>
						<span class="header__hamburger-line"></span>
						<span class="header__hamburger-line"></span>
						<span class="header__hamburger-line"></span>
					</div>
					<div class="header__button">
						<a href="<?= $header['button']['url'] ?>" class="header__button-label"><?= $header['button']['title'] ?></a>
					</div>
				</div>
			</div>

			<div class="header__navigation navigation" data-calc-mobile data-navigation>
				<div class="navigation__container" data-wolfpack>
					<nav role="navigation" class="header__main-nav header__main-nav--mobile">
						<ul class="header__main-nav-container">
							<li class="header__main-nav-item">
								<a href="/services" class="header__main-nav-link">
									Services
									<svg class="header__main-nav-icon" xmlns="http://www.w3.org/2000/svg" width="22.917" height="20.954" viewBox="0 0 22.917 20.954">
										<g id="Groupe_1094" data-name="Groupe 1094" transform="translate(3.924 2.121)">
											<path id="Tracé_3" data-name="Tracé 3" d="M-2.863,10.394,7.531,0l10.4,10.4" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" />
											<line id="Ligne_1" data-name="Ligne 1" y2="18.833" transform="translate(7.531)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" />
										</g>
									</svg>
								</a>
							</li>
							<li class="header__main-nav-item">
								<a href="/tarification" class="header__main-nav-link">
									Tarification
									<svg class="header__main-nav-icon" xmlns="http://www.w3.org/2000/svg" width="22.917" height="20.954" viewBox="0 0 22.917 20.954">
										<g id="Groupe_1094" data-name="Groupe 1094" transform="translate(3.924 2.121)">
											<path id="Tracé_3" data-name="Tracé 3" d="M-2.863,10.394,7.531,0l10.4,10.4" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" />
											<line id="Ligne_1" data-name="Ligne 1" y2="18.833" transform="translate(7.531)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" />
										</g>
									</svg>
								</a>
							</li>
							<li class="header__main-nav-item">
								<a href="/contact" class="header__main-nav-link">
									Contact
									<svg class="header__main-nav-icon" xmlns="http://www.w3.org/2000/svg" width="22.917" height="20.954" viewBox="0 0 22.917 20.954">
										<g id="Groupe_1094" data-name="Groupe 1094" transform="translate(3.924 2.121)">
											<path id="Tracé_3" data-name="Tracé 3" d="M-2.863,10.394,7.531,0l10.4,10.4" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" />
											<line id="Ligne_1" data-name="Ligne 1" y2="18.833" transform="translate(7.531)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" />
										</g>
									</svg>
								</a>
							</li>
						</ul>
					</nav>
					<nav role="navigation" class="header__sub-nav header__sub-nav">
						<ul class="header__sub-nav-container">
							<li class="header__sub-nav-item">
								<a href="/philanthropie" class="header__sub-nav-link">
									Philanthropie
									<svg class="header__sub-nav-icon" xmlns="http://www.w3.org/2000/svg" width="13.686" height="12.527" viewBox="0 0 13.686 12.527">
										<g id="Groupe_1547" data-name="Groupe 1547" transform="translate(3.57 1.414)">
											<path id="Tracé_3" data-name="Tracé 3" d="M-2.863,6.134,3.27,0,9.408,6.138" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
											<line id="Ligne_1" data-name="Ligne 1" y2="11.113" transform="translate(3.27)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
										</g>
									</svg>
								</a>
							</li>
							<li class="header__sub-nav-item">
								<a href="/a-propos" class="header__sub-nav-link">
									À propos
									<svg class="header__sub-nav-icon" xmlns="http://www.w3.org/2000/svg" width="13.686" height="12.527" viewBox="0 0 13.686 12.527">
										<g id="Groupe_1547" data-name="Groupe 1547" transform="translate(3.57 1.414)">
											<path id="Tracé_3" data-name="Tracé 3" d="M-2.863,6.134,3.27,0,9.408,6.138" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
											<line id="Ligne_1" data-name="Ligne 1" y2="11.113" transform="translate(3.27)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
										</g>
									</svg>
								</a>
							</li>
							<li class="header__sub-nav-item">
								<a href="/equipe" class="header__sub-nav-link">
									Équipe
									<svg class="header__sub-nav-icon" xmlns="http://www.w3.org/2000/svg" width="13.686" height="12.527" viewBox="0 0 13.686 12.527">
										<g id="Groupe_1547" data-name="Groupe 1547" transform="translate(3.57 1.414)">
											<path id="Tracé_3" data-name="Tracé 3" d="M-2.863,6.134,3.27,0,9.408,6.138" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
											<line id="Ligne_1" data-name="Ligne 1" y2="11.113" transform="translate(3.27)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
										</g>
									</svg>
								</a>
							</li>
							<li class="header__sub-nav-item">
								<a href="/carriere-et-stage" class="header__sub-nav-link">
									Carrière et stage
									<svg class="header__sub-nav-icon" xmlns="http://www.w3.org/2000/svg" width="13.686" height="12.527" viewBox="0 0 13.686 12.527">
										<g id="Groupe_1547" data-name="Groupe 1547" transform="translate(3.57 1.414)">
											<path id="Tracé_3" data-name="Tracé 3" d="M-2.863,6.134,3.27,0,9.408,6.138" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
											<line id="Ligne_1" data-name="Ligne 1" y2="11.113" transform="translate(3.27)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
										</g>
									</svg>
								</a>
							</li>
							<li class="header__sub-nav-item">
								<a href="https://portail.dessercom.com/login?&page=%2Fmain%2F" target="_blank" class="header__sub-nav-link">
									Section employés
									<svg class="header__sub-nav-icon" xmlns="http://www.w3.org/2000/svg" width="13.686" height="12.527" viewBox="0 0 13.686 12.527">
										<g id="Groupe_1547" data-name="Groupe 1547" transform="translate(3.57 1.414)">
											<path id="Tracé_3" data-name="Tracé 3" d="M-2.863,6.134,3.27,0,9.408,6.138" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
											<line id="Ligne_1" data-name="Ligne 1" y2="11.113" transform="translate(3.27)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
										</g>
									</svg>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<img src="<?= $header['background']['url'] ?>" alt="<?= $header['background']['alt'] ?>" class="navigation__image">
			</div>
		</div>

	</header>
	<div class="page-body">
		<div class="scrollbar" data-scrollbar data-scrollbar-index=1><span class="scrollbar__thumb" data-scrollbar-thumb></span></div>
		<div data-calc-mobile data-wolfpack="main" class="wolfpack-container">
			<div class="page-wrapper">
				<main role="main">