var game;
function generateHTML({type, classes, text = '', specificType = '', id = '', parent = null}) {
    let element = document.createElement(type);
    element.className = classes;
    element.innerText = text;

    if(parent) {
        parent.appendChild(element);
    }

    if(specificType) {
        element.type = specificType;
    }

    if(id >= 0) {
        element.id = id;
    }

    return element
};

    // Procedural rendering
    // title
    let titleContainer = generateHTML({ type: 'div', classes: 'container my-3', parent: app });
    let titleRow = generateHTML({ type: 'div', classes: 'row text-center', parent: titleContainer });
    let titleCol = generateHTML({ type: 'div', classes: 'col', parent: titleRow });
    let titleH1 = generateHTML({ type: 'h1', classes: 'fw-bold', text: 'Tic Tac Toe', parent: titleCol })

    // Player, Wins, Turn
    let playerContainer = generateHTML({ type: 'div', classes: 'container mb-1', parent: app });
    let playerRow = generateHTML({ type: 'div', classes: 'row', parent: playerContainer });
    let playerCol1 = generateHTML({ type: 'div', classes: 'col-12 d-flex justify-content-around', parent: playerRow });
    let player1H2 = generateHTML({ type: 'h2', classes: 'h2', text: 'Player 1', parent: playerCol1 });
    let player2H2 = generateHTML({ type: 'h2', classes: 'h2', text: 'Player 2', parent: playerCol1 });
    let playerCol2 = generateHTML({ type: 'div', classes: 'col-12 d-flex justify-content-around', parent: playerRow });
    let wins1H3 = generateHTML({ type: 'h3', classes: 'h3', text: 'Wins: 0', parent: playerCol2 });
    let wins2H3 = generateHTML({ type: 'h3', classes: 'h3', text: 'Wins: 0', parent: playerCol2 });
    let playerCol3 = generateHTML({ type: 'div', classes: 'col-12 d-flex justify-content-center mt-4', parent: playerRow });
    let turnH4 = generateHTML({ type: 'h4', classes: 'h4', text: 'Current Turn: Player 1', parent: playerCol3 });

    // Game Board
    let boardContainer = generateHTML({ type: 'div', classes: 'container-fluid', parent: app });
    let boardRow = generateHTML({ type: 'div', classes: 'row mx-auto p-4', parent: boardContainer });
    let boardCol1 = generateHTML({ type: 'div', classes: 'col', parent: boardRow });
    let boardCol2 = generateHTML({ type: 'div', classes: 'col-12 mx-auto custMaxWidth', parent: boardRow });
    let boardInnerRow = generateHTML({ type: 'div', classes: 'row', parent: boardCol2});
    let boardCol4 = generateHTML({ type: 'div', classes: 'col', parent: boardRow });


class TicTacToe {
    // Model
    constructor() {
        this.currentPlayer = {name: 'Player 1', icon: 'X', value: 1, wins: 0},
        this.boardArray = [],
        this.gameState = {tilesClicked: 0, reset: false }
    }

    // View
    createBoard() {
        console.log('new board!')
        this.boardArray = [];
        // add tile rendering when figure out assignment of buttons
        for(let i = 0; i < 9; i++) {
            let boardTiles = generateHTML({ type: 'div', classes: 'col-4 p-0', parent: boardInnerRow});
            let boardButtons = generateHTML({ type: 'button', classes: 'btn btn-light shadow-sm', specificType: 'button', id: i, parent: boardTiles});
            boardButtons.addEventListener('click', this.buttonClickHandler.bind(this));
            var sq = new Tile();
            this.boardArray.push(sq);
        };
    }
    

    showWin() {};
    showTie() {};
    showCurrentPlayer(){
        turnH4.innerText = `Current Turn: ${this.currentPlayer.name}`
    };
    updateScore() {};

    // Controller
    init() {
        console.log('starting');
    };
    buttonClickHandler(e) {
        if(this.boardArray[e.target.id].state.isClicked === false) {
            this.boardArray[e.target.id].state.isClicked = true;
            this.boardArray[e.target.id].state.player = this.currentPlayer.icon;
            this.boardArray[e.target.id].state.value = this.currentPlayer.value;
            this.boardArray[e.target.id].state.square = e.target.id;
            this.gameState.tilesClicked++;
            this.switchCurrentPlayer();
            this.boardArray[e.target.id].updateView();
        }           
    }
    switchCurrentPlayer() {
        if(this.currentPlayer.icon === 'X') {
            this.currentPlayer.name = 'Player 2';
            this.currentPlayer.icon = 'O';
            this.currentPlayer.value = 10;
        } else {
            this.currentPlayer.name = 'Player 1';
            this.currentPlayer.icon = 'X';
            this.currentPlayer.value = 1;  
        }
    };
    restart() {
        console.log('cleared board!')
        this.boardArray = [];
        this.tilesClicked = 0;
        createBoard();
    };
    checkWin(){
        console.log('Checking!')
        if(this.gameState.tilesClicked > 4) {
            if(this.boardArray[0].state.value + this.boardArray[1].state.value + this.boardArray[2].state.value === 3) {};
        }
    };
    
}



class Tile {
    // Model
    constructor() {
        this.state = {value: null, player: null, isClicked: false, square: null}
    }

    // View
    updateView() {
        console.log('view')
        let newButton = document.getElementById(this.state.square);
            if(this.state.value == 1) {
                newButton.innerText = 'X';
            } else if (this.state.value == 10) {
                newButton.innerText = 'O';
            } else {
                newButton.innerText = ''
            };
            console.log('view updated!');
    }

    // Controller
    onClick() {};

}

function init() {
    game = new TicTacToe();
    game.createBoard();
    console.log(game);
}

init()