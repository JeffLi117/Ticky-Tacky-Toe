var gameBoard = (function() {
    'use strict';

    function displayTiles() {
        let i = 1;
        while (i < 10) {
            let makeNewTile = document.createElement("div");
            makeNewTile.setAttribute("id", `tile_${i}`)
            /* makeNewTile.className = `tile_${i}`; */
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
                alert(`Congratulations, ${player}! You win!`)
            }/* 
        else if (
            T1Contents == T2Contents == T3Contents ||       T4Contents == T5Contents == T6Contents || 
            T7Contents == T8Contents == T9Contents || T1Contents == T4Contents == T7Contents || T2Contents == T5Contents == T8Contents || T3Contents == T6Contents == T9Contents ||
            T1Contents == T5Contents == T9Contents || 
            T3Contents == T5Contents == T7Contents) {
                alert(`Congratulations, ${player}! You win!`)
            } */
    }

    return {
        displayTiles: displayTiles,
        checkWin: checkWin,
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

    return {
        selectBox: selectBox,
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

    function toggleTurn() {
        var turnBox = document.getElementById("display_turns");

        if (player == 'Player 1') {
            player = 'Player 2'
        } else if (player == 'Player 2') {
            player = 'Player 1'
        }

        turnBox.innerHTML = `It's ${player}'s turn!`;
    }

    return {
        selectStartingPlayer: selectStartingPlayer,
        toggleTurn: toggleTurn,
    }
})();

const Player = function(input_name) {
    //playerName = prompt("Please enter player name");
    playerName = input_name
    return {playerName};
}

var player = null
var Player1 = null
var Player2 = null

let newGameBtn = document.getElementById("newgame")
newGameBtn.addEventListener('click', () => {
    let tilesHolder = document.getElementById("gameboard")
    if (tilesHolder.childElementCount == 10) {
        return;
    } else {
        gameBoard.displayTiles();
        Player1 = Player('hi'); 
        Player2 = Player('no');
        playerTurnKeeper.selectStartingPlayer();
    }
})

let boxSelect = document.getElementById("gameboard")
boxSelect.addEventListener('click', (e) => {
    if (e.target.id.slice(0,4) == "tile") {
        if (e.target.innerHTML != "") {
            return
        } else {
            boxSelectorVar.selectBox(e.target); 
            playerTurnKeeper.toggleTurn();
            gameBoard.checkWin();
        }
    }
})