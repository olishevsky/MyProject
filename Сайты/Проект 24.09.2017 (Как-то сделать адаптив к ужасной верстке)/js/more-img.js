var adaptiveNoCarousel = document.getElementsByClassName('adaptive-no-carousel')[0];
var createAdaptiveNoCarousel = false;
adaptiveNoCarousel.onclick = function(){
	if(createAdaptiveNoCarousel == false){
		var adaptiveCarouselInnerBlock2 = document.getElementsByClassName('adaptive-carousel-inner-block')[2];
		var adaptiveCarouselInnerBlock3 = document.getElementsByClassName('adaptive-carousel-inner-block')[3];
		var adaptiveCarouselInnerBlock4 = document.getElementsByClassName('adaptive-carousel-inner-block')[4];
		var adaptiveCarouselInnerBlock5 = document.getElementsByClassName('adaptive-carousel-inner-block')[5];
		var adaptiveCarouselInnerBlock6 = document.getElementsByClassName('adaptive-carousel-inner-block')[6];
		var adaptiveCarouselInnerBlock7 = document.getElementsByClassName('adaptive-carousel-inner-block')[7];
		var adaptiveCarouselInnerBlock10 = document.getElementsByClassName('adaptive-carousel-inner-block')[10];
		var adaptiveCarouselInnerBlock11 = document.getElementsByClassName('adaptive-carousel-inner-block')[11];
		var adaptiveCarouselInnerBlock12 = document.getElementsByClassName('adaptive-carousel-inner-block')[12];
		var adaptiveCarouselInnerBlock13 = document.getElementsByClassName('adaptive-carousel-inner-block')[13];
		var adaptiveCarouselInnerBlock14 = document.getElementsByClassName('adaptive-carousel-inner-block')[14];
		var adaptiveCarouselInnerBlock15 = document.getElementsByClassName('adaptive-carousel-inner-block')[15];
		adaptiveCarouselInnerBlock2.style.display = "block";
		adaptiveCarouselInnerBlock3.style.display = "block";
		adaptiveCarouselInnerBlock4.style.display = "block";
		adaptiveCarouselInnerBlock5.style.display = "block";
		adaptiveCarouselInnerBlock6.style.display = "block";
		adaptiveCarouselInnerBlock7.style.display = "block";
		adaptiveCarouselInnerBlock10.style.display = "block";
		adaptiveCarouselInnerBlock11.style.display = "block";
		adaptiveCarouselInnerBlock12.style.display = "block";
		adaptiveCarouselInnerBlock13.style.display = "block";
		adaptiveCarouselInnerBlock14.style.display = "block";
		adaptiveCarouselInnerBlock15.style.display = "block";
		adaptiveNoCarousel.style.display = "none";
		createAdaptiveNoCarousel = true;
	}
}