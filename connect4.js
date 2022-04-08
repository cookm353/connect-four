/*
Just make the pieces go to the bottom instead of staying at the top and you're
golden!
/*


/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
const board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // Create nested array representing game board
  for (let y = 0; y < HEIGHT; y ++) {
    board.push([])
    for (let x = 0; x < WIDTH; x ++) {
      board[y].push(null)
    }
  }
}


/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  const htmlBoard = document.querySelector("#board")

  // Create top row, adding ID, adding click event listener
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  // Make table header cells, assign ID, add to top row, add top row to table
  for (let x = 0; x < WIDTH; x++) {
    const headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // Make rows for body, add cells, add ID to each w/ coordinate, add to table
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    row.className = "tbody"
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${HEIGHT - 1 - y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}


/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  for (let col = 0; col < HEIGHT; col++) {
    // if ( board[col][x] === "bloop" ) { 
    if ( !board[col][x]) { 
      return col;
    }
  }
  return null;
}


/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
  const tile = document.getElementById(`${y}-${x}`);
  const newGamePiece = document.createElement("div");
  newGamePiece.className = "piece";

  currPlayer === 1 ? newGamePiece.classList.add("p1") : 
    newGamePiece.classList.add("p2");

  if (currPlayer === 1) newGamePiece.classList.add("p1");
  else newGamePiece.classList.add("p2");

  // console.log(tile)
  tile.appendChild(newGamePiece);
}


/** endGame: announce game end */

function endGame(msg) {
  const top = document.querySelector("#column-top")
  top.removeEventListener("click", handleClick)
  alert(msg);
}


/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  let x = +evt.target.id;
  console.log(evt.target)

  // get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);
  board[y][x] = currPlayer;


  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame
  if (board.every(cell => cell === true)) endGame("Tie!")

  // switch players
  currPlayer === 1 ? currPlayer = 2 : currPlayer = 1;
}


/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // Nested for loop to check if player has won
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      
      const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();


// Making title and game fade in

const titleFadeIn = setTimeout(() => {
  const title = document.querySelector("h1");
  title.style.transition = "1s"
  title.style.opacity = "100%"
}, 1000);

const gameFadeIn = setTimeout(() => {
  const gameBoard = document.querySelector("#board");
  gameBoard.style.transition = "2s"
  gameBoard.style.opacity = "100%"
}, 2000);
