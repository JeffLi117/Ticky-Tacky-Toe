var gameBoard = (function() {
    'use strict';

    function displayTiles() {
        let i = 1;
        while (i < 10) {
            let makeNewTile = document.createElement("div");
            makeNewTile.setAttribute("id", `tile_${i}`);
            document.getElementById("gameboard").appendChild(makeNewTile)
            i++;
        }
        let turnDisplay = document.createElement("div")
        turnDisplay.setAttribute("id", "display_turns");
        document.getElementById("gameboard").appendChild(turnDisplay)
    }

    function checkWin() {
        var Tile1 = document.getElementById("tile_1")
        var Tile2 = document.getElementById("tile_2")
        var Tile3 = document.getElementById("tile_3")
        var Tile4 = document.getElementById("tile_4")
        var Tile5 = document.getElementById("tile_5")
        var Tile6 = document.getElementById("tile_6")
        var Tile7 = document.getElementById("tile_7")
        var Tile8 = document.getElementById("tile_8")
        var Tile9 = document.getElementById("tile_9")

        var T1Contents = Tile1.innerHTML
        var T2Contents = Tile2.innerHTML
        var T3Contents = Tile3.innerHTML
        var T4Contents = Tile4.innerHTML
        var T5Contents = Tile5.innerHTML
        var T6Contents = Tile6.innerHTML
        var T7Contents = Tile7.innerHTML
        var T8Contents = Tile8.innerHTML
        var T9Contents = Tile9.innerHTML

        if (
            ((T1Contents === T2Contents) && (T2Contents === T3Contents)) && T1Contents !== '' && T2Contents !== ''&& T3Contents !== ''||
            ((T4Contents === T5Contents) && (T5Contents === T6Contents)) && T4Contents !== '' && T5Contents !== '' && T6Contents !== '' ||
            ((T7Contents === T8Contents) && (T8Contents === T9Contents)) && T7Contents !== '' && T8Contents !== '' && T9Contents !== '' ||
            ((T1Contents === T4Contents) && (T4Contents === T7Contents)) && T1Contents !== '' && T4Contents !== '' && T7Contents !== '' ||
            ((T2Contents === T5Contents) && (T5Contents === T8Contents)) && T2Contents !== '' && T5Contents !== '' && T8Contents !== '' ||
            ((T3Contents === T6Contents) && (T6Contents === T9Contents)) && T3Contents !== '' && T6Contents !== '' && T9Contents !== '' ||
            ((T1Contents === T5Contents) && (T5Contents === T9Contents)) && T1Contents !== '' && T5Contents !== '' && T9Contents !== '' ||
            ((T3Contents === T5Contents) && (T5Contents === T7Contents)) && T3Contents !== '' && T5Contents !== '' && T7Contents !== '')
            {
                document.getElementById("winner").innerHTML = 
                `Congratulations, ${player}! You win!`;
                document.getElementById("playagain").style.display = "flex";
            }
    }

    return {
        displayTiles: displayTiles,
        checkWin: checkWin,
    }
})();

var gameResetVar = (function() {
    'use strict';


    function resetGame() {
        var Ti1 = document.getElementById("tile_1")
        var Ti2 = document.getElementById("tile_2")
        var Ti3 = document.getElementById("tile_3")
        var Ti4 = document.getElementById("tile_4")
        var Ti5 = document.getElementById("tile_5")
        var Ti6 = document.getElementById("tile_6")
        var Ti7 = document.getElementById("tile_7")
        var Ti8 = document.getElementById("tile_8")
        var Ti9 = document.getElementById("tile_9")

        Ti1.innerHTML = '';
        Ti2.innerHTML = '';
        Ti3.innerHTML = '';
        Ti4.innerHTML = '';
        Ti5.innerHTML = '';
        Ti6.innerHTML = '';
        Ti7.innerHTML = '';
        Ti8.innerHTML = '';
        Ti9.innerHTML = '';

        document.getElementById("winner").innerHTML = '';
        document.getElementById("playagain").style.display = "none";
    }

    return {
        resetGame: resetGame,
    }
})();

var boxSelectorVar = (function() {
    'use strict';

    function selectBox(el) {
        if (el.innerHTML != "") {
            return
        } else if (player == 'Player 1') {
            el.innerHTML = "X"
        } else if (player == 'Player 2') {
            el.innerHTML = "O"
        }
    }

    function selectBoxVsComp(el) {
        if (el.innerHTML != "") {
            return
        } else if (player == 'Player 1') {
            el.innerHTML = "X"
        }
    }

    return {
        selectBox: selectBox,
        selectBoxVsComp: selectBoxVsComp,
    }
})();

