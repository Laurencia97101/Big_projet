/* JavaScript pour le Carrousel Simple */

import { menuBurger } from "../js/main.js";
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-container');
    const totalSlides = slides.children.length;
    currentIndex = (index + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Auto Slide (optionnel)
setInterval(() => {
    nextSlide();
}, 3000);
