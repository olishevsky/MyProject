var block4Button1 = document.getElementsByClassName('block-4__button')[0];
var block4Button2 = document.getElementsByClassName('block-4__button')[1];
var block4ZoomImg1 = document.getElementsByClassName('block-4__zoom')[0];
var block4ZoomImg2 = document.getElementsByClassName('block-4__zoom')[1];
var block4ZoomImgArray = [block4ZoomImg1, block4ZoomImg2];
var block4Test = 0;
var block4AnimationActive = false;
block4Button1.onclick = function(){
	if(block4AnimationActive == false){
		block4AnimationActive = true;
		if(block4Test == 0){
			block4ZoomImgArray[block4Test].style.opacity = "0";
			block4ZoomImgArray[block4Test].style.display = "none";
			block4Test = 1;
			block4ZoomImgArray[block4Test].style.display = "block";
			setTimeout(function(){
				block4ZoomImgArray[block4Test].style.opacity = "1";
			}, 4);
			setTimeout(function(){
				block4ZoomImgArray[block4Test - 1].style.display = "none";
				block4AnimationActive = false;
			}, 250)
		}
		else{
			block4ZoomImgArray[block4Test].style.opacity = "0";
			block4ZoomImgArray[block4Test].style.display = "none";
			block4Test--;
			block4ZoomImgArray[block4Test].style.display = "block";
			setTimeout(function(){
				block4ZoomImgArray[block4Test].style.opacity = "1";
			}, 4);
			setTimeout(function(){
				block4ZoomImgArray[block4Test + 1].style.display = "none";
				block4AnimationActive = false;
			}, 250)
		}
	}
}

block4Button2.onclick = function(){
	if(block4AnimationActive == false){
		block4AnimationActive = true;
		if(block4Test == 1){
			block4ZoomImgArray[block4Test].style.opacity = "0";
			block4ZoomImgArray[block4Test].style.display = "none";
			block4Test = 0;
			block4ZoomImgArray[block4Test].style.display = "block";
			setTimeout(function(){
				block4ZoomImgArray[block4Test].style.opacity = "1";
			}, 4);
			setTimeout(function(){
				block4ZoomImgArray[block4Test + 1].style.display = "none";
				block4AnimationActive = false;
			}, 250)
		}
		else{
			block4ZoomImgArray[block4Test].style.opacity = "0";
			block4ZoomImgArray[block4Test].style.display = "none";
			block4Test++;
			block4ZoomImgArray[block4Test].style.display = "block";
			setTimeout(function(){
				block4ZoomImgArray[block4Test].style.opacity = "1";
			}, 4);
			setTimeout(function(){
				block4ZoomImgArray[block4Test - 1].style.display = "none";
				block4AnimationActive = false;
			}, 250)
		}
	}
}