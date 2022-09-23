const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.menu-items');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})