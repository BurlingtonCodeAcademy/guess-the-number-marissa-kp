const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);

  let min = 1; //initial min value set to 1
  let max = 100; //initial max value set to 100
  numberGuess = 0; //initial numberGuess value set to 0 which cannot be secretNumber
  
  while (numberGuess !== secretNumber) {
    let numberGuess = Math.random() * (+max - +min) + +min; //numberGuess assigned to number value between min and max
    let yesOrNo = ask('Is your number ' + numberGuess + '? (Y/N)'); //yesOrNo vassigned to 'Y' or 'N' based on user input
  
    if (yesOrNo == 'Y') { //if computer guesses secret number
      let numberGuess = secretNumber //assign numberGuess to value of secretNumber, closing loop
      console.log("yippee")
    }
  
    else (yesOrNo == 'N'); //If computer does not guess secret number
      let higherOrLower = ask('Higher or Lower? (H/L)') //Ask if secret number is higher or lower and set response to variable higherOrLower
  
      if (higherOrLower == 'H');//If secret number is higher than computer's guess
        let min = numberGuess //resent value of min to the value of numberGuess to adjust range of random guesses
      
      elseif (higherOrLower == 'L'); //If secret number is lower than computer's guess
        let max = numberGuess //resent value of max to the value of numberGuess to adjust range of random guesses
  
    }
  
  process.exit();

}

start()
