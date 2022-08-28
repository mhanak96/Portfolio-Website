'use strict'
document.querySelectorAll('.cert-list img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-cerf').style.display = 'block';
        document.querySelector('.popup-cerf img').src = image.getAttribute('src');
    }
    
})