'use strict';
//selecting element
const diceRoll = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll'); 
const btnHold= document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let player0currentval = document.querySelector('#current--0');
let player1currentval = document.querySelector('#current--1');

let score = [0,0]
let currentScore = 0;
let activePlayer = 0;

//dice hide 
diceRoll.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;
//Switch player function 

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1: 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}




//Rolling dice functionality 

btnRoll.addEventListener('click',function(){
    console.log("roll button clicked");
    //1.Generating a random dice roll
   let rollingDiceNum = Math.trunc(Math.random()*6+1);
   console.log(rollingDiceNum);
   //2.Display the hidden dice image
   diceRoll.classList.remove('hidden');
   diceRoll.src =`dice-${rollingDiceNum}.png`;
   //3.Add the current score
   if (rollingDiceNum!=1){
    currentScore+=rollingDiceNum;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
   }else{
    //Switch to next player
     switchPlayer();
   }
  
})

//Hold dice functionality
btnHold.addEventListener('click',function(){
    console.log("hold button clicked");
    //1.Add a current to the active player's score 
    score[activePlayer]+=currentScore;
    //score[1]=score[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    //2.Check if the player score >=100
    if(score[activePlayer]>=20){
        document.querySelector(`.player--${[activePlayer]}`).classList.add('player--winner');
        document.querySelector(`.player--${[activePlayer]}`).classList.remove('player--active');
        btnHold.disabled = true;
        btnRoll.disabled = true;
        diceRoll.classList.add('hidden');
    }
    //Finish the game 
    //else switch the player 
    switchPlayer();
    console.log(score[activePlayer]>=20);

})

//New game dice functionality
btnNew.addEventListener('click',function(){
    console.log("New game button clicked");
    btnHold.disabled = false;
    btnRoll.disabled = false;
    diceRoll.classList.add('hidden');
    document.querySelector(`.player--${[activePlayer]}`).classList.remove('player--winner');
    score0.textContent = 0;
    score1.textContent = 0;
    player0currentval = 0;
    player1currentval = 0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');

})