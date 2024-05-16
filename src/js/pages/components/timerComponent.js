class Timer extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<h1 id="timer" class="default-text"></h1>`;

    let timer = document.getElementById("timer");

    const timeStart = this.getAttribute("time");

    function updateTime() {
      const dateNow = new Date().getTime();
      const timeDiff = new Date(dateNow - timeStart);
      const seconds =
        timeDiff.getUTCSeconds() < 10
          ? `0${timeDiff.getUTCSeconds()}`
          : timeDiff.getUTCSeconds();
      const minutes =
        timeDiff.getUTCMinutes() < 10
          ? `0${timeDiff.getUTCMinutes()}`
          : timeDiff.getUTCMinutes();
      const hours =
        timeDiff.getUTCHours() < 10
          ? `0${timeDiff.getUTCHours()}`
          : timeDiff.getUTCHours();

      timer.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateTime();

    const startTimer = () => {
      setInterval(updateTime, 1000);
    };

    startTimer();
  }
}

customElements.define("timer-counter", Timer);
