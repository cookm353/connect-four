# connect-four

## Step 1: Planning
* Several ways to make the game board (floats, flexbox, grid, table)
* Played piece could be a `<div>` element placed in the square
* Possible methods for holding game board in memory: array of objects, or 2D object
    * Store each column object in a variable so it can be easily accessed
* Potential game flow:
    * makeBoard() to build the actual game board
    * Click event handler for adding pieces
        * Append the piece to memory first
        * Add token to the game board after
        * Test if player has won with each click
    * Players go back and forth clicking on column to indicate which they want to drop their game piece
    * Use alert() to congratulate player when they win
    * Add a reset button

## Step 2: ES2015
* `var` vs `const` and `let`
* Arrow functions
* rest/spread
* Destructuring
* Maps and sets

## Step 3: makeBoard()
* Implement makeBoard() to create multidimensional array
* Set board's size to constants for height and width
* DONE!

## Step 4: makeHTMLBoard()
* Create an HTML table for a representation of the board
* DONE!

## Step 5: placeInTable() & Piece CSS
* Add `<div>` elements for game pieces
* `<div>` elements should have `piece` class and another class for `player1` or `player2`
* Pieces for player 1 should be a different color from player 2
* Game pieces can be made into circles using `border-radius: 50%;`
* Clicking a column should result in a piece appearing at the bottom
* DONE!

## Step 6: handleClick()
* Fixes needed:
    * Make sure the board is updated with the player number
    * Add a check for if the whole board is filled (use `Array.every()`!)
    * Add code to switch currPlayer between 1 and 2 (ternary function!)

## Step 7: findSpotForCol() and endGame()
* Make game drop piece to lowest empty slot on board
    * Return the y coordinate if there's an empty slot
    * Return null if the column's filled
* Make sure a game's ended, endGame() runs and alerts which player won

## Step 8: Celebrate!
* It works!

## Step 9: Read and Comment checkForWin() (optional)
* Get a better understanding of logic behind checkForWin()

## Step 10: Add animation (optional)
* Animate pieces falling down to their slot
* Use CSS animation features and relative/absolute position