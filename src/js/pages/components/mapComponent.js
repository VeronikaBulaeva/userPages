class MapComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = /*html*/ `<div id="map" class="yMap loaded"></div>`;

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
    });

    let scriptMap = document.createElement("script");
    scriptMap.innerHTML = `initMap().finally(() => {
      window.setTimeout(() => {
        document.getElementById('preloader').classList.add('loaded');
        document.getElementById("map").classList.remove("loaded");
      }, 1000); //сделала таймаут, чтобы loader был виден, без него загрузка очень быстрая
     });
      async function initMap() {
      await ymaps3.ready;
      const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls} = ymaps3;
      const {YMapGeolocationControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
      const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
      
      const map = new YMap(document.getElementById("map"), {
        location: {
        center: [37.588144, 55.733842],
        zoom: 10,
      },

      });
      map.addChild(new YMapDefaultSchemeLayer());
      map.addChild(new YMapDefaultFeaturesLayer());


      map.addChild(
       new YMapControls({position: 'left'})
       .addChild(new YMapGeolocationControl({}))
      );

      map.addChild(
       new YMapControls({position: 'right'})
       .addChild(new YMapZoomControl({}))
      );
    }
    `;
    document.body.appendChild(scriptMap);
  }
}

customElements.define("map-component", MapComponent);
