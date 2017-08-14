var animationPosition = document.getElementById('animation-position');
var loadingLeft = document.getElementById('loading-left');
var loadingRight = document.getElementById('loading-right');
var loading = document.getElementById('loading');
window.onload= function(){
	setTimeout(function(){
		loadingLeft.style.left = "-50%";
		loadingRight.style.right = "-50%";
		animationPosition.style.display = 'none';
		setTimeout(function(){
			loading.style.display = "none";
		}, 900);
	}, 500);
}
//					background
var body = document.getElementsByTagName("BODY")[0];
var background = ['url(img/background/background-2.jpg)',
'url(img/background/background-3.jpg)','url(img/background/background-4.jpg)',
'url(img/background/background-5.jpg)'];
function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
body.style.backgroundImage = background[getRandomInt(0,3)];
//					hero
var girls = ['url(img/hero/girls/girl.png)'];
var girlsHeight = [850];
var girlsWidth  = [499];
var hero = document.getElementById('hero');
hero.style.height = girlsHeight[0] + "px";
hero.style.width = girlsWidth[0] + "px";
hero.style.left = "calc(50% - 250px)";
hero.style.backgroundImage = girls[0];
var answer = document.getElementById('answer');
var read = document.getElementById('read');
var dialogWindowMessage = document.getElementById('dialog-window-message');
var textDialog = document.getElementById('text-dialog');
var answerButton = document.getElementById('answer-button');
answer.onclick = function(){
	answer.style.display = "none";
	read.style.display = "block";
	dialogWindowMessage.style.display = "none";
	textDialog.style.display = "block";
	answerButton.style.display = "block";
}
read.onclick = function(){
	answer.style.display = "block";
	read.style.display = "none";
	dialogWindowMessage.style.display = "block";
	textDialog.style.display = "none";
	answerButton.style.display = "none";
}
answerButton = document.querySelector('#answer-button');
answerButton.onclick = function(){
	answer.style.display = "block";
	read.style.display = "none";
	dialogWindowMessage.style.display = "block";
	textDialog.style.display = "none";
	answerButton.style.display = "none";
}
logs = document.querySelector('#logs');
logWindow = document.querySelector('#log-window');
logs.onclick = function(){
	if(logWindow.style.display != "block"){
		logWindow.style.display = "block";
	}
	else{
		logWindow.style.display = "none";
	}
}

