var block8ContainerImg1 = document.getElementsByClassName('block-8__container-img')[0];
var block8ContainerImg2 = document.getElementsByClassName('block-8__container-img')[1];
var block8ContainerImg3 = document.getElementsByClassName('block-8__container-img')[2];
var block8ContainerImg4 = document.getElementsByClassName('block-8__container-img')[3];
var block8Img1 = document.getElementsByClassName('block-8__img')[0];
var block8Img2 = document.getElementsByClassName('block-8__img')[1];
var block8Img3 = document.getElementsByClassName('block-8__img')[2];
var block8Img4 = document.getElementsByClassName('block-8__img')[3];
block8ContainerImg1.onclick = function(){
	block8Img1.style.display = 'block';
	block8Img2.style.display = 'none';
	block8Img3.style.display = 'none';
	block8Img4.style.display = 'none';
}
block8ContainerImg2.onclick = function(){
	block8Img1.style.display = 'none';
	block8Img2.style.display = 'block';
	block8Img3.style.display = 'none';
	block8Img4.style.display = 'none';
}
block8ContainerImg3.onclick = function(){
	block8Img1.style.display = 'none';
	block8Img2.style.display = 'none';
	block8Img3.style.display = 'block';
	block8Img4.style.display = 'none';
}
block8ContainerImg4.onclick = function(){
	block8Img1.style.display = 'none';
	block8Img2.style.display = 'none';
	block8Img3.style.display = 'none';
	block8Img4.style.display = 'block';
}