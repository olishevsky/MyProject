var buttonСall1 = document.getElementsByClassName('button-call')[0];
var buttonСall2 = document.getElementsByClassName('button-call')[1];
var buttonCall3 = document.getElementsByClassName('block-1__mask-order-form-send')[2];
var buttonCall4 = document.getElementsByClassName('block-1__mask-order-form-send')[3];
var modalWindow = document.getElementsByClassName('modal-mask')[0];
var modalWindowExit = document.getElementsByClassName('modal-window__exit')[0];
buttonСall1.onclick = function(){
	modalWindow.style.display = "block";
}
buttonСall2.onclick = function(){
	modalWindow.style.display = "block";
}
buttonCall3.onclick = function(){
	modalWindow.style.display = "block";
}
buttonCall4.onclick = function(){
	modalWindow.style.display = "block";
}
modalWindowExit.onclick = function(){
	modalWindow.style.display = "none";
}