/* JavaScript pour le Carrousel avec Effet de Fondu */
let fadeIndex = 0;

function showFadeSlide(index) {
    const slides = document.querySelectorAll('.carousel-item-fade');
    const totalSlides = slides.length;
    fadeIndex = (index + totalSlides) % totalSlides;
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === fadeIndex) {
            slide.classList.add('active');
        }
    });
}

function prevFadeSlide() {
    showFadeSlide(fadeIndex - 1);
}

function nextFadeSlide() {
    showFadeSlide(fadeIndex + 1);
}

// Auto Slide (optionnel)
setInterval(() => {
    nextFadeSlide();
}, 3000);
