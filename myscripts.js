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
            } else if (
                (((T1Contents !== "" && T2Contents !== "") &&
                (T3Contents !== "" && T4Contents !== "")) &&
                ((T5Contents !== "" && T6Contents !== "") &&
                (T7Contents !== "" && T8Contents !== ""))) &&
                T9Contents !== "") {
                document.getElementById("winner").innerHTML = 
                `Looks like it's a tie. Try again!`;
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

        Ti1.remove();
        Ti2.remove();
        Ti3.remove();
        Ti4.remove();
        Ti5.remove();
        Ti6.remove();
        Ti7.remove();
        Ti8.remove();
        Ti9.remove();

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
        } else if (player == `${Player1.playerName}`) {
            el.innerHTML = "X"
        } else if (player == `${Player2.playerName}`) {
            el.innerHTML = "O"
        }
    }

    function selectBoxVsComp(el) {
        if (el.innerHTML != "") {
            return
        } else if (player == 'Player') {
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
        player = Math.random() < 0.5 ? `${Player1.playerName}` : `${Player2.playerName}`;
        turnBox.innerHTML = `${player} has the first move!`;
        return player;
    }

    function selectStartingPlayerComp() {
        var turnBox = document.getElementById("display_turns");
        player = Math.random() < 0.5 ? 'Player' : 'Computer';
        turnBox.innerHTML = `${player} has the first move!`;
        console.log(`${player} has the first move! via selectStartingPlayerComp`);
        return player;
    }

    function toggleTurn() {
        var turnBox = document.getElementById("display_turns");

        if (player == `${Player1.playerName}`) {
            player = `${Player2.playerName}`
        } else if (player == `${Player2.playerName}`) {
            player = `${Player1.playerName}`
        }

        turnBox.innerHTML = `It's ${player}'s turn!`;
    }

    function toggleTurnComp() {
        var turnBoxVsComp = document.getElementById("display_turns");

        if (player == 'Player') {
            player = 'Computer'
        } else if (player == 'Computer') {
            player = 'Player'
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
    /* playerName = prompt("Please enter player name"); */
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

    function enteringNamePop() {
        document.getElementById("enter-names").style.display = "flex";
    }

    function hideStartGame() {
        document.getElementById("newgame").style.visibility = "hidden";
    }
    
    return {
        poppity: poppity,
        enteringNamePop: enteringNamePop,
        hideStartGame: hideStartGame,
    }
})();

let compBlock = '';
let testArray = [];
let playerFilled = [];

var computerRandomChoice = (function() {
    'use strict';

    let searchEles = document.getElementById("gameboard").children;

    // creates array of remaining boxes from their ID #
    function remainingBoxes() {
        testArray = [];
        for (let i = 0; i < searchEles.length; i++) {
            if (searchEles[i].innerHTML === '' && searchEles[i].id !== "display_turns") {
                testArray.push(searchEles[i].id.slice(5));    
            }
        }
        return testArray;
    }

    function blockThird() {
        playerFilled = [];
        for (let i = 0; i < searchEles.length; i++) {
            if (searchEles[i].innerHTML === 'X' && searchEles[i].id !== "display_turns") {
                playerFilled.push(searchEles[i].id.slice(5));    
            }
        }
        return playerFilled;
    }

    // logic for computer to not lose immediately, if possible
    function dontLose() {

        var corner1 = document.getElementById("tile_1")
        var mid1 = document.getElementById("tile_2")
        var corner2 = document.getElementById("tile_3")
        var mid2 = document.getElementById("tile_4")
        var center = document.getElementById("tile_5")
        var mid3 = document.getElementById("tile_6")
        var corner3 = document.getElementById("tile_7")
        var mid4 = document.getElementById("tile_8")
        var corner4 = document.getElementById("tile_9")

        if (
            corner2.innerHTML === '' && (((corner1.innerHTML == mid1.innerHTML) && (corner1.innerHTML !== '' && mid1.innerHTML !== '')) || 
            ((mid3.innerHTML == corner4.innerHTML) && (corner4.innerHTML !== '' && mid3.innerHTML !== '')) || 
            ((center.innerHTML == corner3.innerHTML) && (corner3.innerHTML !== '' && center.innerHTML !== '')))
        ) {
            compBlock = 3;
            console.log("dontLose was triggered for tile 3")
        } else if (
            corner1.innerHTML === '' && (((corner2.innerHTML == mid1.innerHTML) && (corner2.innerHTML !== '' && mid1.innerHTML !== '')) || 
            ((mid2.innerHTML == corner3.innerHTML) && (corner3.innerHTML !== '' && mid2.innerHTML !== '')) || 
            ((center.innerHTML == corner4.innerHTML) && (corner4.innerHTML !== '' && center.innerHTML !== '')))
        ) {
            compBlock = 1;
            console.log("dontLose was triggered for tile 1")
        } else if (
            corner3.innerHTML === '' && (((corner1.innerHTML == mid2.innerHTML) && (corner1.innerHTML !== '' && mid2.innerHTML !== '')) || 
            ((mid4.innerHTML == corner4.innerHTML) && (corner4.innerHTML !== '' && mid4.innerHTML !== '')) || 
            ((center.innerHTML == corner2.innerHTML) && (corner2.innerHTML !== '' && center.innerHTML !== '')))
        ) {
            compBlock = 7;
            console.log("dontLose was triggered for tile 7")
        } else if (
            corner4.innerHTML === '' && (((corner2.innerHTML == mid3.innerHTML) && (corner2.innerHTML !== '' && mid3.innerHTML !== '')) || 
            ((mid4.innerHTML == corner3.innerHTML) && (corner3.innerHTML !== '' && mid4.innerHTML !== '')) || 
            ((center.innerHTML == corner1.innerHTML) && (corner1.innerHTML !== '' && center.innerHTML !== '')))
        ) {
            compBlock = 9;
            console.log("dontLose was triggered for tile 9")
        } else if (
            mid1.innerHTML === '' && (((corner1.innerHTML == corner2.innerHTML) && (corner2.innerHTML !== '' && corner1.innerHTML !== '')) ||  
            ((center.innerHTML == mid4.innerHTML) && (mid4.innerHTML !== '' && center.innerHTML !== '')))
        ) {
            compBlock = 2;
            console.log("dontLose was triggered for tile 2")
        } else if (
            mid4.innerHTML === '' && (((corner4.innerHTML == corner3.innerHTML) && (corner3.innerHTML !== '' && corner4.innerHTML !== '')) ||  
            ((center.innerHTML == mid1.innerHTML) && (mid1.innerHTML !== '' && center.innerHTML !== '')))
        ) {
            compBlock = 8;
            console.log("dontLose was triggered for tile 8")
        } else if (
            mid2.innerHTML === '' && (((corner1.innerHTML == corner3.innerHTML) && (corner3.innerHTML !== '' && corner1.innerHTML !== '')) ||  
            ((center.innerHTML == mid3.innerHTML) && (mid3.innerHTML !== '' && center.innerHTML !== '')))
        ) {
            compBlock = 4;
            console.log("dontLose was triggered for tile 4")
        } else if (
            mid3.innerHTML === '' && (((corner4.innerHTML == corner3.innerHTML) && (corner3.innerHTML !== '' && corner4.innerHTML !== '')) ||  
            ((center.innerHTML == mid2.innerHTML) && (mid2.innerHTML !== '' && center.innerHTML !== '')))
        ) {
            compBlock = 6;
            console.log("dontLose was triggered for tile 6")
        } else if (
            center.innerHTML === '' && (((corner1.innerHTML == corner3.innerHTML) && (corner3.innerHTML !== '' && corner1.innerHTML !== '')) || ((corner2.innerHTML == corner4.innerHTML) && (corner2.innerHTML !== '' && corner4.innerHTML !== '')) || 
            ((mid1.innerHTML == mid4.innerHTML) && (mid4.innerHTML !== '' && mid1.innerHTML !== '')) || ((mid2.innerHTML == mid3.innerHTML) && (mid3.innerHTML !== '' && mid2.innerHTML !== '')))
        ) {
            compBlock = 5;
            console.log("dontLose was triggered for tile 5")
        }
        return compBlock
    }
    
    // chooses a random # from the remaining boxes above
    function compRNGSelection() {
        const random = Math.floor(Math.random() * testArray.length);
        if (compBlock !== '') {
            document.getElementById(`tile_${compBlock}`).innerHTML = "O";
            console.log(`The computer purposefully selected tile_${compBlock}`);
            compBlock = '';
        } else {
        document.getElementById(`tile_${testArray[random]}`).innerHTML = "O";
        console.log(`The computer randomly selected tile_${testArray[random]}`);
        }
    }

    return {
        remainingBoxes: remainingBoxes,
        compRNGSelection: compRNGSelection,
        blockThird: blockThird,
        dontLose: dontLose,
    }
})();

let humanOppSelect = document.getElementById("humanopp")
let compOppSelect = document.getElementById("compopp")
let twoNamesEnteredStart = document.getElementById("gameon")

humanOppSelect.addEventListener('click', () => {
    if (document.getElementById("enter-names").style.display == "") {
        popupPop.enteringNamePop();
    }
})

twoNamesEnteredStart.addEventListener('click', () => {
    var P1name = document.getElementById("P1name").value
    var P2name = document.getElementById("P2name").value
    if (P1name == '' || P2name == '') {
        alert("Please enter names for both players!")
    } else {
        popupPop.hideStartGame();
        Player1 = Player(`${P1name}`);
        Player2 = Player(`${P2name}`);
        console.log(Player1.playerName + " vs " + Player2.playerName);
        document.getElementById("container-popup").style.display = "none";
        document.getElementById("popup").style.display = "none";
        document.getElementById("enter-names").style.display == "none";
        opponent = 'human';
        gameBoard.displayTiles();
        playerTurnKeeper.selectStartingPlayer();
    }
})

compOppSelect.addEventListener('click', () => {
    popupPop.hideStartGame();
    document.getElementById("container-popup").style.display = "none";
    document.getElementById("popup").style.display = "none";
    opponent = 'computer';
    gameBoard.displayTiles();
    Player1 = Player('testname');
    playerTurnKeeper.selectStartingPlayerComp();
    if (player == 'Computer') {
        const handle = setTimeout(() => {
            computerRandomChoice.remainingBoxes();
            computerRandomChoice.compRNGSelection();
            playerTurnKeeper.toggleTurnComp();
            clearTimeout(handle);
          }, 2500);
    } else if (player == 'Player') {
        return
    } else {
        console.log("This is a big oops")
    }
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
            if (player == "Computer") {
                return
            } else {
                boxSelectorVar.selectBoxVsComp(e.target); 
                gameBoard.checkWin();
                if (winningText.innerHTML != "") {
                    return
                } else {
                    playerTurnKeeper.toggleTurnComp();

                    const handle = setTimeout(() => {
                        computerRandomChoice.blockThird();
                        console.table(playerFilled);
                        computerRandomChoice.remainingBoxes();
                        computerRandomChoice.dontLose();
                        computerRandomChoice.compRNGSelection();
                        gameBoard.checkWin();
                        if (winningText.innerHTML == "") {
                            playerTurnKeeper.toggleTurnComp();
                        }
                        clearTimeout(handle);
                    }, 2000);
                };
            }
        }
    }
})

let playItAgainBtn = document.getElementById("playagain")
playItAgainBtn.addEventListener('click', () => {
    gameResetVar.resetGame();
    document.getElementById("enter-names").style.display = '';
    document.getElementById("display_turns").innerHTML = '';
    popupPop.poppity();
})
