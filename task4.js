// Функція для отримання даних від користувача
function userInput() {
    let firstArray = getValidArray("Введіть елементи першого масиву (через пробіл)");
    console.log("First Array:", firstArray);

    let secondArray = getValidArray("Введіть елементи другого масиву (через пробіл)");
    console.log("Second Array:", secondArray);

    // Знаходимо найменший спільний елемент між двома масивами
    let smallestCommonElement = smallestElemTwoArray(firstArray, secondArray);
    if (smallestCommonElement !== null) {
        console.log(`Найменший спільний елемент це: ${smallestCommonElement}`);
    } else {
        console.log("Між двома масивами немає спільних елементів.");
    }

    // Запитуємо у користувача довжину масиву випадкових чисел
    const length = parseInt(prompt("Введіть довжину масиву випадкових чисел:"), 10);
    
    // Генеруємо масив випадкових чисел
    const randomArray = randomNumbersArray(length);
    console.log("Випадковий масив:", randomArray);

    // Сортуємо масив
    const sortedArray = bubbleSort(randomArray.slice());
    console.log("Вихідний масив (упорядкований):", sortedArray);
}

// Функція для отримання і перевірки масиву чисел від користувача
function getValidArray(promptMessage) {
    let array;
    while (true) {
        let input = prompt(promptMessage);
        array = input.split(" ").map(Number);
        if (array.every(num => typeof num === 'number' && num > 0)) {
            return array;
        }
        console.log("Будь ласка, введіть правильні додатні числа (через пробіл).");
    }
}

// Функція для знаходження найменшого спільного елемента між двома масивами
function smallestElemTwoArray(array1, array2) {
    const commonElements = array1.filter(value => array2.includes(value));
    if (commonElements.length === 0) {
        return null; // Немає спільних елементів
    }
    return Math.min(...commonElements); // Повертаємо найменший спільний елемент
}

// Функція для генерації масиву випадкових чисел
function randomNumbersArray(length = 10) {
    return Array.from(Array(length), () => Math.floor(Math.random() * 100) + 1);
}

// Функція для сортування масиву методом бульбашки
function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

