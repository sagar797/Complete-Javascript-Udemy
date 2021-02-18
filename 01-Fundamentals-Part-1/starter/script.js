const billValue = Number(prompt("Enter bill value:"));

const tipValue=(billValue>=50 && billValue<=300)? 0.15*billValue:0.3*billValue;

console.log(`The bill was ${billValue}, the tip was ${tipValue}, and total value will be: ${billValue+tipValue}`);