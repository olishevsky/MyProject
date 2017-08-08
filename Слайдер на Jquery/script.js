var photo1 = document.querySelector('#photo-1');
var photo2 = document.querySelector('#photo-2');
var photo3 = document.querySelector('#photo-3');
var photos = [photo1, photo2, photo3];
var leftButton = document.querySelector('#left-button');
var rightButton = document.querySelector('#right-button');
var photoI = 0;
var buttonTimeOut = false;
rightButton.onclick = function(){
	if(buttonTimeOut == false){
		buttonTimeOut = true;
		$(photos[photoI]).slideToggle();
		photoI++;
		setTimeout(function(){
		$(photos[photoI]).slideToggle();
		buttonTimeOut = false;
		},750);
		if(photoI == 3){
			photoI = 0;
		}
	}
}
leftButton.onclick = function(){
	if(buttonTimeOut == false){
		buttonTimeOut = true;
		$(photos[photoI]).slideToggle();
		if(photoI == 0){
			photoI = 3;
		}
		photoI--;
		setTimeout(function(){
		$(photos[photoI]).slideToggle();
		buttonTimeOut = false;
		},750);
	}
}
