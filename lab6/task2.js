// Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback.
// Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.
//  У випадку якщо товар не знайдено, викликається errorCallback і передається повідомлення про помилку.

// Дані товарів
const products = {
    1: { name: "Laptop", price: 1000, description: "High-performance laptop" },
    2: { name: "Phone", price: 500, description: "Smartphone with a great camera" },
    3: { name: "Tablet", price: 300, description: "Tablet for work" }
  };
  
  // Функція для отримання деталей товару
  function getProductDetails(productId, successCallback, errorCallback) {
    const product = products[productId]; 
    
    if (product) {
      successCallback(product); // Викликаємо successCallback з деталями товару
    } else {
      errorCallback("Product not found"); // Викликаємо errorCallback з повідомленням про помилку
    }
  }
  
  
  getProductDetails(2, 
    (product) => console.log("Product details:", product), 
    (error) => console.error("Error:", error)
  );
  
  getProductDetails(4, 
    (product) => console.log("Product details:", product), 
    (error) => console.error("Error:", error)
  );