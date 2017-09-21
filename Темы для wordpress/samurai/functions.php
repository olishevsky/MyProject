<?php

function wptuts_setup(){

	load_theme_textdomain('wptuts');

	add_theme_support('title-tag');

	add_theme_support('custom-logo', array(
		'height' => 200,
		'width' =>	300,
		'flex-height' => true
	));

	add_theme_support('post-thumbnails');
	set_post_thumbnail_size(800, 450);

	add_theme_support('html5', array(
		'serch_form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption'
	));

	add_theme_support('post-formats', array(
		'aside',
		'image',
		'video',
		'gallery'
	));

	register_nav_menu('primary', 'Primary menu');
}

add_action('after_setup_theme', 'wptuts_setup');

function wptuts_scripts(){
	wp_enqueue_style('font-awesome', get_template_directory_uri() . '/fonts/font-awesome/css/font-awesome.min.css' );
	wp_enqueue_style('style-css', get_stylesheet_uri() );

	wp_enqueue_script( 'menu', get_template_directory_uri() . '/script/menu.js' );
	wp_enqueue_script( 'slider', get_template_directory_uri() . '/script/slider.js' );
	wp_enqueue_script( 'carousel', get_template_directory_uri() . '/script/carousel.js' );
	wp_enqueue_script( 'top-button', get_template_directory_uri() . '/script/top-button.js' );
}
add_action( 'wp_enqueue_scripts', 'wptuts_scripts' );

add_action( 'after_setup_theme', 'action_requeue_scripts' );

function action_requeue_scripts() {
    remove_action( 'wp_head', 'wp_print_scripts' );
    remove_action( 'wp_head', 'wp_print_head_scripts', 9 );
    remove_action( 'wp_head', 'wp_enqueue_scripts', 1 );

    add_action( 'wp_footer', 'wp_print_scripts', 5 );
    add_action( 'wp_footer', 'wp_enqueue_scripts', 5 );
    add_action( 'wp_footer', 'wp_print_head_scripts', 5 );
}

add_filter('excerpt_more', function($more){
	return '';
});

?>
