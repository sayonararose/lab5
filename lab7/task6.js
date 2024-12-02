function doubling() {
    // Отримуємо всі елементи <li> зі списку
    const items = document.querySelectorAll("#numbers li");
    // Проходимося по кожному <li> і подвоюємо його значення
    items.forEach(item => {
        const currentValue = Number(item.textContent); 
        item.textContent = currentValue * 2;          
    });
}
