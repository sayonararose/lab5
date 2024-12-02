// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. 
// При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.
// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру. Функція має створювати стільки <div> елементів,
//  скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.
// 1.	Розміри першого <div> елемента мають бути 30px на 30px.
// 2.	Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// 3.	Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.



// Генерація випадкового кольору
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Функція створення елементів
function createBoxes() {
     // Отримання значення з поля вводу
    const input = document.querySelector('#controls input');
    const amount = parseInt(input.value, 10);

    // Перевірка, чи значення в допустимих межах (1-100)
    if (amount >= 1 && amount <= 100) {
        const boxesContainer = document.getElementById('boxes');
        boxesContainer.innerHTML = ''; // Очищення попередньої колекції

        let boxSize = 30;

    // Цикл для створення необхідної кількості елементів
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div'); // Створення нового елемента <div>
        box.style.width = box.style.height = `${boxSize}px`; // Встановлення розмірів
        box.style.backgroundColor = getRandomHexColor(); // Встановлення випадкового кольору
        box.style.margin = '5px'; // Встановлення відступів між елементами

        boxesContainer.appendChild(box); // Додавання елемента до контейнера

            boxSize += 10; // Збільшення розмірів для наступного елемента
        }

        input.value = ''; // Очищення значення вводу
    } else {
        alert('Please enter a number between 1 and 100.');
    }
}

// Функція очищення колекції
function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = ''; // Очищення колекції
}

// Додаємо обробники подій для кнопок
document.querySelector('[data-create]').addEventListener('click', createBoxes);
document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);


