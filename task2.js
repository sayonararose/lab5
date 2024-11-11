// Функція для отримання даних від користувача 
function userInput() {
    let quantity = Number(prompt('Введіть кількість замовлених дроїдів'));
    let pricePerDroid = Number(prompt('Введіть ціну одного дроїда'));
    let customerCredits = Number(prompt('Введіть суму коштів на рахунку клієнта'));
    
    let message = makeTransaction(quantity, pricePerDroid, customerCredits); 
    console.log(message);
}

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    // Розрахунок загальної суми замовлення
    let totalPrice = quantity * pricePerDroid;

    // Перевірка на недостатність коштів
    if (totalPrice > customerCredits) {
        return "Insufficient funds! (Недостатньо коштів!)"; // Повідомлення про недостатність коштів
    } else {
        return `You ordered(Ваше замовлення) ${quantity} droids(дроїди) worth(вартість) ${totalPrice} credits!`; 
    }
}