var playerTurnKeeper = (function() {
    'use strict';

    function selectStartingPlayer() {
        var turnBox = document.getElementById("display_turns");
        player = Math.random() < 0.5 ? 'Player 1' : 'Player 2';
        turnBox.innerHTML = `${player} has the first move!`;
        return player;
    }

    function selectStartingPlayerComp() {
        var turnBox = document.getElementById("display_turns");
        player = Math.random() < 0.5 ? 'Player' : 'Computer';
        turnBox.innerHTML = `${player} has the first move!`;
        return player;
    }

    function toggleTurn() {
        var turnBox = document.getElementById("display_turns");

        if (player == 'Player 1') {
            player = 'Player 2'
        } else if (player == 'Player 2') {
            player = 'Player 1'
        }

        turnBox.innerHTML = `It's ${player}'s turn!`;
    }

    function toggleTurnComp() {
        var turnBoxVsComp = document.getElementById("display_turns");

        if (player == 'Player 1') {
            player = 'Computer'
        } else if (player == 'Computer') {
            player = 'Player 1'
        }

        turnBoxVsComp.innerHTML = `It's ${player}'s turn!`;
    }

    return {
        selectStartingPlayer: selectStartingPlayer,
        selectStartingPlayerComp: selectStartingPlayerComp,
        toggleTurn: toggleTurn,
        toggleTurnComp: toggleTurnComp,
    }
})();

const Player = function(input_name) {
    //playerName = prompt("Please enter player name");
    playerName = input_name
    return {playerName};
}

var opponent = null
var player = null
var Player1 = null
var Player2 = null

var popupPop = (function() {
    'use strict';

    function poppity() {
        document.getElementById("container-popup").style.display = "inline";
        document.getElementById("popup").style.display = "flex";
    }
    
    return {
        poppity: poppity,
    }
})();

let testArray = [];

var computerRandomChoice = (function() {
    'use strict';

    let searchEles = document.getElementById("gameboard").children;

    // creates array of remaining boxes from their ID #
    function remainingBoxes() {
        for (let i = 0; i < searchEles.length; i++) {
            if (searchEles[i].innerHTML === '') {
                testArray.push(searchEles[i].id.slice(5));    
            }
        }
        return testArray;
    }

    // chooses a random # from the remaining boxes above
    function compRNGSelection() {
        const random = Math.floor(Math.random() * testArray.length);
        console.log(random);
        testArray[random]
        //take value of the index from randomly selected # and change
        //innerHTML to computer's X or O
    }

    return {
        remainingBoxes: remainingBoxes,
        compRNGSelection: compRNGSelection,
    }
})();

let humanOppSelect = document.getElementById("humanopp")
let compOppSelect = document.getElementById("compopp")

humanOppSelect.addEventListener('click', () => {
    document.getElementById("container-popup").style.display = "none";
    document.getElementById("popup").style.display = "none";
    opponent = 'human';
    gameBoard.displayTiles();
    Player1 = Player('hi'); 
    Player2 = Player('no');
    playerTurnKeeper.selectStartingPlayer();
})

compOppSelect.addEventListener('click', () => {
    document.getElementById("container-popup").style.display = "none";
    document.getElementById("popup").style.display = "none";
    opponent = 'computer';
    gameBoard.displayTiles();
    Player1 = Player('hi');
    Player2 = opponent;
    /* playerTurnKeeper.selectStartingPlayerComp(); */
    if (playerTurnKeeper.selectStartingPlayerComp() == 'Computer') {
        computerRandomChoice.remainingBoxes();
        computerRandomChoice.compRNGSelection();
    }
    /* computerRandomChoice.remainingBoxes();
    computerRandomChoice.compRNGSelection(); */
})


let newGameBtn = document.getElementById("newgame")
newGameBtn.addEventListener('click', () => {
    let tilesHolder = document.getElementById("gameboard")
    if (tilesHolder.childElementCount == 10) {
        return;
    } else {
        popupPop.poppity();
        }
    }
)

// Playing the game and selecting which box
let boxSelect = document.getElementById("gameboard")
boxSelect.addEventListener('click', (e) => {
    if (e.target.id.slice(0,4) == "tile") {
        let winningText = document.getElementById("winner")

        if (e.target.innerHTML !== "" || winningText.innerHTML !== "") {
            return
        } else if (opponent == "human") {
            boxSelectorVar.selectBox(e.target); 
            gameBoard.checkWin();
            if (winningText.innerHTML != "") {
                return
            } else {
                playerTurnKeeper.toggleTurn()
            };
        } else if (opponent == "computer") {
            boxSelectorVar.selectBoxVsComp(e.target); 
            gameBoard.checkWin();
            if (winningText.innerHTML != "") {
                return
            } else {
                playerTurnKeeper.toggleTurnComp()
            };
        }
    }
})

let playItAgainBtn = document.getElementById("playagain")
playItAgainBtn.addEventListener('click', () => {
    gameResetVar.resetGame();
})
