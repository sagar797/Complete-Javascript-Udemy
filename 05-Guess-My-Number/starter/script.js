'use strict';

let secretNumber=Math.floor(Math.random()*20+1);
// console.log(secretNumber,typeof secretNumber);
let score=Number(document.querySelector('.score').textContent);
// console.log(score);
let highScore=0;

document.querySelector(".btn.check").addEventListener('click',function(){
    let valInCheckBox=Number(document.querySelector('.guess').value);
    // console.log(valInCheckBox,typeof valInCheckBox);
    if(score==0) return;
    
    if(!valInCheckBox){
        document.querySelector('.message').textContent='Enter Valid Number!'
    }else if(valInCheckBox>secretNumber){
        if(score==1){
            score--;
            document.querySelector('.message').textContent='You Lost Bro! Try Again :)';
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector(".message").textContent='Too high Bro!';
            score--;
            document.querySelector('body').style.backgroundColor='#222';
            document.querySelector('.number').textContent='?';
            document.querySelector('.score').textContent=score;
        }
    }else if(valInCheckBox<secretNumber){
        if(score==1){
            score--;
            document.querySelector('.message').textContent='You Lost Bro! Try Again :)';
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector(".message").textContent='Too low bro';
            score--;
            document.querySelector('body').style.backgroundColor='#222';
            document.querySelector('.number').textContent='?';
            document.querySelector('.score').textContent=score;
        }
    }else{
        document.querySelector('.message').textContent='🎉🎉 You Won 🎉🎉'
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='green';
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }
});

document.querySelector('.btn.again').addEventListener('click', function(){
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('.score').textContent=10;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#222';
    score=10;
});