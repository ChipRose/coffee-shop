const CoordinatesDefault = {
  LAT: 59.96826506176563,
  LNG: 30.31740982216434,
  ZOOM: 17,
};

const MarkerSize = {
  X: 38,
  Y: 50,
};

const mapCanvas = document.querySelector('#map-canvas');

if (mapCanvas){
  mapCanvas.innerHTML = '<div id="map-inner" style="width: 100%; height: 100%;"></div>';
}

const map = L
  .map('map-inner', {
    scrollWheelZoom: false,
  });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

map.setView(
  {
    lat: CoordinatesDefault.LAT,
    lng: CoordinatesDefault.LNG,
  },
  CoordinatesDefault.ZOOM,
);

const mapPin = L.icon({
  iconUrl: 'img/map/map-pin.svg',
  iconSize: [MarkerSize.X, MarkerSize.Y],
  iconAnchor: [MarkerSize.X / 2, MarkerSize.Y],
});

const marker = L.marker(
  {
    lat: CoordinatesDefault.LAT,
    lng: CoordinatesDefault.LNG,
  },
  {
    draggable: true,
    icon: mapPin,
  },
);

marker.addTo(map);
