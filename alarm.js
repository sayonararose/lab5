// Змінні для зберігання часу будильника та ідентифікатора таймауту
let alarmTime = null;  // Час, на який встановлено будильник
let alarmTimeout = null;  // Ідентифікатор таймера для перевірки будильника

// Додаємо подію "click" до кнопки "Встановити будильник"
document.getElementById("set-alarm").addEventListener("click", () => {
  const alarmInput = document.getElementById("alarm-time").value;  // Отримуємо час, введений користувачем
  if (alarmInput) {
    // Якщо користувач ввів час, перетворюємо його на об'єкт Date
    alarmTime = new Date(alarmInput);
    // Виводимо повідомлення про встановлений час будильника
    document.getElementById("status").textContent = "Будильник встановлено на " + alarmTime.toLocaleString();
    // Починаємо перевіряти час будильника
    checkAlarm();
  } else {
    // Якщо час не введено, показуємо сповіщення з проханням встановити його
    alert("Будь ласка, встановіть час для будильника.");
  }
});

// Додаємо подію "click" до кнопки "Вимкнути будильник"
document.getElementById("clear-alarm").addEventListener("click", () => {
  alarmTime = null; // Скидаємо значення часу будильника
  clearTimeout(alarmTimeout);// Зупиняємо таймер перевірки будильника
  document.getElementById("status").textContent = "Будильник вимкнено"; // Оновлюємо статус із повідомленням про вимкнення будильника
});

// Функція для перевірки, чи настав час будильника
function checkAlarm() {
  const now = new Date();  // Отримуємо поточний час
  if (alarmTime && alarmTime <= now) {  
    // Перевіряємо, чи встановлено час будильника і чи настав він
    alert("Час спрацювання будильника настав!");  // Виводимо сповіщення
    document.getElementById("status").textContent = "Будильник вимкнено";  // Оновлюємо статус
    alarmTime = null;  // Скидаємо час будильника
  } else if (alarmTime) {
    // Якщо час будильника ще не настав, запускаємо перевірку через 1 секунду
    alarmTimeout = setTimeout(checkAlarm, 1000);
  }
}
