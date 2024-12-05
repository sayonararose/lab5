// 1.	Обробка відправлення форми form.login-form повинна відбуватися за подією submit.
// 2.	Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3.	Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// 4.	Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// 5.	При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.



 document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Забороняємо перезавантаження сторінки
  
    const form = event.currentTarget;
    const email = form.elements.email.value.trim(); // Отримуємо значення email
    const password = form.elements.password.value.trim(); // Отримуємо значення password
  
    // Перевірка, чи всі поля заповнені
    if (email === '' || password === '') {
      alert('Усі поля форми мають бути заповнені'); 
      return;
    }
  
    // Збираємо дані 
    const formData = {
      email: email,
      password: password,
    };
  
    console.log(formData); // Виводимо у консоль
  
    form.reset();
  });
  