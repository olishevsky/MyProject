<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>
<body <?php body_class();?>>
	<div class="menu">
		<i id="menu__bars" class="fa fa-bars menu__bars" aria-hidden="true"></i>
			<?php
				wp_nav_menu(array(
					'theme_location' => 'primary',
					'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
					'menu_class' => 'menu__container',
					'menu_id' => '',
					'depth' => 1
				));
			?>
		<!--<nav class="menu__container">
			<a class="menu__container-element" href="index.html">Главная</a>
			<a class="menu__container-element" href="#">Новости</a>
			<a class="menu__container-element" href="#">Группы</a>
			<a class="menu__container-element" href="#">Виды практик</a>
			<a class="menu__container-element" href="#">Расписание</a>
			<a class="menu__container-element" href="#">Контакты</a>
		</nav>-->
	</div>
	<div class="head">
		<div class="head__container">
			<?php the_custom_logo(); ?>
			<a class="head__container-link" href="#" >Записаться на курсы</a>
			<div class="head__container-info">
				<a class="head__container-info-phone" href="tel:89099560312">+7 (909) 956-03-12</a>
				<div class="head__container-info-address">г. Москва, ул. Генерала Белова, 18</div>
				<div class="head__container-info-socialmedia">
					<a class="head__container-info-socialmedia-link head__container-info-socialmedia-link_vk" href="https://vk.com/ukedo_karate"><i class="fa fa-vk" aria-hidden="true"></i></a>
					<a class="head__container-info-socialmedia-link head__container-info-socialmedia-link_facebook" href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
					<a class="head__container-info-socialmedia-link head__container-info-socialmedia-link_instagram" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
				</div>
			</div>
		</div>
	</div>