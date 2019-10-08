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

  let min = 1;
  let max = 100;
  let guess = Math.floor(Math.random() * (+max - +min) + +min);
  let yesOrNo = await ask("Is your number " + guess + "? (Y/N)");

  while (yesOrNo == 'N') {
    let highOrLow = await ask("Is your number higher or lower? (H/L)")

    if (highOrLow == 'H') {
      min = guess
    }
    else if (highOrLow == 'L') {
      max = guess
    };

    guess = Math.floor(Math.random() * (+max - +min) + +min);
    yesOrNo = await ask("Is your number " + guess + "? (Y/N)");
  }
  console.log("lol");
  process.exit();
}
start()
