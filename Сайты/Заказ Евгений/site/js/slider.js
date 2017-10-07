var modalProjectMin1 = document.getElementsByClassName('modal-project-min')[0];
var modalProjectMin2 = document.getElementsByClassName('modal-project-min')[1];
var modalProjectMin3 = document.getElementsByClassName('modal-project-min')[2];
var modalProjectMin4 = document.getElementsByClassName('modal-project-min')[3];
var modalProjectMin5 = document.getElementsByClassName('modal-project-min')[4];
var modalProjectMin6 = document.getElementsByClassName('modal-project-min')[5];
var modalProjectMax1 = document.getElementsByClassName('modal-project-max')[0];
var modalProjectMax2 = document.getElementsByClassName('modal-project-max')[1];
var modalProjectMax3 = document.getElementsByClassName('modal-project-max')[2];
var modalProjectMax4 = document.getElementsByClassName('modal-project-max')[3];
var modalProjectMax5 = document.getElementsByClassName('modal-project-max')[4];
var modalProjectMax6 = document.getElementsByClassName('modal-project-max')[5];
var modalProjectMaxArray = [modalProjectMax1, modalProjectMax2, modalProjectMax3, modalProjectMax4, modalProjectMax5, modalProjectMax6];
var modalContenerMaxButtonLeft = document.getElementsByClassName('modal__contener-max-button_left')[0];
var modalContenerMaxButtonRight = document.getElementsByClassName('modal__contener-max-button_right')[0];
var modalSliderTest1 = 0;
modalProjectMin1.onclick = function(){
	modalProjectMax1.style.display = 'block';
	modalProjectMax2.style.display = 'none';
	modalProjectMax3.style.display = 'none';
	modalProjectMax4.style.display = 'none';
	modalProjectMax5.style.display = 'none';
	modalProjectMax6.style.display = 'none';
	modalSliderTest1 = 0;
}
modalProjectMin2.onclick = function(){
	modalProjectMax1.style.display = 'none';
	modalProjectMax2.style.display = 'block';
	modalProjectMax3.style.display = 'none';
	modalProjectMax4.style.display = 'none';
	modalProjectMax5.style.display = 'none';
	modalProjectMax6.style.display = 'none';
	modalSliderTest1 = 1;
}
modalProjectMin3.onclick = function(){
	modalProjectMax1.style.display = 'none';
	modalProjectMax2.style.display = 'none';
	modalProjectMax3.style.display = 'block';
	modalProjectMax4.style.display = 'none';
	modalProjectMax5.style.display = 'none';
	modalProjectMax6.style.display = 'none';
	modalSliderTest1 = 2;
}
modalProjectMin4.onclick = function(){
	modalProjectMax1.style.display = 'none';
	modalProjectMax2.style.display = 'none';
	modalProjectMax3.style.display = 'none';
	modalProjectMax4.style.display = 'block';
	modalProjectMax5.style.display = 'none';
	modalProjectMax6.style.display = 'none';
	modalSliderTest1 = 3;
}
modalProjectMin5.onclick = function(){
	modalProjectMax1.style.display = 'none';
	modalProjectMax2.style.display = 'none';
	modalProjectMax3.style.display = 'none';
	modalProjectMax4.style.display = 'none';
	modalProjectMax5.style.display = 'block';
	modalProjectMax6.style.display = 'none';
	modalSliderTest1 = 4;
}
modalProjectMin6.onclick = function(){
	modalProjectMax1.style.display = 'none';
	modalProjectMax2.style.display = 'none';
	modalProjectMax3.style.display = 'none';
	modalProjectMax4.style.display = 'none';
	modalProjectMax5.style.display = 'none';
	modalProjectMax6.style.display = 'block';
	modalSliderTest1 = 5;
}
modalContenerMaxButtonRight.onclick = function(){
	modalProjectMaxArray[modalSliderTest1].style.display = 'none';
	modalSliderTest1++;
	if(modalSliderTest1 >= 6){
		modalSliderTest1 = 0;
	}
	modalProjectMaxArray[modalSliderTest1].style.display = 'block';
}
modalContenerMaxButtonLeft.onclick = function(){
	modalProjectMaxArray[modalSliderTest1].style.display = 'none';
	if(modalSliderTest1 <= 0){
		modalSliderTest1 = 6;
	}
	modalSliderTest1--;
	modalProjectMaxArray[modalSliderTest1].style.display = 'block';
}
modalProjectMax1.onclick = function(){	
	modalProjectMax1.style.display = 'none';
	modalSliderTest1 = 1;
	modalProjectMax2.style.display = 'block';
}
modalProjectMax2.onclick = function(){	
	modalProjectMax2.style.display = 'none';
	modalSliderTest1 = 2;
	modalProjectMax3.style.display = 'block';
}
modalProjectMax3.onclick = function(){	
	modalProjectMax3.style.display = 'none';
	modalSliderTest1 = 3;
	modalProjectMax4.style.display = 'block';
}
modalProjectMax4.onclick = function(){	
	modalProjectMax4.style.display = 'none';
	modalSliderTest1 = 4;
	modalProjectMax5.style.display = 'block';
}
modalProjectMax5.onclick = function(){	
	modalProjectMax5.style.display = 'none';
	modalSliderTest1 = 5;
	modalProjectMax6.style.display = 'block';
}
modalProjectMax6.onclick = function(){	
	modalProjectMax6.style.display = 'none';
	modalSliderTest1 = 0;
	modalProjectMax1.style.display = 'block';
}

