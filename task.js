//Функція для отримання даних від користувача
function userInput(){
    let country = prompt('Введіть назву країни доставки');
    let price = getValidNumber('Введіть загальну вартість товару');
    let deliveryFee = getValidNumber('Введіть вартість доставки товару');

    const message = getShippingMessage(country, price, deliveryFee)
    console.log(message);
}
// Функція для перевірки введеного числа
function getValidNumber(promptMessage) {
    let value;
    while (true) {
        value = Number(prompt(promptMessage));
        if (!isNaN(value) && value > 0 && value !== null && value) {
            return value;
        }
        console.log("Будь ласка, введіть правильне число (додатнє значення).");
    }
}

//Функція для формування повідомлення про доставку (Куди і загальна вартість(вартість товару,вартість доставки))
function getShippingMessage(country, price, deliveryFee){
    return `Доставка до ${country} загальна вартість ${price + deliveryFee} кредитів`;
}
