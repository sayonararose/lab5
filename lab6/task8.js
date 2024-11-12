// Напиши функцію конструктор Storage який створює об'єкти  Для управління складом товарів.  При виклику отримуватиме один агрумент - початковий масив товарів,  і записувати їх у властивість items. 
// Додай методи класу:   getItems() - повертайте масив товарів   addItems(item) - отримує новий товар та додає його до поточних   removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних  
// const arr = ["apple", "banana", "mango"]


// Функція-конструктор Storage для управління складом товарів
function Storage(initialItems) {
    this.items = initialItems; // Записуємо початковий масив товарів у властивість items
  }
  
  // Метод для отримання всіх товарів на складі
  Storage.prototype.getItems = function() {
    return this.items;
  };
  
  // Метод для додавання нового товару до складу
  Storage.prototype.addItem = function(item) {
    this.items.push(item); // Додаємо новий товар до масиву items
  };
  
  // Метод для видалення товару зі складу
  Storage.prototype.removeItem = function(item) {
    const index = this.items.indexOf(item); // Знаходимо індекс товару
  
    if (index !== -1) { // Якщо товар знайдено
      this.items.splice(index, 1); // Видаляємо товар з масиву items
    }
  };
  
  // Приклад використання
  const arr = ["apple", "banana", "mango"];
  const storage = new Storage(arr);
  
  console.log(storage.getItems()); 
  storage.addItem("blueberry");
  console.log(storage.getItems());
  storage.removeItem("banana");
  console.log(storage.getItems()); 