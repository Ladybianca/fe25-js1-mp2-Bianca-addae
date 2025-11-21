

//--------  Element ----------------// 
const player = document.querySelector("#player");
const game = document.querySelector("#game");
const btnEl = document.querySelector('#btnEl');
const count = document.querySelector('#roundCount');
const roundPoints = document.querySelector("#roundPoint");
const totalPoint = document.querySelector("#totalPoint");
const pel = document.querySelector('#restart');
const btnGame1 = document.querySelector('#btnGame1');
const btnGame2 = document.querySelector('#btnGame2'); 
const dice = document.querySelector("#dice");   

//--------Eventlistner----------//
player.addEventListener("submit", enterName);
game.addEventListener("click", startGame);
btnEl.addEventListener('click', restartGame);

//------------Score variables  ---------------//
let roundCount = 0;
let roundScore = 0;
let totalScore = 0;
//-----------------------------//

function enterName(event) {
  event.preventDefault();

  const inputName = document.querySelector("#name");
  const name = inputName.value;
  const playerName = document.querySelector("#playerName");
  playerName.innerText = name;
  player.style.display = 'none';

  console.log("Player name: ", name);
}


function startGame(event) {
  const btn = event.target.innerText;

  if (btn === "Freeze") {
   
    totalScore = totalScore +roundScore;
    roundScore = 0;
    roundCount++;

    console.log("---Freeze---");
    console.log("totalScore: ", totalScore);
    console.log("roundScore", roundScore);
    console.log('RoundCount: ',roundCount);

    totalPoint.innerText = "Your total score is: " + totalScore;
    roundPoints.innerText = "Your round score is: " + roundScore;
    count.innerText = "Your round Count is: " + roundCount;

    

  if (totalScore >= 100) {
    console.log("---- >= 100p ----");
    console.log("Yey you reached", totalScore);

    totalPoint.innerText = "Good Job you reached " + totalScore + " points";
    roundPoints.innerText = "You made " + roundCount + " attempts";
    count.style.display = "none";

    btnEl.style.display = "inline";
    btnEl.innerText = "Restart Game";

    btnGame1.style.display = "none";
    btnGame2.style.display = "none"; 
    dice.innerText = '1';
  }

  }

  else if (btn === "Play") {

    const mathRandom = Math.floor(1 + Math.random() * 7); 
    console.log("----Lets Play----");
    console.log("RoundCount: ", roundCount);
    console.log("Vad mathrandom innerhåller: ", mathRandom);
    console.log('Dice: ',dice);


    if (mathRandom === 1) {
      console.log('Tyvärr det blev en :', mathRandom);
      dice.innerText = mathRandom;
      roundScore = 0;
      roundCount ++;
    } 
    
    else {
      console.log("Det blev en ", mathRandom);
      dice.innerText = mathRandom;
      roundScore += mathRandom;
    }

    totalPoint.innerText = "Your total score is: " + totalScore;
    roundPoints.innerText = "Your round score is: " + roundScore;  
    count.innerText = "Your round Count is: " + roundCount;
  } 
  }


function restartGame () {

  roundCount = 0;
  totalScore = 0;
  roundScore = 0;

  player.style.display = "block";
  pel.innerText = "";
  roundPoints.innerText = "Your round Score is: " + roundScore;
  totalPoint.innerText = " Your total Score is: " + totalScore;
  count.style.display = "block";
  count.innerText = "Your round Count is: " + roundCount;
  btnGame1.style.display = "inline";
  btnGame2.style.display = "inline";
  btnEl.style.display = "none";
  dice.innertext ='1';
}
