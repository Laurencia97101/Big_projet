document.addEventListener("DOMContentLoaded", function() {
    const menuBurger = document.getElementById('menu-burger');
    const navLinks = document.getElementById('nav-links');

    menuBurger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

const letters = document.querySelectorAll('.neon-text span');
letters.forEach((letter, index) => {
  letter.style.setProperty('--i', index);
});

// Variable pour stocker l'index de la diapositive actuellement affichée
let currentIndex = 0;

// Fonction pour afficher une diapositive spécifique
function showSlide(index) {
  // Sélectionne l'élément contenant les diapositives (.carousel-container)
  const slides = document.querySelector('.carousel-container');

  // Sélectionne tous les éléments de navigation par points (.dot)
  const dots = document.querySelectorAll('.dot');

  // Calcule le nombre total de diapositives
  const totalSlides = slides.children.length;

  // Gère la navigation cyclique en utilisant le modulo (%)
  currentIndex = (index + totalSlides) % totalSlides;

  // Déplace le carousel en appliquant une transformation translateX
  slides.style.transform = `translateX(${-currentIndex * 100}%)`;

  // Supprime la classe "active" de tous les points de navigation
  dots.forEach(dot => dot.classList.remove('active'));

  // Ajoute la classe "active" au point de navigation correspondant à la diapositive actuelle
  dots[currentIndex].classList.add('active');
}

// Fonction pour afficher la diapositive précédente
function prevSlide() {
  showSlide(currentIndex - 1);
}

// Fonction pour afficher la diapositive suivante
function nextSlide() {
  showSlide(currentIndex + 1);
}

// Fonction pour afficher une diapositive spécifique par son index
function currentSlide(index) {
  showSlide(index);
}

// Auto Slide (optionnel)
setInterval(() => {
  nextSlide();
}, 5000);
// // script.js pour le contact après la formation
// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });