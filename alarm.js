let alarmTime = null;
let alarmTimeout = null;

document.getElementById("set-alarm").addEventListener("click", () => {
  const alarmInput = document.getElementById("alarm-time").value;
  if (alarmInput) {
    alarmTime = new Date(alarmInput);
    document.getElementById("status").textContent = "Будильник встановлено на " + alarmTime.toLocaleString();
    checkAlarm();
  } else {
    alert("Будь ласка, встановіть час для будильника.");
  }
});

document.getElementById("clear-alarm").addEventListener("click", () => {
  alarmTime = null;
  clearTimeout(alarmTimeout);
  document.getElementById("status").textContent = "Будильник вимкнено";
});

function checkAlarm() {
  const now = new Date();
  if (alarmTime && alarmTime <= now) {
    alert("Час спрацювання будильника настав!");
    document.getElementById("status").textContent = "Будильник вимкнено";
    alarmTime = null;
  } else if (alarmTime) {
    alarmTimeout = setTimeout(checkAlarm, 1000);
  }
}