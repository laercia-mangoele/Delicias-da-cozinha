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

// Validação do formulário
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const responseMessage = document.createElement('p');
    responseMessage.style.color = 'green';
    form.appendChild(responseMessage);

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const eventDate = document.getElementById('event-date').value;
        const eventTime = document.getElementById('event-time').value;
        const recipe = document.getElementById('recipe').value;
        const chef = document.getElementById('chef').value;
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !phone || !eventDate || !eventTime || !recipe || !chef) {
            responseMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
            responseMessage.style.color = 'red';
            return;
        }

        // Se passar na validação, exibe a mensagem de sucesso
        responseMessage.textContent = 'Serviço agendado com sucesso!';
        responseMessage.style.color = 'green';

        // Opcional: Limpa o formulário após o envio
        form.reset();
    });
});
