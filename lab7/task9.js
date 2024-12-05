function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  document.querySelector('.change-color').addEventListener('click', function() {
    const newColor = getRandomHexColor(); // Генеруємо новий колір
    document.body.style.backgroundColor = `rgb(${parseInt(newColor.slice(1, 3), 16)}, ${parseInt(newColor.slice(3, 5), 16)}, ${parseInt(newColor.slice(5, 7), 16)})`; // Змінюємо колір фону на rgb
    document.querySelector('.color').textContent = newColor; 
  });