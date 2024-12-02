// Знаходимо всі елементи li 
const categoriesList = document.querySelectorAll('#categories > .item');

// Виводимо в консоль кількість знайдених категорій.
console.log(`Number of categories: ${categoriesList.length}`);

// Перебираємо кожен елемент списку категорій.
categoriesList.forEach((category) => {
  // Знаходимо текст заголовка 
  const categoryTitle = category.querySelector('h2').textContent;
  
  // Рахуємо кількість вкладених елементів
  const itemsCount = category.querySelectorAll('ul > li').length;
  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsCount}`);
});
