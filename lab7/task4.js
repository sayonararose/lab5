const square = document.getElementById('square');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');

// Початковий розмір квадрата
let size = 100;

// Функція для зменшення розміру квадрата
decreaseButton.addEventListener('click', () => {
    size -= 15; // Зменшуємо розмір на 15 пікселів
    if (size < 15) size = 15; // Мінімальний розмір - 15px
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
});

// Функція для збільшення розміру квадрата
increaseButton.addEventListener('click', () => {
    size += 15; // Збільшуємо розмір на 15 пікселів
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
});