// HTML DOM variables

message = document.getElementById('message-to-player');
p1Score = document.getElementById('player-one-tally');
p2Score = document.getElementById('player-two-tally');
drawCounterText = document.getElementById('draw-count');
gamesPlayedText = document.getElementById('games-played-text');
resetButton = document.getElementById("reset-button");
inputBox = document.getElementById('input-box');
//points counter 
let p1Total = 0;
let p2Total = 0;
let drawCount = 0;
let gamesPlayed = 0;

let move = ['rock', 'paper', 'scissors'];
// 0 rock, 1 paper, 2 scissors
//  > -> beats so...  2 > 1 > 0 > 2

//random function
function random(){
    return Math.floor(Math.random() * 3);
}

//

//
//
let p1 = undefined;

//consider refactoring?
function getWinner (p1){
    let p2 = move[random()];
    gamesPlayed++
    gamesPlayedText.innerHTML = `Games played: ${gamesPlayed}`
    if (p1 === p2){
        message.innerHTML = `Computer chooses ${p2}, DRAW`
        drawCount++;
        drawCounterText.innerHTML = `Draw count: ${drawCount}`
        return '0'
    } else if (p1 === move[0]){
         if(p2 === move[2]){
            message.innerHTML = `Computer chooses ${p2}, You win`;
            p1Total++;
            p1Score.innerHTML = `Player 1 score: ${p1Total}`;
            return "+1"

        } else if (p2 === move[1]){
            message.innerHTML = `Computer chooses ${p2}, You Lose`;
            p2Total++;
            p2Score.innerHTML = `Player 2 score: ${p2Total}`;
            return "-1"
        }
    }else if (p1 === move[1]){
        if(p2 === move[0]){
            message.innerHTML = `Computer chooses ${p2}, You win`;
            p1Total++;
            p1Score.innerHTML = `Player 1 score: ${p1Total}`;
            
            return "+1"
       } else if (p2 === move[2]){
            message.innerHTML = `Computer chooses ${p2}, You win`;
            p2Total++;
            p2Score.innerHTML = `Player 2 score: ${p2Total}`;
            return "-1"
       }
    } else if (p1 === move[2]){
        if(p2 === move[1]){
            message.innerHTML = `Computer chooses ${p2}, You win`;
            p1Total++;
            p1Score.innerHTML = `Player 1 score: ${p1Total}`;
            return "+1"
       } else if (p2 === move[0]){
        message.innerHTML = `Computer chooses ${p2}, You Lose`;
        p2Total++;
        p2Score.innerHTML = `Player 2 score: ${p2Total}`;
        return "-1"
       }
    }
}


function reset() {
    p1Total = 0;
    p2Total = 0;
    drawCount = 0;
    gamesPlayed = 0;
    p1Score.innerHTML = `Player 1 score: ${0}`;
    p2Score.innerHTML = `Player 2 score: ${0}`;
    gamesPlayedText.innerHTML = `Games played: ${0}`;
    drawCounterText.innerHTML = `Draw count: ${0}`;   
}

resetButton.addEventListener("click", reset);