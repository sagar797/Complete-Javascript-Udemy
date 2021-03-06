'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Coding Challenge 1
const juliaDogs = [3, 5, 2, 12, 7];
const kateDogs = [4, 1, 15, 8, 3];
const juliaCopiedArr = juliaDogs.slice(1, -2);
// console.log(juliaCopiedArr);

const checkDogs = function (arr1, arr2) {
  const arr = [...arr1, ...arr2];
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 3) {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    } else {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${arr[i]} years old`
      );
    }
  }
};

// checkDogs(juliaCopiedArr,kateDogs);

/////////////////////////////////////////////////
// Coding Challenge 2
const calcAverageHumanAge = arr => {
  const adults = arr
    .map(x => {
      if (x <= 2) {
        return (x = x * 2);
      } else {
        return 16 + x * 4;
      }
    })
    .filter(age => age >= 18);
  console.log(adults);

  const avg = adults.reduce((acc, curr) => acc + curr, 0) / adults.length;

  console.log(avg);
  return avg;
};

const arr = [5, 2, 4, 1, 15, 8, 3];
// const avgAge = calcAverageHumanAge(arr);
// console.log(avgAge);

/////////////////////////////////////////////////
// Coding Challenge 3
// 3 was 2 actually as we have to do in one line using pipelining so done already


/////////////////////////////////////////////////
// Coding Challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});

// sort the array dogs in shallow copy ascending on the basis of recommended food
const dogsCopy = dogs.map(dog => dog.recommendedFood).flat();
console.log(dogsCopy); // unsorted array
dogsCopy.sort((a, b) => a - b);
console.log(dogsCopy); // sorted array

// console.log(dogs);
let ownersEatTooMuch = [];
let ownersEatTooLittle = [];
let ownersEatOkayAmount = [];

dogs.forEach(dog => {
  if (dog.curFood > dog.recommendedFood * 1.1)
    ownersEatTooMuch.push(dog.owners);
  else if (dog.curFood < dog.recommendedFood * 0.9)
    ownersEatTooLittle.push(dog.owners);
  else if (dog.curFood === dog.recommendedFood) {
    console.log(true);
  } else {
    // console.log(dog.owners.flat(), dog.curFood, dog.recommendedFood);
    ownersEatOkayAmount.push(dog.owners);
  }
});

ownersEatTooMuch = ownersEatTooMuch.flat();
ownersEatTooLittle = ownersEatTooLittle.flat();
ownersEatOkayAmount = ownersEatOkayAmount.flat();
// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);
// console.log(ownersEatOkayAmount);

let tooMuch = '';
ownersEatTooMuch.forEach((owner, i) => {
  i === ownersEatTooMuch.length - 1
    ? (tooMuch += owner + "'s")
    : (tooMuch += owner + ' and ');
});

// console.log(tooMuch + ' eat too much!');

let tooLittle = '';
ownersEatTooLittle.forEach((owner, i) => {
  i === ownersEatTooLittle.length - 1
    ? (tooLittle += owner + "'s")
    : (tooLittle += owner + ' and ');
});

// console.log(tooLittle + ' eat too little!');

// ===========================================================

// console.log(dogs.find(dog => dog.owners.includes('Sarah')));
// const dog = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(typeof(dog.curFood),typeof(dog.recommendedFood));

// dog.curFood > dog.recommendedFood
//   ? console.log(
//       `eating too much ${dog.curFood} should be ${dog.recommendedFood}`
//     )
//   : console.log(
//       `eating too less ${dog.curFood} should be ${dog.recommendedFood}`
// );
