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
	<header class="header">
		<div class="header__logo-container">
			<img src="<?= $header['logo']['url'] ?>" alt="<?= $header['logo']['alt'] ?>" class="header__logo">
		</div>
		<div class="header__nav-container">
			<nav role="navigation" class="header__main-nav header__main-nav--desktop">
				<?php wp_nav_menu(array(
					'theme_location'  => 'navigation'
				)); ?>
			</nav>
			<div class="header__buttons-container">
				<div class="header__hamburger">
					<span></span>
					<span></span>
				</div>
				<div class="header__button">
					<a href="<?= $header['button']['url'] ?>" class="header__button-label"><?= $header['button']['title'] ?></a>
				</div>
			</div>
		</div>

		<div class="header__navigation navigation">
			<div class="navigation__container">
				<nav role="navigation" class="header__main-nav header__main-nav--mobile">
					<?php wp_nav_menu(array(
						'theme_location'  => 'navigation'
					)); ?>
				</nav>
				<nav role="navigation" class="header__sub-nav header__sub-nav">
					<?php wp_nav_menu(array(
						'theme_location'  => 'sub-navigation'
					)); ?>
				</nav>
			</div>
			<img src="<?= $header['background']['url'] ?>" alt="<?= $header['background']['alt'] ?>" class="navigation__image">
		</div>
	</header>
	<div class="page-body">
		<div data-calc-mobile data-wolfpack="main" class="wolfpack-container">
			<div class="page-wrapper">


				<main role="main">