// Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)  і перевіряє правильність закриття дужок () {} []
//   Якщо рядок містить коректний код функція повертає true.
//   В іншому випадку повертає false


function checkBrackets(str) {
    const stack = [];
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
  
    for (let char of str) {
      // Якщо символ є відкривною дужкою, додаємо його в стек
      if (brackets[char]) {
        stack.push(char);
      }
      // Якщо символ є закривною дужкою, перевіряємо відповідність останній відкривній дужці
      else if (Object.values(brackets).includes(char)) {
        const lastBracket = stack.pop();
        if (brackets[lastBracket] !== char) {
          return false; // Якщо дужки не збігаються, повертаємо false
        }
      }
    }
  
    /// Повертаємо true, якщо стек порожній (всі дужки закриті правильно)
    return stack.length === 0;
  }
  
  // Приклади використання
  console.log(checkBrackets("function test() { return [1, 2, 3]; }")); // true
  console.log(checkBrackets("function test() { return [1, 2, 3; }"));   // false