const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}

/*const p1Button  = document.querySelector('#p1Button');
const p2Button  = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');*/
const resetButton = document.querySelector('#reset');
const playToSelect = document.querySelector('#playto');

/*let p1Score   = 0;
let p2Score   = 0;*/
let winScore  = parseInt(playToSelect.value);;
let gameOver  = false;

function updateScores(player, opponent) {
  if(player.score !== winScore && gameOver !== true) {
    player.score +=1;
    player.display.textContent = player.score;
  }
  if(player.score === winScore){
    gameOver = true;
    player.display.classList.add('has-text-success');
    opponent.display.classList.add('has-text-danger');
    player.button.disabled = true;
    opponent.button.disabled = true;
  }
}

p1.button.addEventListener('click', () => {updateScores(p1, p2)});
p2.button.addEventListener('click', () => {updateScores(p2, p1)});

/*p1Button.addEventListener('click', () => {
  if(p1Score !== winScore && gameOver !== true) {
    p1Score +=1;
    p1Display.textContent = p1Score;
  }
  if(p1Score === winScore){
    gameOver = true;
    p1Display.classList.add('has-text-success');
    p2Display.classList.add('has-text-danger');
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});

p2Button.addEventListener('click', () => {
  if(p2Score !== winScore && gameOver !== true) {
    p2Score +=1;
    p2Display.textContent = p2Score;
  }
  if(p2Score === winScore){
    gameOver = true;
    p1Display.classList.add('has-text-danger');
    p2Display.classList.add('has-text-success');
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});*/

playToSelect.addEventListener('change', () => {
  /*alert(playToSelect.value);*/
  winScore = parseInt(playToSelect.value);
  reset();
});

resetButton.addEventListener('click', reset);

function reset(){
  gameOver = false;
  for(let p of [p1,p2]){
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success','has-text-danger');
    p.button.disabled = false;
  }

  /*p1.score = 0;
  p2.score = 0;
  gameOver = false;
  p1.display.textContent = p1.score;
  p2.display.textContent = p2.score;
  p1.display.classList.remove('has-text-success','has-text-danger');
  p2.display.classList.remove('has-text-success','has-text-danger');
  p1.button.disabled = false;
  p2.button.disabled = false;*/
}