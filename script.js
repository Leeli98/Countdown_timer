'use strict';

(function () {
  const daysToCount = 7; 

  const now = new Date();
  const targetTime = new Date(now);
  targetTime.setDate(now.getDate() + daysToCount);

  const Days = document.getElementById('days');
  const Hours = document.getElementById('hours');
  const Minutes = document.getElementById('minutes');
  const Seconds = document.getElementById('seconds');

  function pad(n) { return String(n).padStart(2, '0'); }

  function render() {
    const now = new Date();
    let distance = targetTime - now;

    if (distance <= 0) {
      // 如果到期了，重设目标时间再继续倒数
      targetTime = getNextTarget();
      distance = targetTime - now;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(distance / (1000 * 60)) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.textContent = pad(days);
    Hours.textContent = pad(hours);
    Minutes.textContent = pad(minutes);
    Seconds.textContent = pad(seconds);
  }

  render();
  const timerId = setInterval(render, 1000);
})();
