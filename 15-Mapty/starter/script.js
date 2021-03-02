'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// getting current longitude and latitude coordinates
const getCurrGeoLocation = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let latlong = [latitude, longitude];
      // console.log(latlong);
      createMap(latlong);
    });
  }
};

let map;
const createMap = function (latlong) {
  map = L.map('map').setView(latlong, 13);
  // console.log(map);

  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  map.on('click', function (mapE) {
    // console.log(mapE);
    setPopupAndMarker(mapE);
    form.classList.remove('hidden');
    inputDistance.focus();
  });
};

const setPopupAndMarker = function (mapE) {
  L.marker([mapE.latlng.lat, mapE.latlng.lng])
    .addTo(map)
    .bindPopup('Enter text in form')
    .openPopup();
};

form.addEventListener('submit', function (e) {
  // console.log('form submitted');
  e.preventDefault();
  form.classList.add('hidden');
  inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
    '';
});

getCurrGeoLocation();
