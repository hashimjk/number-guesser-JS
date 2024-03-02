let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = ()=>{
   let randomNum = Math.floor(Math.random()*9+1);
   return randomNum;
}
const getAbsoluteDistance =(num1,num2)=>{
return Math.abs(num1 -num2);
}
const compareGuesses =(humanGuess,computerGuess,target)=>{
const absoluteHuman = getAbsoluteDistance(target,humanGuess);
const absoluteComp = getAbsoluteDistance(target-compareGuesses);
if(absoluteHuman<absoluteComp || absoluteHuman===absoluteComp){
    return true;
}
else if(humanGuess>9){
    alert(`Your number: ${humanGuess} is out of range`);
}
else {
    return false;
}
}

const updateScore = (winner)=>{
if(winner ==='human'){
    humanScore++;
}
else if(winner==='computer'){
    computerScore++;
}
}

const advanceRound =()=>{
currentRoundNumber++;
}


//TESTING!!
// console.log(currentRoundNumber);
// updateScore('human');
// updateScore('computer');
// console.log(humanScore , computerScore);
// console.log(compareGuesses(25,30,27));
// console.log(compareGuesses(2,8,3));
// console.log(compareGuesses(1,8,7));