'use strict'

const harv = document.querySelector('.harv');
const harvi = document.querySelector('.harv-img');

const skp = document.querySelector('.response');
const skpi = document.querySelector('.skp-img');

const sgs = document.querySelector('.ui');
const sgsi = document.querySelector('.ui-img');

const exitBtn = document.querySelector('.close-btn');

harv.addEventListener('click', function(){
    document.querySelector('.popup-cerf').style.display = 'block';
    document.querySelector('.popup-cerf img').src = harvi.getAttribute('src');
});

skp.addEventListener('click', function(){
    document.querySelector('.popup-cerf').style.display = 'block';
    document.querySelector('.popup-cerf img').src = skpi.getAttribute('src');
});

sgs.addEventListener('click', function(){
    document.querySelector('.popup-cerf').style.display = 'block';
    document.querySelector('.popup-cerf img').src = sgsi.getAttribute('src');
});

exitBtn.addEventListener('click', function(){
    document.querySelector('.popup-cerf').style.display = 'none';
})

