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
1. Model
    - win conditions