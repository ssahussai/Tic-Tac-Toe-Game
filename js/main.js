/*----- constants -----*/
const PLAYER = {
    '1': 'X',
    '-1': 'O'
}; 

  /*----- app's state (variables) -----*/
let turn, winner, gameboard;

  /*----- cached element references -----*/
  // We need to cache the element ref to message so we can display who's turn, or if it's a tie
  const gameboardDOM = document.querySelectorAll('.square');

  /*
  NodeList(9) 
  [div.row1.square.textContent = PLAYER['1'], div.row1.square, div.row1.square, 
    div.row2.square, div.row2.square, div.row2.square, 
    div.row3.square, div.row3.square, div.row3.square]
   */

  /*----- event listeners -----*/
  document.getElementById('gameboard').addEventListener('click', handleClick); //already initialized and called the init function
  
  /*----- functions -----*/
  init(); //init gets the game ready to play
  
  
  function init() {
      turn = PLAYER['1']; // this sets the first turn to 'X'
      gameboard = [
          [null, null, null],
          [null, null, null],
          [null, null, null]
      ];
      winner = false;
      render();
   //whose turn is it
   //clear the board at the end of the game = reset
   //call render again and transfer those game to DOM 
  }
  
  
  function handleClick(event) {
    // We need to identify which square was clicked
    // we need to map that same position to the gameboard array in javascript
    // we need to check who's turn it is
    // ....i.e. change the null value in the array to 1 or -1 depending on who's turn
    // we need to to call render
  }

  function checkWinner() {
      // Check the gameboard array for the following sequences:
      // 00, 01, 02
      // 00, 01, 02
      // Math.abs 
  }

  function render() {
    // render needs to loop through the gameboard to check for 1 or -1 or null
    // if it's 1, change textContent to X, we can map to our loopup object
    // if it's -1, change textContent to O
    // if it's null, change textContent = ""
    // We need to check for winner - call another function
    // We need to switch turns after the play has been made
    // we'll need to change the textCOntent of message to the turn or ties
  }
  
  