'use strict';
//selecting element
const diceRoll = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll'); 
const btnHold= document.querySelector('.btn--hold');
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let player1currentval = document.querySelector('#current--0');
let player2currentval = document.querySelector('#current--1');


let currentScore =0 ;


//dice hide 
diceRoll.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;

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
    player1currentval.textContent = currentScore
   }else{
    //Switch to next player
   }
  
})

//Hold dice functionality
btnHold.addEventListener('click',function(){
    console.log("hold button clicked");
})

//New game dice functionality
btnNew.addEventListener('click',function(){
    console.log("New game button clicked");
})