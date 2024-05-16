import "./components/timerComponent.js";

export default (timeStart) => {
  return `<section class="main">
 <div class="container wrapper">
  <h1 class="default-text">Timer</h1>
  <timer-counter time="${timeStart}">
  </timer-counter>
 </div>
</section>`
};
