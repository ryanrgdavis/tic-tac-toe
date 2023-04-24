// Create variables
var currentPlayer = 'X';
var gameEnded = false;

// Create a variable for each div element here
var box1 = document.querySelector('#box-0')
var box2 = document.querySelector('#box-1')
var box3 = document.querySelector('#box-2')
var box4 = document.querySelector('#box-3')
var box5 = document.querySelector('#box-4')
var box6 = document.querySelector('#box-5')
var box7 = document.querySelector('#box-6')
var box8 = document.querySelector('#box-7')
var box9 = document.querySelector('#box-8')
var allBoxes = document.querySelectorAll('table');
var emptyBoxes = 0;

// Add event listener to boxes
var boxes = document.querySelector('table');
boxes.addEventListener('click', function(event) {
    var clickedBox = event.target;
    console.log(clickedBox);
    if(clickedBox.textContent === '') {
      if(currentPlayer === 'X'){
          clickedBox.textContent = "X";
          if (checkForWinner()) {
            winner.textContent = 'Player ' + currentPlayer + ' wins!'
            gameEnded = true;
          }
          else if (checkForDraw()) {
            winner.textContent = 'Draw!';
            gameEnded = true;
          }
          currentPlayer = 'O';
      } else {
        if(currentPlayer === 'O'){
          clickedBox.textContent = "O";
          if (checkForWinner()) {
            winner.textContent = 'Player ' + currentPlayer + ' wins!'
            gameEnded = true;
          }
          else if (checkForDraw()) {
            winner.textContent = 'Draw!';
            gameEnded = true;
          }
          currentPlayer = 'X';
        }
      }
    }  
  });

// Function to check for winner
function checkForWinner() {
  if (box1.textContent === box2.textContent && box2.textContent === box3.textContent && box3.textContent !== '') {
    box1.style.backgroundColor = 'green';
    box2.style.backgroundColor = 'green';
    box3.style.backgroundColor = 'green';
    winner.textContent = 'Player ' + currentPlayer + ' wins!'
    gameEnded = true;
  } else if (box4.textContent === box5.textContent && box5.textContent === box6.textContent && box6.textContent !== '') {
    box4.style.backgroundColor = 'green';
    box5.style.backgroundColor = 'green';
    box6.style.backgroundColor = 'green';
    winner.textContent = 'Player ' + currentPlayer + ' wins!'
    gameEnded = true;
  } else if (box7.textContent === box8.textContent && box8.textContent === box9.textContent && box9.textContent !== '') {
    box7.style.backgroundColor = 'green';
    box8.style.backgroundColor = 'green';
    box9.style.backgroundColor = 'green';
    winner.textContent = 'Player ' + currentPlayer + ' wins!'
    gameEnded = true;
  } else if (box1.textContent === box4.textContent && box4.textContent === box7.textContent && box7.textContent !== '') {
    box1.style.backgroundColor = 'green';
    box4.style.backgroundColor = 'green';
    box7.style.backgroundColor = 'green';
    winner.textContent = 'Player ' + currentPlayer + ' wins!'
    gameEnded = true;
  } else if (box2.textContent === box5.textContent && box5.textContent === box8.textContent && box8.textContent !== '') {
    box2.style.backgroundColor = 'green';
    box5.style.backgroundColor = 'green';
    box8.style.backgroundColor = 'green';
    winner.textContent = 'Player ' + currentPlayer + ' wins!'
    gameEnded = true;
  } else if (box3.textContent === box6.textContent && box6.textContent === box9.textContent && box9.textContent !== '') {
    box3.style.backgroundColor = 'green';
    box6.style.backgroundColor = 'green';
    box9.style.backgroundColor = 'green';
    winner.textContent = 'Player ' + currentPlayer + ' wins!'
    gameEnded = true;
  } else if (box1.textContent === box5.textContent && box5.textContent === box9.textContent && box9.textContent !== '') {
    box1.style.backgroundColor = 'green';
    box5.style.backgroundColor = 'green';
    box9.style.backgroundColor = 'green';
    winner.textContent = 'Player ' + currentPlayer + ' wins!'
    gameEnded = true;
  } else if (box3.textContent === box5.textContent && box5.textContent === box7.textContent && box7.textContent !== '') {
    box3.style.backgroundColor = 'green';
    box5.style.backgroundColor = 'green';
    box7.style.backgroundColor = 'green';
    winner.textContent = 'Player ' + currentPlayer + ' wins!'
    gameEnded = true;
  }
}

// Function to check for draw
function checkForDraw() {
  for(var i = 0; i < allBoxes.length; i++) {
    if(allBoxes[i].textContent !== '') {
      emptyBoxes++;
    }
  }
  if(emptyBoxes === 9 && !gameEnded) {
    winner.textContent = 'Draw!';
    gameEnded = true;
  }
}