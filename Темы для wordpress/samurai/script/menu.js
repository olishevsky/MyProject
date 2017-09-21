var menuBar = document.getElementById('menu__bars');
var menu = document.getElementsByClassName('menu')[0];
var menuContainer = document.getElementsByClassName('menu__container')[0];
var menuAcrive = false;
menuBar.onclick = function(){
	if(menuAcrive == false){
		menu.style.height = "auto";
		menuContainer.style.display = "flex";
		menuAcrive = true;
	}
	else{
		menu.style.height = "38px";
		menuContainer.style.display = "none";
		menuAcrive = false;
	}
}