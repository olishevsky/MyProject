document.cookie = "testUser=false";
document.cookie = "testUserLive=false";
document.cookie = "testUserLive2=false";
var animationPosition = document.getElementById('animation-position');
var loadingLeft = document.getElementById('loading-left');
var loadingRight = document.getElementById('loading-right');
var loading = document.getElementById('loading');
var menuTest = false;
window.onload= function(){
	setTimeout(function(){
		loadingLeft.style.left = "-50%";
		loadingRight.style.right = "-50%";
		animationPosition.style.display = 'none';
		setTimeout(function(){
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
var сharacterDescription = document.getElementById('сharacter-description');
var сharacterDescriptionH = document.getElementById('сharacter-description-h');
var сharacterDescriptionP1 = document.getElementById('сharacter-description-p1');
var сharacterDescriptionP2 = document.getElementById('сharacter-description-p2');
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
menuBoy.onclick = function(){
		menuTest = true;
		сharacterDescription.style.display = "block";
		setTimeout(function(){
			сharacterDescription.style.opacity = "1";
		}, 4);
	if(menuBoy.querySelector("input[type='radio'][name='boy']:checked").value == '1'){
		сharacterDescriptionH.innerHTML = "Кирито";
		сharacterDescriptionP1.innerHTML = "Начал игру Sword Art Online в четырнадцатилетнем возрасте. Благодаря тому, что Кирито участвовал в бета-тестировании SAO, знанию уже пройденных им уровней Айнкрада, ему удалось получить начальное преимущество перед другими игроками в развитии навыков своего персонажа, а позднее, уже благодаря собственному уму и настойчивости, стать одним из наиболее высокоуровневых игроков.";
		сharacterDescriptionP2.innerHTML = "В игре предпочитает действовать в одиночку, лишь изредка присоединяясь к партиям других игроков, например, для уничтожения боссов уровня. После встречи с рапиристкой Асуной, которая стала его возлюбленной, а позднее — женой, присоединяется к её игровой Гильдии — Рыцари Крови.";
	}
	if(menuBoy.querySelector("input[type='radio'][name='boy']:checked").value == '2'){
		сharacterDescriptionH.innerHTML = "Саске Учиха";
		сharacterDescriptionP1.innerHTML = "Шиноби Конохагакуре и один из последних живущих членов клана Учиха. После того, как его старший брат Итачи вырезал весь их клан, Саске поставил перед собой жизненную цель отомстить за клан и семью, убив самого Итачи. Он попадает в Команду 7, когда становится ниндзя, и благодаря состязаниям со своим соперником и лучшим другом, Наруто Узумаки, начинает оттачивать свои навыки.";
		сharacterDescriptionP2.innerHTML = "Недовольный своим медленным прогрессом, он покидает Коноху, чтобы получить больше силы, необходимой для свершения его мести...";
	}
}
menuGerl.onclick = function(){
	menuTest = true;
	сharacterDescription.style.display = "block";
	setTimeout(function(){
		сharacterDescription.style.opacity = "1";
	}, 4);
	if(menuGerl.querySelector("input[type='radio'][name='gerl']:checked").value == '1'){
		сharacterDescriptionH.innerHTML = "Эмилия";
		сharacterDescriptionP1.innerHTML = "Главная героиня, сереброволосая полуэльфийка, самый любимый персонаж автора в серии. Одна из кандидаток в королевы, владеет эмблемой, подтверждающей это. В первой временной линии спасает Субару от хулиганов, тогда же называется ему именем ведьмы зависти — «Сателла».";
		сharacterDescriptionP2.innerHTML = "Из-за внешней схожести с ней часто подвергается пренебрежительному отношению. Владеет магией воды, огня, воздуха и земли. К Субару относится как к непослушному ребёнку, о котором необходимо заботиться, однако после его признания в любви к ней, Эмилия начинает развивать глубокую привязанность и симпатию к Субару.";
	}
	if(menuGerl.querySelector("input[type='radio'][name='gerl']:checked").value == '2'){
		сharacterDescriptionH.innerHTML = "Мегумин";
		сharacterDescriptionP1.innerHTML = "Четырнадцатилетняя архиволшебница из расы багровых демонов, одержимая магией взрывов. Способна сотворить взрыв огромной силы, который расходует ее суточный запас сил.";
		сharacterDescriptionP2.innerHTML = "Учить какие-либо менее выматывающие заклинания Мэгумин не хочет, а потому толку в бою от нее не много. Так как в другие группы ее не брали, в итоге она присоединилась к группе Сато. Тем не менее, благодаря высокому урону, «Взрыв» на голову превосходит другие заклинания магов.";
	}
}
begin2.onclick = function(){
	if(menuTest == true){
		menu.style.opacity = "0";
		сharacterDescription.style.opacity = "0";
		setTimeout(function(){
			menu.style.display = "none";
			сharacterDescription.style.display = "none";
			loading.style.display = "block";
		}, 250);
		setTimeout(function(){
			loadingRight.style.right = "0";
			loadingLeft.style.left = "0";
		}, 500);
		setTimeout(function(){
			document.location.href = "/lobby.html";
		}, 1500);
		nameHero = сharacterDescriptionH.innerHTML;
		document.cookie = "nameHero="+ nameHero;
		var newDate = Date.parse(new Date());
		function getRandomArbitrary(min, max) {
		  return Math.random() * (max - min) + min;
		}
		document.cookie = "userId=" + getRandomArbitrary(0, 999999) + nameHero + newDate;
	}
}
var socket = io('127.0.0.1:3002');
infoDivOnline = document.getElementById('info-div-online');
socket.emit("userOnline");
socket.on('userOnline', function(usersOnline){
	infoDivOnline.innerHTML = usersOnline + " online";
})
