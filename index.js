const burgerMenu = document.querySelector('.burger-menu');
const headerNav = document.querySelector('.header-nav');

burgerMenu.addEventListener('click', () => {
    headerNav.classList.toggle('visible');
});