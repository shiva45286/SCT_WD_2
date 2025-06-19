let startTime, interval;
let running = false;
let elapsedTime = 0;

function updateDisplay() {
        const now = Date.now();
  const time = elapsedTime + (running ? now - startTime : 0);

      const ms = Math.floor((time % 1000) / 10);
   const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        document.getElementById("display").textContent =
    `${String(hours).padStart(2, '0')}:` +  
    `${String(minutes).padStart(2, '0')}:` +
    `${String(seconds).padStart(2, '0')}.` +
    `${String(ms).padStart(2, '0')}`;
}

     

function startStopwatch() {
        if (!running) {
    running = true;
    startTime = Date.now();
        interval = setInterval(updateDisplay, 10);
  }
}

function pauseStopwatch() {
  if (running) {
        elapsedTime += Date.now() - startTime;
    clearInterval(interval);
       running = false;
  }
}

function resetStopwatch() {
  clearInterval(interval);
        running = false;
  elapsedTime = 0;
       document.getElementById("display").textContent = "00:00:00.00";
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
        if (!running && elapsedTime === 0) return;
  const lapItem = document.createElement("li");
       lapItem.textContent = document.getElementById("display").textContent;
  document.getElementById("laps").appendChild(lapItem);
}

  
