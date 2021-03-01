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
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
    //   console.log(position.coords);
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      console.log(latitude, longitude);
      return [latitude, longitude];
    });
  } else {
    alert("Can't find Location. Check internet or reload again ;) ");
  }
};

const createMap = function (longlat) {
  //   creating map using leaflet
  var map = L.map('map').setView(longlat, 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker(longlat).addTo(map).bindPopup('Popup').openPopup();
};

const longlat = getCurrGeoLocation();
console.log(longlat);
// createMap(longlat);

form.classList.remove('hidden');
// form.style.opacity = 1;
