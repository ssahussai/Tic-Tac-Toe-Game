/*----- constants -----*/
const PLAYER = {
    '1': 'X',
    '-1': 'O',
    'null': '' 
}; 

const possibleWinCombo = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
  /*----- app's state (variables) -----*/
let turn, winner, gameboard;

  /*----- cached element references -----*/
  // We need to cache the 9 elements ref to message so we can display who's turn, or if it's a tie 
  const squares = document.querySelectorAll('.square');
  const message = document.getElementById('message');


  /*----- event listeners -----*/
  document.getElementById('gameboard').addEventListener('click', handleClick); //event listener for gameboard 
  document.getElementById('reset').addEventListener('click', init); //best way to reset the game is calling the init() function

  /*----- functions -----*/
  init(); //this makes the game to start as soon as the game loads. This initialize the stage and call render  
  
  
  function init() {
      turn = 1 
      gameboard = [ null, null, null, null, null, null, null, null, null ];
      winner = false;
      render();
  }
  
  //handleClick function will tell you what to happen after user clicks the box 
  function handleClick(evt) {
    const boxSelected = parseInt(evt.target.dataset.index); //selecting boxes 
    // if(winner || gameboard[boxSelected]) return;
    gameboard[boxSelected] = turn;
    turn *= -1
    winner = winningLogic();
    render();
    }

  function winningLogic() {
      for (let i = 0; i < possibleWinCombo.length; i++) {
        if(Math.abs(gameboard[possibleWinCombo[i][0]] + 
                    gameboard[possibleWinCombo[i][1]] + 
                    gameboard[possibleWinCombo[i][2]]) === 3) return gameboard[possibleWinCombo[i][0]];
      } if (gameboard.includes(null)) return false;
      return 'T';
  }


    function render() {
      for (let i = 0; i < gameboard.length; i++){
        squares[i].textContent = PLAYER[gameboard[i]];
      };
      if (!winner) {
        message.textContent = `Now it's ${PLAYER[turn]}'s turn'`;
      } else if (winner === 'T') {
        message.textContent = 'This game is a TIE';
      } else {
        message.textContent = `Congratulations! ${PLAYER[winner]} won!`
      }
    } 

  
  