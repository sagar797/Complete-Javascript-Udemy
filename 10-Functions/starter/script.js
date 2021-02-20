'use strict';

// double arrow function
// const greet=greeting=> name=> console.log(`${greeting} ${name}`);
// greet('Hey')('Sagar!');


// closure
let fn=function(){
    let a=0;
    return function(){
        a++;
        console.log(a);
    }
}

const func=fn();
console.dir(func);
func();
func();
func();