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
		сharacterDescription.style.display = "block";
		setTimeout(function(){
			сharacterDescription.style.opacity = "1";
		}, 4);
	if(menuBoy.querySelector("input[type='radio'][name='boy']:checked").value == '1'){
		сharacterDescriptionH.innerHTML = "Гоку";
		сharacterDescriptionP1.innerHTML = "Гоку — главный герой вселенной Жемчуг дракона, созданной Акирой Ториямой; мальчик с обезьяньим хвостом.";
		сharacterDescriptionP2.innerHTML = "Сон Гоку учится боевым искусствам. Характерной чертой его внешнего вида являются черные волосы, стоящие торчком. Он обладает сверхъестественной силой и, как выясняется по ходу истории, происходит от вымышленной внеземной расы сайянов. С помощью долгих тренировок он научился многим сильным приёмам, а также приобрёл сверхскорость[3], сверхбыстрые рефлексы, способность летать с помощью энергии ки и телепортироваться техникой Сюнкан Идо";
	}
	if(menuBoy.querySelector("input[type='radio'][name='boy']:checked").value == '2'){
		сharacterDescriptionH.innerHTML = "Саске";
		сharacterDescriptionP1.innerHTML = "Учиха - шиноби Конохагакуре и один из последних живущих членов клана Учиха. После того, как его старший брат Итачи вырезал весь их клан, Саске поставил перед собой жизненную цель отомстить за клан и семью, убив самого Итачи.";
		сharacterDescriptionP2.innerHTML = "Он попадает в Команду 7, когда становится ниндзя, и благодаря состязаниям со своим соперником и лучшим другом, Наруто Узумаки, начинает оттачивать свои навыки. Недовольный своим медленным прогрессом, он покидает Коноху, чтобы получить больше силы, необходимой для свершения его мести.";
	}
}
menuGerl.onclick = function(){
	сharacterDescription.style.display = "block";
	setTimeout(function(){
		сharacterDescription.style.opacity = "1";
	}, 4);
	if(menuGerl.querySelector("input[type='radio'][name='gerl']:checked").value == '1'){
		сharacterDescriptionH.innerHTML = "Мику";
		сharacterDescriptionP1.innerHTML = "Японская виртуальная певица, созданная компанией Crypton Future Media 31 августа 2007 года. Для синтеза её голоса используется технология семплирования голоса живой певицы с использованием программы Vocaloid компании Yamaha Corporation. Голосовым донором послужила японская сейю Саки Фудзита. ";
		сharacterDescriptionP2.innerHTML = "Оригинальный образ был создан японским иллюстратором KEI Garou, также работавшим над внешностью других вокалоидов для Crypton Future Media. Диски с песнями Мику завоевывали первые позиции в японских чартах. Она является самым известным и популярным вокалоидом и стала поп-идолом.";
	}
	if(menuGerl.querySelector("input[type='radio'][name='gerl']:checked").value == '2'){
		сharacterDescriptionH.innerHTML = "Акамэ";
		сharacterDescriptionP1.innerHTML = "Состоит в «Ночном Рейде». Со стороны кажется, что Акамэ серьёзная, хладнокровная и бесчувственная девушка, но на самом деле она очень дорожит своими товарищами и заботится о них. Однако в бою не проявляет никаких эмоций, не даёт пощады врагу. В прошлом Акамэ и её младшую сестру Куромэ продали родители, и их купила Империя для обучения в качестве элитных убийц.";
		сharacterDescriptionP2.innerHTML = "Она была на службе у Империи и видела, насколько сильно та прогнила. Надженда убедила её присоединиться к революции. Тэйгу Акамэ — Убийца одним ударом: «Мурасамэ». Этот меч пропитан смертоносным ядом, от которого нет противоядия.";
	}
}
begin2.onclick = function(){
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