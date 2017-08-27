<!DOCTYPE html>
<html>
<head>
	<title>Страница новости</title>
	<meta charset="utf-8" />
	<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="keywords" content="" />
	<meta name="description" content="" />
<?php wp_head(); ?>
</head>
<body>
<nav class="menu-mobile slideout-menu" id="menu-mobile">
	<div class="menu-mobile__block">
		<div class="cabinet">
			<div class="cabinet__item"><a class="js-popup" href="" data-popup="login"><svg class="icon icon--inline icon--first"><use xlink:href="#login"></use></svg>Вход</a></div>
			<div class="cabinet__item"><a class="js-popup" href="" data-popup="register"><svg class="icon icon--inline icon--first"><use xlink:href="#rounded-add-button"></use></svg>Регистрация</a></div>
		</div>
	</div>
	<div class="menu">
		<ul>
			<li><a href="#">Главная</a></li>
			<li><a href="#">Новости</a></li>
			<li><a href="#">Майнинг</a></li>
			<li><a href="#">Биржа</a></li>
			<li><a href="#">Правила</a></li>
			<li><a href="#">Помощь</a></li>
		</ul>
	</div>
</nav>
<div id="panel">
	<header class="header">
		<div class="wrap">
			<div class="row row--nopadding middle-xs">
				<div class="col col--nopadding xs-12 sm-3 md-2">
					<div class="header__item">
						<div class="logo"><a href="#"><img src="wp-content/themes/natcoin/images/logo.png" alt=""></a></div>
						<div class="name-company">Natcoin</div>
						<div class="menu-open hidden-sm hidden-md hidden-lg">
							<span class="hamburger hamburger--collapse"><span class="hamburger-box"><span class="hamburger-inner"></span></span></span>
						</div>
					</div>
				</div>
				<div class="col col--nopadding xs-12 sm-9 md-10">
					<div class="header__item header__item--light back-wrong back-wrong--header">
						<div class="row row--margin end-xs">
							<div class="col col--margin xs-12 md-7 lg-6">
								<div class="rate">
									<div class="rate__item rate__item--up">
										<div class="rate__title">Курс Natcoin:</div>
										<div class="rate__value">0,000000003 <br><b>NAT | 1USD</b><svg class="icon icon--inline icon--last"><use xlink:href="#play-button"></use></svg></div>
									</div>
									<div class="rate__item rate__item--down">
										<div class="rate__title">Курс на бирже:</div>
										<div class="rate__value">0,000000003 <br><b>NAT | 1USD</b><svg class="icon icon--inline icon--last"><use xlink:href="#play-button"></use></svg></div>
									</div>
								</div>
							</div>
							<div class="col col--margin xs-12 sm-8 md-5 lg-4">
								<div class="info">
									<div class="info__item">
										<div class="info__title">Добыто</div>
										<div class="info__value">2 500 000</div>
									</div>
									<div class="info__item">
										<div class="info__title">Активные</div>
										<div class="info__value">2 500 000</div>
									</div>
									<div class="info__item">
										<div class="info__title">Эмиссия</div>
										<div class="info__value">2 500 000</div>
									</div>
								</div>
							</div>
							<div class="col col--margin xs-12 sm-4 md-4 lg-2 hidden-xs">
								<div class="cabinet">
									<div class="cabinet__item cabinet__item--login"><a href="#">Баланс<svg class="icon icon--inline icon--last"><use xlink:href="#information-sign"></use></svg></a></div>
									<div class="cabinet__item cabinet__item--balance">250 000 NAT</div>
								</div>
							</div>
						</div>
					</div>
					<div class="menu back-wrong back-wrong--dark hidden-xs">
						<ul>
							<li><a href="#">Главная</a></li>
							<li><a href="#">Новости</a></li>
							<li><a href="#">Майнинг</a></li>
							<li><a href="#">Биржа</a></li>
							<li><a href="#">Правила</a></li>
							<li><a href="#">Помощь</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>