import "./components/mapComponent.js";

export default () => {
  return `<div class="doc-wrapper">
  <section class="main">
    <div class="container g-0 wrapper">
      <h1 class="default-text">Basic map</h1>

      <div id="preloader" class="preloader">
        <div class="loader"></div>
      </div>
      <map-component></map-component>
    </div>
  </section>
</div>`
}
