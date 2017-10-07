var stunden1 = document.getElementsByClassName('block-1__mask-order-timer-time-element')[0];
var minuten1 = document.getElementsByClassName('block-1__mask-order-timer-time-element')[1];
var sekunden1 = document.getElementsByClassName('block-1__mask-order-timer-time-element')[2];
var stunden2 = document.getElementsByClassName('block-1__mask-order-timer-time-element')[3];
var minuten2 = document.getElementsByClassName('block-1__mask-order-timer-time-element')[4];
var sekunden2 = document.getElementsByClassName('block-1__mask-order-timer-time-element')[5];
Data = new Date();
var stunden = 23 - Data.getHours();
var minuten = 59 - Data.getMinutes();
var sekunden = 59 - Data.getSeconds();
if(stunden < 10){
	stunden1.innerHTML = '0' + stunden;
	stunden2.innerHTML = '0' + stunden;
}
else{
	stunden1.innerHTML = stunden;
	stunden2.innerHTML = stunden;
}
if(minuten < 10){
	minuten1.innerHTML = '0' + minuten;
	minuten2.innerHTML = '0' + minuten;
}
else{
	minuten1.innerHTML = minuten;
	minuten2.innerHTML = minuten;
}
if(sekunden < 10){
	sekunden1.innerHTML = '0' + sekunden;
	sekunden2.innerHTML = '0' + sekunden;
}
else{
	sekunden1.innerHTML = sekunden;
	sekunden2.innerHTML = sekunden;
}
setInterval(function(){
	if(sekunden >= 1){
		sekunden--;
		if(sekunden < 10){
			sekunden1.innerHTML = '0' + sekunden;
			sekunden2.innerHTML = '0' + sekunden;
		}
		else{
			sekunden1.innerHTML = sekunden;
			sekunden2.innerHTML = sekunden;
		}
	}
	else{
		if(minuten >= 1){
			if(minuten <= 10){
				minuten--;
				minuten1.innerHTML = '0' + minuten;
				minuten2.innerHTML = '0' + minuten;
			}
			else{
				minuten--;
				minuten1.innerHTML = minuten;
				minuten2.innerHTML = minuten;
			}
			sekunden = 59;
		}
		else{
			if(stunden < 10){
				stunden--;
				stunden1.innerHTML = '0' + stunden;
				stunden2.innerHTML = '0' + stunden;
				minuten = 59;
			}
			else{
				stunden--;
				stunden1.innerHTML = stunden;
				stunden2.innerHTML = stunden;
				minuten = 59;
			}
		}
	}
}, 1000);