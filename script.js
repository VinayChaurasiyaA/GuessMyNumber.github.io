'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = `Correct Number Guessed!`;
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// math.random generartes a number betweeen 0 to 1 conly to get it from 1 to 20 we multiply by 20 and to have a non floating we use trunc
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
// handling click events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // if guesss is not trues like empty
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number is inputed';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `🥳Correct Number`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess is wrong!
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈Too High!' : '📉Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost th game';
      document.querySelector('.score').textContent = 0;
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  // else if(guess>secretNumber){
  //     if(score>1){
  //     document.querySelector('.message').textContent = '📈Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     }else{
  //         document.querySelector('.message').textContent = 'You lost the game!';
  //         document.querySelector('.score').textContent = 0;
  //     }
  // }
  // else if(guess<secretNumber){
  //     if(score>1){
  //     document.querySelector('.message').textContent = '📉Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     }else{
  //         document.querySelector('.message').textContent = 'You lost the game!';
  //         document.querySelector('.score').textContent = 0;
  //     }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log(`Clicked on again`);
  document.querySelector('.message').textContent = `Start guessing`;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = null;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
