let timerId;
let timeLeft = 0; // Set initial time in seconds (e.g., 60 for 1 minute)

function startTimer() {
  timerId = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerId);
      playAlarm();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerId);
}

function resetTimer() {
  timeLeft = 0; // Reset to initial time
  updateTimerDisplay();
  clearInterval(timerId);
}

function updateTimerDisplay() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function playAlarm() {
  const alarm = document.getElementById("alarm");
  alarm.play();
}
