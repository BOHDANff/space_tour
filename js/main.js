//@prepros-append astronaut_swipe.js
const astro = document.querySelector('.swiping__astro');
const astroWrap = document.querySelector('.swiping__astro-wrap');
const button = document.querySelector('.addit_services__btn--1');

// let hoverOnAnotherObj = function(hoverObjClass, actionObjClass, actionClass) {
// 	hoverObjClass.addEventListener('mouseover', actionObjClass.classList.add('${actionClass}'));
// 	hoverObjClass.addEventListener()
// }

function astroSwipAdd() {
	astro.classList.add('swiping__astro--active');
	astroWrap.classList.add('swiping__astro-wrap--active');
}

function astroSwipRemove() {
	astro.classList.remove('swiping__astro--active');
	astroWrap.classList.remove('swiping__astro-wrap--active');}

button.addEventListener('mouseover', astroSwipAdd);
button.addEventListener('mouseout', astroSwipRemove);
