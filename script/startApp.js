'use strict';

let btnStart = document.getElementById('btn-start'); 
let ball = document.getElementById('img-ball');

function startApp() {
  btnStart.classList.add('display-none');
  ball.classList.add('display-none');
  createGame();
}

btnStart.addEventListener('click', startApp);