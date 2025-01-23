/* JavaScript pour le Carrousel avec Points de Navigation */
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-container');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.children.length;
    currentIndex = (index + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function currentSlide(index) {
    showSlide(index);
}

// Auto Slide (optionnel)
setInterval(() => {
    nextSlide();
}, 3000);
