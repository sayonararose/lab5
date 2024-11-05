function userInput(){
    let firstArray = getValidArray("Введіть елементи першого масиву(через пробіл)");
    console.log("First Aray:", firstArray)
    
    let secondArray = getValidArray("Введіть елементи другого масиву(через пробіл)");
    console.log("Second Aray:", secondArray)

    let maxLength = getValidArray("Введіть максимальну довжину масиву");
    console.log("Maximum Length:", maxLength)

    let result = makeArray(firstArray, secondArray, maxLength);
    console.log(result);
}

// Функція для отримання і перевірки масиву чисел від користувача
function getValidArray(promptMessage) {
    let array;
    while (true) {
        // Отримання введеного рядка та перетворення його на масив чисел
        let input = prompt(promptMessage);
        array = input.split(" ").map(Number);
        // Перевірка, що всі елементи масиву є числами
        if (array.every(num => !isNaN(num))) {
            return array;
        }
        console.log("Please enter a valid array (only numbers).");
    }
}


function makeArray(firstArray, secondArray, maxLength) {
    // Створюємо новий масив, що містить усі елементи з firstArray і secondArray
    const combinedArray = firstArray.concat(secondArray);
  
    // Перевіряємо чи довжина нового масиву перевищує maxLength
    if (combinedArray.length > maxLength) {
      // Якщо так, повертаємо копію масиву з maxLength елементів
      return combinedArray.slice(0, maxLength);
    } else {
      // Якщо ні, повертаємо весь масив
      return combinedArray;
    }
  }