// View
function generateHTML({type, classes, text = '', specificType = '', parent = null}) {
    let element = document.createElement(type);
    element.className = classes;
    element.innerText = text;

    if(parent) {
        parent.appendChild(element);
    }

    if(specificType) {
        element.type = specificType;
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

// Dynamic rendering of board tiles
for(let i = 0; i < 9; i++) {
    let boardTiles = generateHTML({ type: 'div', classes: 'col-4 p-0', parent: boardInnerRow});
    let boardButtons = generateHTML({ type: 'button', classes: 'btn btn-light shadow-sm', specificType: 'button', parent: boardTiles});
}