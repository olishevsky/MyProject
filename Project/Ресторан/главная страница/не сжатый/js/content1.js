var content1Show = document.getElementById("content-1-show");
var content1 = document.getElementById("content-1");
var content1TextShodow = document.getElementById("content-1-text-shodow");
var triangleButton = document.getElementById("triangle-button");
var content1ShowI = false;
var width = document.documentElement.clientWidth;
var temp = 1;

content1Show.onclick = function(){
	if(width >= 1184){
		if(content1ShowI == false){
			content1.style.height = '1300px';
			content1TextShodow.style.display = 'flex';
			triangleButton.style.transform = 'rotate(90deg)';
			content1ShowI = true;
		}
		else{
			content1.style.height = '905px';
			content1TextShodow.style.display = 'none';
			triangleButton.style.transform = 'rotate(0deg)';
			content1ShowI = false;
		}
	}
	else{
		if(content1ShowI == false){
			if(temp == 1){
				content1.style.height = '2000px';
			}
			else{
				content1.style.height = '1400px';
			}
			content1TextShodow.style.display = 'flex';
			triangleButton.style.transform = 'rotate(90deg)';
			content1ShowI = true;
		}
		else{
			
			if(temp == 1){
				content1.style.height = '1500px';
			}
			else{
				content1.style.height = '1000px';
			}
			content1TextShodow.style.display = 'none';
			triangleButton.style.transform = 'rotate(0deg)';
			content1ShowI = false;
		}
	}
}

var content1SwitchId1 = document.getElementById("content-1-switch-id1");
var content1SwitchId2 = document.getElementById("content-1-switch-id2");
var content1SwitchId3 = document.getElementById("content-1-switch-id3");
var content1Img1 = document.getElementById("content-1-img1");
var content1Img2 = document.getElementById("content-1-img2");
var content1Img3 = document.getElementById("content-1-img3");
var content1SliderMobile = document.getElementById("content-1-slider-mobile");
var content1Img1Mobile = document.getElementById("content-1-img1-mobile");
var content1Img2Mobile = document.getElementById("content-1-img2-mobile");
var content1Img3Mobile = document.getElementById("content-1-img3-mobile");
var content1Img4Mobile = document.getElementById("content-1-img4-mobile");
if(width >= 1184){
	content1SwitchId1.onclick = function(){
		content1Img1.style.opacity = '0';
		content1Img2.style.opacity = '0';
		content1Img3.style.opacity = '0';
		content1Img1.style.display = "block";
		setTimeout(function() {
			content1Img1.style.opacity = '1';	
			content1Img2.style.display = "none";
			content1Img3.style.display = "none";
			content1SwitchId1.style.background = "#9c5245"
			content1SwitchId2.style.background = "white"
			content1SwitchId3.style.background = "white"
			content1SwitchId1.style.color = "white";
			content1SwitchId2.style.color = "black";
			content1SwitchId3.style.color = "black";
		}, 4);
	}
	content1SwitchId2.onclick = function(){
		content1Img1.style.opacity = '0';
		content1Img2.style.opacity = '0';
		content1Img3.style.opacity = '0';
		content1Img2.style.display = "block";
		setTimeout(function() {
			content1Img2.style.opacity = '1';
			content1Img1.style.display = "none";
			content1Img3.style.display = "none";
			content1SwitchId1.style.background = "white"
			content1SwitchId2.style.background = "#9c5245"
			content1SwitchId3.style.background = "white"
			content1SwitchId1.style.color = "black";
			content1SwitchId2.style.color = "white";
			content1SwitchId3.style.color = "black";
		}, 4);
	}
	content1SwitchId3.onclick = function(){
		content1Img1.style.opacity = '0';
		content1Img2.style.opacity = '0';
		content1Img3.style.opacity = '0';
		content1Img3.style.display = "block";
		setTimeout(function() {
			content1Img3.style.opacity = '1';
			content1Img1.style.display = "none";
			content1Img2.style.display = "none";
			content1SwitchId1.style.background = "white"
			content1SwitchId2.style.background = "white"
			content1SwitchId3.style.background = "#9c5245"
			content1SwitchId1.style.color = "black";
			content1SwitchId2.style.color = "black";
			content1SwitchId3.style.color = "white";
		}, 4);
	}
}
else{
	content1SwitchId1.onclick = function(){
		temp = 1;
		content1.style.height = '1500px';
		content1SliderMobile.style.height = '958px';
		content1Img1Mobile.style.opacity = '0';
		content1Img2Mobile.style.opacity = '0';
		content1Img3Mobile.style.opacity = '0';
		content1Img4Mobile.style.opacity = '0';
		content1Img1Mobile.style.display = "block";
		content1Img2Mobile.style.display = "block";
		setTimeout(function() {
			content1Img1Mobile.style.opacity = '1';
			content1Img2Mobile.style.opacity = '1';
			content1Img3Mobile.style.display = "none";
			content1Img4Mobile.style.display = "none";
			content1SwitchId1.style.background = "#9c5245"
			content1SwitchId2.style.background = "white"
			content1SwitchId3.style.background = "white"
			content1SwitchId1.style.color = "white";
			content1SwitchId2.style.color = "black";
			content1SwitchId3.style.color = "black";
		}, 4);
	}
	content1SwitchId2.onclick = function(){
		temp = 2;
		content1.style.height = '1000px';
		content1SliderMobile.style.height = '300px';
		content1Img1Mobile.style.opacity = '0';
		content1Img2Mobile.style.opacity = '0';
		content1Img3Mobile.style.opacity = '0';
		content1Img4Mobile.style.opacity = '0';
		content1Img3Mobile.style.display = "block";
		setTimeout(function() {
			content1Img3Mobile.style.opacity = '1';
			content1Img1Mobile.style.display = "none";
			content1Img2Mobile.style.display = "none";
			content1Img4Mobile.style.display = "none";
			content1SwitchId1.style.background = "white"
			content1SwitchId2.style.background = "#9c5245"
			content1SwitchId3.style.background = "white"
			content1SwitchId1.style.color = "black";
			content1SwitchId2.style.color = "white";
			content1SwitchId3.style.color = "black";
		}, 4);
	}
	content1SwitchId3.onclick = function(){
		temp = 3;
		content1.style.height = '1000px';
		content1SliderMobile.style.height = '300px';
		content1Img1Mobile.style.opacity = '0';
		content1Img2Mobile.style.opacity = '0';
		content1Img3Mobile.style.opacity = '0';
		content1Img4Mobile.style.opacity = '0';
		content1Img4Mobile.style.display = "block";
		setTimeout(function() {
			content1Img4Mobile.style.opacity = '1';
			content1Img1Mobile.style.display = "none";
			content1Img2Mobile.style.display = "none";
			content1Img3Mobile.style.display = "none";
			content1SwitchId1.style.background = "white"
			content1SwitchId2.style.background = "white"
			content1SwitchId3.style.background = "#9c5245"
			content1SwitchId1.style.color = "black";
			content1SwitchId2.style.color = "black";
			content1SwitchId3.style.color = "white";
		}, 4);
	}
}