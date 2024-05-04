export default async function initMap() {
  await ymaps3.ready;
  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapControls,
  } = ymaps3;
  const { YMapGeolocationControl } = await ymaps3.import(
    "@yandex/ymaps3-controls@0.0.1",
  );
  const { YMapZoomControl } = await ymaps3.import(
    "@yandex/ymaps3-controls@0.0.1",
  );
  const { YMapDefaultMarker } = await ymaps3.import(
    "@yandex/ymaps3-markers@0.0.1",
  );

  const map = new YMap(document.getElementById("map"), {
    location: {
      center: [43.974176, 56.280935],
      zoom: 15,
    },
  });
  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());

  map.addChild(
    new YMapControls({ position: "left" }).addChild(
      new YMapGeolocationControl({}),
    ),
  );

  map.addChild(
    new YMapControls({ position: "right" }).addChild(new YMapZoomControl({})),
  );

  map.addChild(
    new YMapDefaultMarker({
      coordinates: [43.974176, 56.280935],
      title: "Парк Швейцария",
      subtitle: "Тут живут красивые белочки",
      color: "var(--backgroundColorBlue)",
    }),
  );
}
