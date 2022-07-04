'use strict';
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
function messageQuery(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //Not a Number
  if (guess === 0) {
    // document.querySelector('.message').textContent = '😶‍🌫️Not A Number';
    messageQuery('😶‍🌫️Not A Number');
  }
  //Correct answer
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent =
    //   'Hurrah✌️,your guess is correct';
    messageQuery('Hurrah✌️,your guess is correct');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#00A300';
    document.querySelector('.number').style.width = '30rem';
    //Highscore
    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //wrong answer
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber
      //       ? 'It is smaller than your guess'
      //       : 'It is beyond your guess';
      messageQuery(
        guess > secretNumber
          ? 'It is smaller than your guess'
          : 'It is beyond your guess'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      //   document.querySelector('.message').textContent = 'You Lose the Game';
      messageQuery('You Lose the Game');
      document.querySelector('body').style.backgroundColor = '#D10000';
      document.querySelector('.h1').textContent = 'GAME OVER';
    }
  }
});
//AGAIN click
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.h1').textContent = 'Guess My Number!';
});
