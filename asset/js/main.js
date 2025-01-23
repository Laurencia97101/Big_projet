// script.js


exportdocument.addEventListener("DOMContentLoaded", function() {
    const menuBurger = document.getElementById('menu-burger');
    const navLinks = document.getElementById('nav-links');

    menuBurger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
