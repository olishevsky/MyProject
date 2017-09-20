var topButton = document.getElementsByClassName('top-button')[0];

window.onscroll = function(){
	var scrolled = window.pageYOffset;
	if(scrolled >= 200){
		topButton.style.display = "flex";
		setTimeout(function(){
			topButton.style.opacity = "1";
		},4);
	}
	else{
		topButton.style.opacity = "0";
		setTimeout(function(){
			topButton.style.display = "none";
		}, 250);
	}
}

topButton.onclick = function(){
	var scrolled = window.pageYOffset || scrollTop;
	s1 = setInterval(function(){
		if(scrolled > 20){
			scrolled = scrolled - 20;
			scroll(0,scrolled);
		}
		else{
			scroll(0,0);
			clearTimeout(s1);
		}
	}, 4);
}