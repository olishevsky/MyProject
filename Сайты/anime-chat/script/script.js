window.onload= function(){
	var animationPosition = document.getElementById('animation-position');
	setTimeout(function(){
		var loadingLeft = document.getElementById('loading-left');
		var loadingRight = document.getElementById('loading-right');
		loadingLeft.style.left = "-9999px";
		loadingRight.style.right = "-9999px";
		animationPosition.style.display = 'none';
		setTimeout(function(){
			var loading = document.getElementById('loading');
			loading.style.display = "none";
		}, 900);
	}, 500);
	new WOW().init();
}
var welcome = document.getElementById('welcome');
var begin = document.getElementById('begin');
var begin2 = document.getElementById('begin-2');
var menu = document.getElementById('menu');
var menuSex = document.getElementById('menu-sex');
var menuGerl = document.getElementById('menu-gerl');
var menuBoy = document.getElementById('menu-boy');
begin.onclick = function(){
	menu.style.display = "flex";
	setTimeout(function(){
		welcome.style.opacity = "0";
		menu.style.opacity = "1";
	}, 4);
	setTimeout(function(){
		welcome.style.display = "none";
	},500);
}
menuSex.onclick = function(){
	if(menuSex.querySelector("input[type='radio'][name='sex']:checked").value == '2'){
		menuGerl.style.display = "none";
		menuBoy.style.display = "flex";
	}
	else{
		menuBoy.style.display = "none";
		menuGerl.style.display = "flex";
	}
}