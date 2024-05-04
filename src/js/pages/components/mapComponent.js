import initMap from "./loadMap.js";

class MapComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<div id="map" class="yMap loaded"></div>`;

    let scriptMap = document.createElement("script");
    initMap()
      .then(() => document.body.appendChild(scriptMap))
      .finally(() => {
        window.setTimeout(() => {
          document.getElementById("preloader").classList.add("loaded");
          document.getElementById("map").classList.remove("loaded");
        }, 1000); //сделала таймаут, чтобы loader был виден, без него загрузка очень быстрая
      });
  }
}

customElements.define("map-component", MapComponent);
