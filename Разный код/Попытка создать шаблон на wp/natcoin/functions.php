<?php

function wptuts_scripts(){
	wp_enqueue_style( 'style-css', get_stylesheet_uri());
	wp_enqueue_style( 'normalize', get_template_directory_uri() . '/css/normalize.min.css' );
	wp_enqueue_style( 'jquery.popup', get_template_directory_uri() . '/css/jquery.popup.css' );
	wp_enqueue_style( 'datepicker', get_template_directory_uri() . '/css/datepicker.css' );
	wp_enqueue_style( 'slideout', get_template_directory_uri() . '/css/slideout.css' );
	wp_enqueue_style( 'hamburgers', get_template_directory_uri() . '/css/hamburgers.min.css' );

	wp_enqueue_script( 'jquery' );
	
}
add_action('wp_enqueue_scripts', 'wptuts_scripts');

?>