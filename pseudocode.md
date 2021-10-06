# Tic Tac Toe Pseudocode
## Functionality
**Main Goal**: Create a game of Tic Tac Toe by dynamically rendering elements with JavaScript, keeping track of the board status and displaying the state and win conditions.

### Things to Keep in Mind
- Game should let you know who's turn it is
- Game tiles should only be clickable once, after X/O placed it shouldn't be clickable at all
- Game should display winner when win condition met or declare tie if end result is a tie
- Should delegate responsibilities between Model, View and Controller


## MoSCoW
### Must Have 
- Must be made using Object-Oriented Programming design pattern
- Must include at least one Class
- Must display who's turn it is, winner/tie declaration
- Must make tiles clickable only once
- Must have Restart button that doesn't refresh the page

### Should Have
- Should be made using only one div in index.html file
- Should use MVC design pattern for objects and classes
- Should use functions to help generate HTML
- Should only use Bootstrap for styling

### Could Have
- Could abstract data to get win condition
- Could include player name input
- Could keep track of games won
- Could add a link to rules using a modal

### Won't Have
- game board in static HTML
- Animations
- A recreation of Chess

## Model View Controller (MVC)
1. **Model** (stores data)
    - store how many moves have been made, this helps to check for win condition   
    *(input grabbed from controller)*
    - store inputs made on the tiles, has it been clicked and what to assign to the tile i.e. 'X' or 'O'   
    *(input grabbed from controller) (data sent to view)*
    - store state of board/game, who's turn is it based on previous input, what's initially stored in the board if the game is reset   
    *(input grabbed from controller) (data sent to view)*

2. **View** (controls display)
    - Show board differently based on last move that was made  
     *(data grabbed from model)*
    - Show initial state of board when restart is pressed  
     *(data grabbed from model)*
    - Show tile with 'X', 'O' or nothing based on input  
     *(grabbed from model)*
    - Show who's turn it is   
    *(data grabbed from model)*
    - Show win screen or tie screen based on game state   
    *(data grabbed from model)*

3. **Controller** (handles input)
    - Handle tile clicks  
    *(input sent to model)*
    - Handle restart click  
    *(input sent to model)*
    - Tile is clickable once, only one input per tile   
    *(data grabbed from model)*
    - Calculate whether winner or tie can be declared based on moves made  
    *(data grabbed from model)* *(input sent to model if true)*

### Brief Overview of Flow
```
        START
          |
------SHOW BOARD
|         |
|     GET P1 INPUT
|         |
|   CHECK WIN CONDITION--------------
|         |               |         |
|     SHOW BOARD          |  SHOW WIN SCREEN
|         |               |         |
|     GET P2 INPUT        |        END
|         |               |
----CHECK WIN CONDITION----

```

## Classes
1. TicTacToe
    - creates players
    - creates a game board
    - keeps track of who's turn it is
    - Resets game
    - stores and checks win conditions
    - OPTIONAL: stores symbol selected and player name
    - Displays board
    - stores state of the board

2. Tile
    - stores whether it's an 'X', 'O' or empty
    - handles onClick event
    - stores whether it's been clicked
    - generates HTML for each tile
    - updates display based on input

## Objects
1. Game
    - store gameboard
    - check for win/tie and change display if true
    - display initial HTML on load
    - store, update and display score
    - store, update and display current player

2. Player
    - store last player to click on board
    - OPTIONAL: store name and symbol selected

3. Square
    - store value of each tile
    - display 'X' or 'O' depending on value added

4. Board
    - generate tiles and display them
    - generate array and store values in it based off of each square value

## Define Objects and Functions
- Player
    - isLastClick() ---> true/false, did this player just click a tile?
    - `player.name` ---> store player name
    - `player.symbol` ---> store player symbol, symbol will look like 'O' or 'X' and value will be 1 or 0
    - `player.totalWins` ---> store number of wins by this player

- Square
    - onPress() ---> function that adds `player.symbol` to value of square
    - `square.value` ---> value stored in square, starts as empty string
    - updateView() ---> function to DISPLAY 'X', 'O' or blank based on state

- Board
    - createBoard() ---> function to generate HTML for creating board
             and create new tile()
             push tile into array
    - `board.array` ---> array with data from tiles clicked contained in it
    - `board.tilesClicked` ---> stores count of tiles that have been clicked, increments each time onPress(true)

- Game
    - init() ---> function to set onload state, where it starts a new Game and DISPLAY empty board and rest of HTML
    - restart() ---> function to reset board back to an empty array and blank board DISPLAY and start new Game
    - `game.score` ---> increment each time checkWin(true)
    - checkWin() ---> check win conditions and compare them to the current state, IF true also include *who* won
    - checkTie() ---> check tie condition, board.tilesClicked = 9 and checkWin(false), IF true run showTie() 
    - showTie() ---> DISPLAY HTML for tie declaration
    - showWin() ---> DISPLAY HTML for win declaration along with the players name who won
    - updateWin() ---> add to score of player IF checkWin(true)
    - `game.currentPlayer` ---> IF isLastClicked(false), assign to that player
    - showCurrentPlayer() ---> DISPLAY game.currentPlayer with JS generated HTML
    - showScore() ---> DISPLAY game.score with JS generated HTML

## MVC with Objects and Functions
### class Tic Tac Toe
1. **Model**
<!-- the model is the constructor -->
    - Game object
        - game.currentPlayer
        - game.score
    - Board Object
        - board.array
        - board.tilesClicked
    - Player Object
        - player.name
        - player.symbol
        - player.totalWins

2. **View**
<!-- the view is a set of methods in the class -->
    - Board object
        - board.createBoard()
    - Game object
        - game.showTie()
        - game.showWin()
        - game.showCurrentPlayer()
        - game.showScore()

3. **Controller**
<!-- the controller is a set of methods in the class -->
    - Game object
        - game.init()
        - game.restart()
        - game.checkWin()
        - game.checkTie()
        - game.updateWin()

### class Tile
1. **Model**
    - Square object
        - square.value

2. **View**
    - Square object
        - square.updateView()

3. **Controller**
    - Square object
        - square.onPress()
        - square.isLastClick()

## Pseudocode
