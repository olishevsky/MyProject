var sliderButtonLeft = document.getElementsByClassName("slider__button")[0];
var sliderButtonRight = document.getElementsByClassName("slider__button")[1];
var slide1 = document.getElementsByClassName("slider__container-element")[0];
var slide2 = document.getElementsByClassName("slider__container-element")[1];
var slide3 = document.getElementsByClassName("slider__container-element")[2];
var slide4 = document.getElementsByClassName("slider__container-element")[3];
var slide5 = document.getElementsByClassName("slider__container-element")[4];
var sliderArray = [slide1, slide2, slide3, slide4, slide5];
var slideSwitch1 = document.getElementsByClassName("slider__container-switch")[0];
var slideSwitch2 = document.getElementsByClassName("slider__container-switch")[1];
var slideSwitch3 = document.getElementsByClassName("slider__container-switch")[2];
var slideSwitch4 = document.getElementsByClassName("slider__container-switch")[3];
var slideSwitch5 = document.getElementsByClassName("slider__container-switch")[4];
var sliderSwitch = [slideSwitch1, slideSwitch2, slideSwitch3, slideSwitch4, slideSwitch5];
var sliderContainerText = document.getElementsByClassName("slider__container-text")[0];
var sliderContainerTextArray = ["каратэ", "кэндо", "кюдо", "чайную церемонию", "цигун"];
var slide = 0;

function onclickSlide(slideSwitchLocal, slideNumber){
	slideSwitchLocal.onclick = function(){
	sliderArray[slide].style.display = "none";
	sliderSwitch[slide].style.color = "#fff";
	sliderSwitch[slide].style.background = "none";
	slide = slideNumber;
	sliderSwitch[slide].style.color = "#000";
	sliderSwitch[slide].style.background = "#fff";
	sliderArray[slide].style.display = "block";
}

}

sliderButtonRight.onclick = function(){
	sliderArray[slide].style.display = "none";
	sliderSwitch[slide].style.color = "#fff";
	sliderSwitch[slide].style.background = "none";
	slide++;
	if(slide > 4){
		slide = 0;
	}
	sliderSwitch[slide].style.color = "#000";
	sliderSwitch[slide].style.background = "#fff";
	sliderArray[slide].style.display = "block";
	sliderContainerText.innerHTML = "Приходите к нам на " + sliderContainerTextArray[slide];
}

sliderButtonLeft.onclick = function(){
	sliderArray[slide].style.display = "none";
	sliderSwitch[slide].style.color = "#fff";
	sliderSwitch[slide].style.background = "none";
	slide--;
	if(slide < 0){
		slide = 4;
	}
	sliderSwitch[slide].style.color = "#000";
	sliderSwitch[slide].style.background = "#fff";
	sliderArray[slide].style.display = "block";
	sliderContainerText.innerHTML = "Приходите к нам на " + sliderContainerTextArray[slide];

}

onclickSlide(slideSwitch1, 0);
onclickSlide(slideSwitch2, 1);
onclickSlide(slideSwitch3, 2);
onclickSlide(slideSwitch4, 3);
onclickSlide(slideSwitch5, 4);