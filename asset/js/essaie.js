// /* script.js */

// document.addEventListener("DOMContentLoaded", function() {
//     const canvas = document.createElement('canvas');
//     document.body.appendChild(canvas);
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     const ctx = canvas.getContext('2d');

//     const particlesArray = [];

//     class Particle {
//         constructor() {
//             this.x = Math.random() * canvas.width;
//             this.y = Math.random() * canvas.height;
//             this.size = Math.random() * 3 + 1;
//             this.speedX = Math.random() * 3 - 1.5;
//             this.speedY = Math.random() * 3 - 1.5;
//         }
//         update() {
//             this.x += this.speedX;
//             this.y += this.speedY;
//             if (this.size > 0.2) this.size -= 0.1;
//         }
//         draw() {
//             ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//             ctx.closePath();
//             ctx.fill();
//         }
//     }

//     function handleParticles() {
//         for (let i = 0; i < particlesArray.length; i++) {
//             particlesArray[i].update();
//             particlesArray[i].draw();
//             if (particlesArray[i].size <= 0.3) {
//                 particlesArray.splice(i, 1);
//                 i--;
//             }
//         }
//     }

//     function animate() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         handleParticles();
//         requestAnimationFrame(animate);
//     }

//     animate();

//     canvas.addEventListener('click', function(event) {
//         for (let i = 0; i < 10; i++) {
//             particlesArray.push(new Particle());
//         }
//     });

//     canvas.addEventListener('mousemove', function(event) {
//         for (let i = 0; i < 2; i++) {
//             particlesArray.push(new Particle());
//         }
//     });
// });


// /* script.js */

// document.addEventListener("DOMContentLoaded", function() {
//     const canvas = document.createElement('canvas');
//     document.body.appendChild(canvas);
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     const ctx = canvas.getContext('2d');

//     const particlesArray = [];

//     class Particle {
//         constructor() {
//             this.x = Math.random() * canvas.width;
//             this.y = Math.random() * canvas.height;
//             this.size = Math.random() * 3 + 1;
//             this.speedX = Math.random() * 3 - 1.5;
//             this.speedY = Math.random() * 3 - 1.5;
//         }
//         update() {
//             this.x += this.speedX;
//             this.y += this.speedY;
//             if (this.size > 0.2) this.size -= 0.1;
//         }
//         draw() {
//             ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//             ctx.closePath();
//             ctx.fill();
//         }
//     }

//     function handleParticles() {
//         for (let i = 0; i < particlesArray.length; i++) {
//             particlesArray[i].update();
//             particlesArray[i].draw();
//             if (particlesArray[i].size <= 0.3) {
//                 particlesArray.splice(i, 1);
//                 i--;
//             }
//         }
//     }

//     function animate() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         handleParticles();
//         requestAnimationFrame(animate);
//     }

//     animate();

//     canvas.addEventListener('click', function(event) {
//         for (let i = 0; i < 10; i++) {
//             particlesArray.push(new Particle());
//         }
//     });

//     canvas.addEventListener('mousemove', function(event) {
//         for (let i = 0; i < 2; i++) {
//             particlesArray.push(new Particle());
//         }
//     });
// });


/* script.js */
// à prendre
// document.addEventListener("DOMContentLoaded", function() {
//     const canvas = document.createElement('canvas');
//     document.body.appendChild(canvas);
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     const ctx = canvas.getContext('2d');

//     const particlesArray = [];

//     class Particle {
//         constructor() {
//             this.x = Math.random() * canvas.width;
//             this.y = Math.random() * canvas.height;
//             this.size = Math.random() * 3 + 1;
//             this.speedX = Math.random() * 0.5 - 0.25;
//             this.speedY = Math.random() * 0.5 - 0.25;
//         }
//         update() {
//             this.x += this.speedX;
//             this.y += this.speedY;

//             // Replacer les particules qui sortent des bords
//             if (this.x > canvas.width) this.x = 0;
//             if (this.x < 0) this.x = canvas.width;
//             if (this.y > canvas.height) this.y = 0;
//             if (this.y < 0) this.y = canvas.height;
//         }
//         draw() {
//             ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//             ctx.closePath();
//             ctx.fill();
//         }
//     }

//     function createParticles() {
//         for (let i = 0; i < 100; i++) {
//             particlesArray.push(new Particle());
//         }
//     }

//     function handleParticles() {
//         for (let i = 0; i < particlesArray.length; i++) {
//             particlesArray[i].update();
//             particlesArray[i].draw();
//         }
//     }

//     function animate() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         handleParticles();
//         requestAnimationFrame(animate);
//     }

//     createParticles();
//     animate();
// });

// script.js
// script.js

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;

        button.classList.toggle('active');
        faqAnswer.classList.toggle('open');

        if (faqAnswer.style.maxHeight) {
            faqAnswer.style.maxHeight = null;
        } else {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        }
    });
});

