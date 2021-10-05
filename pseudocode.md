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
          |
      SHOW BOARD
```

## Classes
1. TicTacToe
    - creates a player
    - creates a game board
    - keeps track of who's turn it is
    - Resets game
    - stores and checks win conditions
    - OPTIONAL: stores symbol selected and player name
    - Displays board
    - stores state of the board

2. Tile
    - stores whether it's an 'X', 'O' or empty

## Objects
1. Game
    - store gameboard
2. Player
    - store last player to click on board
    - OPTIONAL: store name and symbol selected

3. Square
    - 


## Define Objects and Functions
- Player
    - isLastClick() ---> true/false, did this player just click a tile?
    - `player.name` ---> store player name
    - `player.symbol` ---> store player symbol, symbol will look like 'O' or 'X' and value will be 1 or 0
    - `player.totalWins` ---> store number of wins by this player

- Square
    - onPress() ---> function that adds `player.symbol` to value of square
    - `square.value` ---> value stored in square, starts as empty string

- Board
    - 
