'use strict';

const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

const p1 = new Person('Sagar', 'Gupta');
console.log(p1);
// console.log(Person);
// console.log(Person.prototype);
// console.log(Person.prototype.constructor);
// console.log(Person.prototype.constructor === Person); // true

Person.prototype.calcAge = function () {
  console.log('calcAge function executed');
};

// p1.calcAge();

// console.log(p1.__proto__);
// console.log(Person.prototype);
// console.log(Person.prototype === p1.__proto__); // true
