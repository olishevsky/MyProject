<?php get_header(); ?>
<div id="main">
	<div id="error-1">
		<div id="title-404">Страница не найдена</div>
		<img id="error-404" src="wp-content/themes/natcoin/images/404.png" alt="404">
	</div>
	<div id="line"></div>
	<div id="error-2">
		<div id="cause-error-title">Причины этой ошибки в следующем:</div>
		<div class="cause-error">Страница была удалена;</div>
		<div class="cause-error">Вы ввели неправильный адрес в адресной 
строке или перешли по «битой» ссылке.</div>
	</div>
	<div id="text-error">
		Проверьте какой адрес введен в адресной строке браузера — возможно, вы опечатались при наборе.
	</div>
</div>
<?php get_footer(); ?>