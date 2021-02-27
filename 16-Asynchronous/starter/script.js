'use strict';

// const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// let arr = [1, 2, 3];
// let sum = arr.reduce((ac,n) => ac+n);
// console.log(sum);

// let newarr = arr.map(n => n * n);
// console.log(newarr);

// Coding Challenge 1
// const whereAmI = function (latitude, longitude) {
//   fetch(`https://geocode.xyz/51.50354,-0.12768?geoit=json`)
//     .then(response => {
//         // console.log(response);
//         if(!response) return;
//         return response.json()
//     })
//     .then(data => {
//       if (!data) return;
//       //   console.log(data);
//       insertHTMLinContainer(data);
//     });
// };

// const insertHTMLinContainer = function (data) {
//   countriesContainer.insertAdjacentHTML(
//     'beforeend',
//     `<article class="country">
//         <img class="country__img" src="./img/img-1.jpg" />
//         <div class="country__data">
//           <h3 class="country__name">${data.country}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>POP people</p>
//           <p class="country__row"><span>🗣️</span>LANG</p>
//           <p class="country__row"><span>💰</span>CUR</p>
//         </div>
//       </article>`
//   );
//   countriesContainer.style.opacity = 1;
// };

// whereAmI(51.50354, -0.12768);
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// let images = document.querySelector('.images');
// const createImage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     console.log(img);
//     img.addEventListener('load', () => {
//       images.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', () => reject(new Error('No image found!')));
//   });
// };

// let path = `img/img-1.jpg`;
// let currImage;
// createImage(path)
//   .then(img => {
//     currImage = img;
//     console.log('img-1', currImage);
//     return wait(2);
//   })
//   .then(() => {
//     currImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currImage = img;
//     console.log('img-2', currImage);
//     return wait(2);
//   })
//   .then(() => {
//     currImage.style.display = 'none';
//   })
//   .catch(err => console.log(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// Coding Challenge 3
const loadNPause = async function () {};
