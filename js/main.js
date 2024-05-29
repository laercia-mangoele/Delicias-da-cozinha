let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let themeToggle = document.getElementById('theme-toggle');
let body = document.body;

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');
}

const typedTextSpan = document.getElementById('typed-text');
const textArray = ["Comida", "Receita", "Sobremesa"]; // Palavras para serem digitadas
const typingDelay = 100; // Delay entre cada caractere (ms)
const erasingDelay = 50; // Delay entre apagar cada palavra (ms)
const newTextDelay = 2000; // Delay antes de começar a digitar uma nova palavra

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newTextDelay + 250);
});

themeToggle.onclick = () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.classList.replace('bxs-moon', 'bxs-sun');
    } else {
        themeToggle.classList.replace('bxs-sun', 'bxs-moon');
    }
}
