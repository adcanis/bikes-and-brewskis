
const logo = document.querySelector('.logo');

const aboutBtn = document.querySelector('#aboutNav');
const eventBtn = document.querySelector('#eventNav');
const photosBtn = document.querySelector('#photosNav');
const contactBtn = document.querySelector('#contactNav');
const toTop = document.querySelector('#topBtn');

toTop.addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
})