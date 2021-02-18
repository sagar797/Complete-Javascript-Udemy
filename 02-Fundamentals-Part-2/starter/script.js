"use-strict";
// used because it will show some errors in console which we can't see sometimes. For more reference watch video :)

// -----------------------Coding Challenge 1---------------------
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (firstTeamScore, secondTeamScore) => {
  if (firstTeamScore >= 2 * secondTeamScore)
    console.log(`Kohalas win 🏆 (${firstTeamScore} vs ${secondTeamScore})`);
  else if (secondTeamScore >= 2 * firstTeamScore)
    console.log(`Dolhins win 🏆 (${secondTeamScore} vs ${firstTeamScore})`);
  else {
    console.log("Noone wins :( ");
  }
};

// Data 1
// const koalasAvg=calcAverage(44,23,71);
// const dolhinsAvg=calcAverage(65,54,49);

// Data 2
// const koalasAvg = calcAverage(85, 54, 41);
// const dolhinsAvg = calcAverage(23, 34, 27);

// console.log(koalasAvg,dolhinsAvg);

// checkWinner(koalasAvg,dolhinsAvg);
// -----------------------Coding Challenge 1---------------------

// Arrays
// const arr = ["Hugh", "Peter", "Jonas"];
// console.log(arr);

// -----------------------Coding Challenge 2---------------------
const calcTip = (billValue) => {
  if (billValue >= 50 && billValue <= 300) {
    return 0.15 * billValue;
  } else {
    return 0.2 * billValue;
  }
};

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);
// -----------------------Coding Challenge 2---------------------

const JonasObj = {
  name: "Jonas",
  friends: ["Michael", "Sagar", "Peter"],
};

// console.log(`${JonasObj.name} has ${JonasObj.friends.length} friends, and his best friend is ${JonasObj.friends[0]}`);

// -----------------------Coding Challenge 3---------------------
const markObj = {
    name: "Mark",
    mass: 78,
    height:1.69,

    calcBMI: function(){
        return this.mass/this.height**2;
    }
};

const johnObj = {
    name: "John",
    mass: 92,
    height:1.95,
  
    calcBMI: function(){
        return this.mass/this.height**2;
    }
};

// console.log(markObj.calcBMI());
// console.log(johnObj.calcBMI());
// -----------------------Coding Challenge 3---------------------

// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// -----------------------Coding Challenge 4---------------------
const bills=[22,295,176,440,37,105,10,1100,86,52];
const tips=[];
const total=[];
for(let i=0;i<bills.length;i++){
    let tip=calcTip(bills[i]);
    tips.push(tip);
    total.push(tip+bills[i]);
}

console.log(tips);
console.log(total);

const calcAverage=arr=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

console.log(calcAverage(total));
// -----------------------Coding Challenge 4---------------------
