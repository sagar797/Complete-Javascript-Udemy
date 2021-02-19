'use strict';

const player1Score = document.querySelector('#score--0');
player1Score.textContent = 0;

const player2Score = document.querySelector('#score--1');
player2Score.textContent = 0;

const dice = document.querySelector('.dice');
dice.classList.add('hidden');

const rollDice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');

let playerTurn = true;
// true is for player-1 false is for player-2
let pcurrScore = 0;
rollDice.addEventListener('click', function () {
  let randomValueOnDice = Number(Math.floor(Math.random() * 6 + 1));
  if (dice.classList.contains('hidden')) {
    dice.classList.remove('hidden');
  }
  let img = 'dice-' + randomValueOnDice + '.png';
  // console.log(img);
  dice.src = img;

  let localScore;
  if (playerTurn) {
    localScore = document.querySelector('#current--0');
  } else {
    localScore = document.querySelector('#current--1');
  }

  if (randomValueOnDice == 1) {
    pcurrScore = 0;
    localScore.textContent = 0;
    changeColor();
    playerTurn = !playerTurn;
  } else {
    pcurrScore += randomValueOnDice;
    localScore.textContent = pcurrScore;
  }
});

hold.addEventListener('click', function () {
  if (playerTurn) {
    let oldValue = Number(player1Score.textContent);
    let newValue = oldValue + pcurrScore;
    player1Score.textContent = newValue;
    if (newValue >= 100) {
      document.querySelector('.player--0').style.backgroundColor = 'black';
      return;
    }
  } else {
    let oldValue = Number(player2Score.textContent);
    let newValue = oldValue + pcurrScore;
    player2Score.textContent = newValue;
    if (newValue >= 100) {
      document.querySelector('.player--1').style.backgroundColor = 'black';
      return;
    }
  }

  changeColor();
  playerTurn = !playerTurn;
  pcurrScore = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
});

function changeColor() {
  if (playerTurn) {
    document.querySelector('.player--0').style.backgroundColor = '#B97A99';
    document.querySelector('.player--1').style.backgroundColor = '#D9AFBE';
  } else {
    document.querySelector('.player--0').style.backgroundColor = '#D9AFBE';
    document.querySelector('.player--1').style.backgroundColor = '#B97A99';
  }
}

newGame.addEventListener('click', function () {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  dice.classList.add('hidden');
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  playerTurn = false;
  changeColor();
  playerTurn = true;
});
