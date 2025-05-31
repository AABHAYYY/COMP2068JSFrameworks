const prompt = require('prompt');

prompt.start();

prompt.get(['userSelection'], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  const userSelection = result.userSelection.toUpperCase();

  // Generate computerSelection based on Math.random()
  let randomNum = Math.random();
  let computerSelection = '';

  if (randomNum <= 0.34) {
    computerSelection = 'PAPER';
  } else if (randomNum <= 0.67) {
    computerSelection = 'SCISSORS';
  } else {
    computerSelection = 'ROCK';
  }

  console.log(`User selection: ${userSelection}`);
  console.log(`Computer selection: ${computerSelection}`);

  // Determine the winner
  if (userSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    console.log('User Wins');
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'PAPER') ||
    (userSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
    (userSelection === 'SCISSORS' && computerSelection === 'ROCK')
  ) {
    console.log('Computer Wins');
  } else {
    console.log('Invalid user input. Please enter ROCK, PAPER, or SCISSORS.');
  }
});
