var reviewElement1 = document.getElementsByClassName("review__element")[0];
var reviewContainerSwitchLeft = document.getElementsByClassName("review__container-switch")[0];
var reviewContainerSwitchRight = document.getElementsByClassName("review__container-switch")[1];
var reviewPhotoCircleCircle1 = document.getElementsByClassName("review__photo-circle-circle")[0];
var reviewPhotoCircleCircle2 = document.getElementsByClassName("review__photo-circle-circle")[1];
var reviewPhotoCircleCircle3 = document.getElementsByClassName("review__photo-circle-circle")[2];
var review = 1;
reviewPhotoCircleCircle1.onclick = function(){
	window.open('https://vk.com/minaevnikita');
}

reviewPhotoCircleCircle2.onclick = function(){
	window.open('https://vk.com/id260522705');
}

reviewPhotoCircleCircle3.onclick = function(){
	window.open('https://vk.com/id260589259');
}


	var switchMargin1 = "0";
	var switchMargin2 = "-686px";
	var switchMargin3 = "-1370px";
/*else if(document.documentElement.clientWidth >= 320 ){
	var switchMargin1 = "15px";
	var switchMargin2 = "-315px";
	var switchMargin3 = "-635px";
}
else{
	var switchMargin1 = "40px";
	var switchMargin2 = "-250px";
	var switchMargin3 = "-540px";
}*/

reviewContainerSwitchRight.onclick = function(){
	review++;
	if(review > 3) {
		review = 1;
	}
	if(review == 1){
		reviewElement1.style.marginLeft = switchMargin1;
	}
	if(review == 2){
		reviewElement1.style.marginLeft = switchMargin2;
	}
	if(review == 3){
		reviewElement1.style.marginLeft = switchMargin3;
	}
}

reviewContainerSwitchLeft.onclick = function(){
	review--;
	if(review < 1) {
		review = 3;
	}
	if(review == 1){
		reviewElement1.style.marginLeft = switchMargin1;
	}
	if(review == 2){
		reviewElement1.style.marginLeft = switchMargin2;
	}
	if(review == 3){
	reviewElement1.style.marginLeft = switchMargin3;
	}
}