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

let map, mapE;
const createMap = function (latlong) {
  map = L.map('map').setView(latlong, 13);
  // console.log(map);

  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  map.on('click', function (mapEvent) {
    // console.log(mapE);
    mapE = mapEvent;
    // latlong = [mapE.latlng.lat, mapE.latlng.lng];
    // console.log('✔  ' + latlong);
    form.classList.remove('hidden');
    inputDistance.focus();
  });
};

const setPopupAndMarker = function () {
  // console.log(mapE);
  let latlong = [mapE.latlng.lat, mapE.latlng.lng];
  // console.log(latlong);
  L.marker(latlong)
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${inputType.value}-popup`,
      })
    )
    .setPopupContent(`${inputType.value}`)
    .openPopup();
};

form.addEventListener('submit', function (e) {
  // console.log('form submitted');
  e.preventDefault();
  form.classList.add('hidden');
  setPopupAndMarker();

  let date = new Date();
  let html = `<li class="workout workout--${
    inputType.value === 'cycling' ? 'cycling' : 'running'
  }" data-id="1234567890">
    <h2 class="workout__title">${
      inputType.value === 'running' ? 'Running' : 'Cycling'
    } on ${months[date.getMonth()]} ${date.getDate()}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        inputType.value == 'cycling' ? '🚴‍♀️' : '🏃‍♂️'
      }</span>
      <span class="workout__value">${inputDistance.value}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${inputDuration.value}</span>
      <span class="workout__unit">min</span>
    </div>`;

  if (inputType.value === 'cycling') {
    html += `<div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${inputElevation.value}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>`;
  }

  if (inputType.value === 'running') {
    html += `<div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${inputCadence.value}</span>
        <span class="workout__unit">min/km</span>
      </div>
    </li>`;
  }

  containerWorkouts.insertAdjacentHTML('beforeend', html);
  // inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
  //   '';
  form.reset();
});

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});

getCurrGeoLocation();
