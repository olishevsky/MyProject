var hero1 = document.getElementById('hero-1');
var hero2 = document.getElementById('hero-2');
var hero3 = document.getElementById('hero-3');
var hero4 = document.getElementById('hero-4');
var button1 = document.getElementById('button-1');
var button2 = document.getElementById('button-2');
var button3 = document.getElementById('button-3');
var button4 = document.getElementById('button-4');
var heroTest = true;
button1.onclick = function(){
	if(heroTest == true){
		heroTest = false;
		hero1.style.display = "block";
		setTimeout(function(){
			hero1.style.opacity = "1";
			hero2.style.opacity = "0";
			hero3.style.opacity = "0";
			hero4.style.opacity = "0";
		}, 4);
		setTimeout(function(){
			heroTest = true;
			hero2.style.display = "none";
			hero3.style.display = "none";
			hero4.style.display = "none";
		}, 500);
	}
}

button2.onclick = function(){
	if(heroTest == true){
		heroTest = false;
		hero2.style.display = "block";
		new Audio('music/voice-1.mp3').play();
		setTimeout(function(){
			hero2.style.opacity = "1";
			hero1.style.opacity = "0";
			hero3.style.opacity = "0";
			hero4.style.opacity = "0";
		}, 4);
		setTimeout(function(){
			heroTest = true;
			hero1.style.display = "none";
			hero3.style.display = "none";
			hero4.style.display = "none";
		}, 500);
	}
}

button3.onclick = function(){
	if(heroTest == true){
		heroTest = false;
		hero3.style.display = "block";
		setTimeout(function(){
			hero3.style.opacity = "1";
			hero1.style.opacity = "0";
			hero2.style.opacity = "0";
			hero4.style.opacity = "0";
		}, 4);
		setTimeout(function(){
			heroTest = true;
			hero1.style.display = "none";
			hero2.style.display = "none";
			hero4.style.display = "none";
		}, 500);
	}
}


button4.onclick = function(){
	if(heroTest == true){
		heroTest = false;
		hero4.style.display = "block";
		setTimeout(function(){
			hero4.style.opacity = "1";
			hero1.style.opacity = "0";
			hero2.style.opacity = "0";
			hero3.style.opacity = "0";
		}, 4);
		setTimeout(function(){
			heroTest = true;
			hero1.style.display = "none";
			hero2.style.display = "none";
			hero3.style.display = "none";
		}, 500);
	}
}