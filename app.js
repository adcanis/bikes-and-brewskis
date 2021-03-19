
const logo = document.querySelector('.logo');

const aboutBtn = document.querySelector('#aboutNav');
const eventBtn = document.querySelector('#eventNav');
const photosBtn = document.querySelector('#photosNav');
const contactBtn = document.querySelector('#contactNav');
const toTop = document.querySelector('#topBtn');
const eventBtnBig = document.querySelector('#eventBtnsBig');
const facebookBtn = document.querySelector('#facebook');
const instagramBtn = document.querySelector('#instagram');
const twitterBtn = document.querySelector('#twitter');
const submitBtn = document.querySelector('#submit');

toTop.addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
})

eventBtnBig.addEventListener('click', function () {
    alert('Due to Covid-19, we are trying to arrange new events for the calander year. Thank you for your patiance');
})

submitBtn.addEventListener('click', function () {
    alert('Thank you for your message');
    document.getElementById('contactMSG').reset();
})
