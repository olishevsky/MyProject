function getCookie(name) {
		var r = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
		if (r) return r[2];
		else return "";
	}
userCookie = getCookie("userId");
testCookie = getCookie("testUser");
if(testCookie != "true"){
	
	document.cookie = "testUser=true";
	//getCookie("testUser");	
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
	//					hero
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
	var girls = ['url(img/hero/girls/girl.png)','url(img/hero/girls/girl-2.png)'];
		var girlsHeight = [850,551];
		var girlsWidth  = [499,459];
		var boys = ['url(img/hero/girls/boy.png)'];
		var boysHeight = [552];
		var boysWidth  = [362];
		var hero = document.getElementById('hero');
		hero.style.left = "calc(50% - 250px)";
		// socket
		var socket = io('127.0.0.1:3002');
		nameHero = getCookie("nameHero");
		socket.emit('userConnetion', userCookie, nameHero);
		socket.on('userRoom', function(userRoom){
			document.cookie = "userRoom="+ userRoom;
		})
		socket.on('background', function(backgroundId){
			body.style.backgroundImage = background[backgroundId];
		})
			dialogWindow = document.querySelector('#dialog-window-message');
			roomUser = getCookie("userRoom");
			socket.on('heroStart', function(){
				socket.emit('hero', userCookie, roomUser);
			})
			socket.on('hero', function(nameHeroInterlocutor){
				dialogWindow.textContent = "Вы прогуливались и случайно наткнулись на персонажа: " + nameHeroInterlocutor;
				switch(nameHeroInterlocutor) {
				case "Мику":
					hero.style.backgroundImage = girls[0];
					hero.style.height = girlsHeight[0] + "px";
					hero.style.width = girlsWidth[0] + "px";
					break;
				case "Акамэ":
					hero.style.backgroundImage = girls[1];
					hero.style.height = girlsHeight[1] + "px";
					hero.style.width = girlsWidth[1] + "px";
					break;
				case "Саске":
					hero.style.backgroundImage = boys[0];
					hero.style.height = boysHeight[0] + "px";
					hero.style.width = boysWidth[0] + "px";
					break;
				}
				hero.style.display = "block";
				setTimeout(function(){
					hero.style.opacity = "1";
				},4);
			})
			document.querySelector('#answer-button')
			.addEventListener('click', ev => {
				if(textDialog.value != "" && textDialog.value != " " && textDialog.value != "  " && textDialog.value != "  " && textDialog.value != "  "){
				ev.preventDefault();
				let text = document.querySelector('#text-dialog').value;
				roomUser = getCookie("userRoom");
				socket.emit('message', text, nameHero, roomUser);
				}
			})
			socket.on('message', function(data){
				dialogWindow.textContent = data;
				let p = document.createElement('p');
				p.textContent = data;
				p.classList.add('log-window-p');
				document.querySelector('#log-window').appendChild(p);
				var textDialog = document.getElementById('text-dialog');
			})
		answerButton.onclick = function(){
			answer.style.display = "block";
			read.style.display = "none";
			dialogWindowMessage.style.display = "block";
			textDialog.style.display = "none";
			answerButton.style.display = "none";
			textDialog.value = "";
		}
		socket.on('liveRoom', function(){
			document.cookie = "testUserLive=true";
			hero.style.opacity = "0";
				setTimeout(function(){
					hero.style.display = "none";
				},1000);
			setTimeout(function(){
				document.location.href = "/";
			}, 5000);
		})
}
else{
	if(getCookie("testUserLive") == "true"){
		document.location.href = "/";
	}
	else{
		if(getCookie("testUserLive2") != "true"){
			var socket = io('127.0.0.1:3002');
			roomUser = getCookie("userRoom");
			socket.emit('userDisconnection', userCookie, roomUser);
			document.cookie = "testUserLive2=true";
			setTimeout(function(){
				document.location.href = "/";
			}, 1000);
		}
		else{
			document.location.href = "/";
		}
	}
}