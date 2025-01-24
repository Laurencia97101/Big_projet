// script.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});


exportdocument.addEventListener("DOMContentLoaded", function() {
    const menuBurger = document.getElementById('menu-burger');
    const navLinks = document.getElementById('nav-links');

    menuBurger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
