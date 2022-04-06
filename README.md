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

## Step 3: makeBoard()

## Step 4: makeHTMLBoard()

## Step 5: placeInTable() & Piece CSS
* Game pieces can be created using `border-radius: 50%;`

## Step 6: handleClick()

## Step 7: findSpotForCol() and endGame()

## Step 8: Celebrate!

## Step 9: Read and Comment checkForWin() (optional)

## Step 10: Add animation (optional)