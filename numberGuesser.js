let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (guess, computerGuess, targetNumber) => {
  if (Math.abs(guess - targetNumber) < Math.abs(computerGuess - targetNumber)) {
    return true;
  } else {
    return false;
  }
};

 const updateScore = (winner) => {
   if (winner === 'human') {
     humanScore++;
   } else if (winner === 'computer') {
     computerScore++;
   } else {     
   }
 };

 const advanceRound = () => {
   currentRoundNumber++;
 }



