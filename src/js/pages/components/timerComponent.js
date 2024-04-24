// New component
class Timer extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = /*html*/ `<h1 id="timer"></h1>`;

    let timer = document.getElementById("timer");

    const timeStart = Number(sessionStorage.getItem("timeStart"));

    let interval;

    // State
    function updateTime() {
      let dateNow = new Date().getTime();
      const timeDiff = new Date(dateNow - timeStart);
      let seconds =
        timeDiff.getUTCSeconds() < 10
          ? `0${timeDiff.getUTCSeconds()}`
          : timeDiff.getUTCSeconds();
      let minutes =
        timeDiff.getUTCMinutes() < 10
          ? `0${timeDiff.getUTCMinutes()}`
          : timeDiff.getUTCMinutes();
      let hours =
        timeDiff.getUTCHours() < 10
          ? `0${timeDiff.getUTCHours()}`
          : timeDiff.getUTCHours();

      timer.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateTime();

    const startTimer = () => {
      interval = setInterval(updateTime, 1000);
    };

    startTimer();
  }
}

customElements.define("timer-counter", Timer);
