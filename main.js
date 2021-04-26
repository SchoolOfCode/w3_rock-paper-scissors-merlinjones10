
//points counter 
p1Total = 0;
p2Total = 0;


let move = ['rock', 'paper', 'scissors'];
// 0 rock, 1 paper, 2 scissors
//  > -> beats 
//  2 > 1 > 0 > 2


//random function
function random(){
    return Math.floor(Math.random() * 3);
}
// display moves 
function displayMoves() {
    console.log(p1);
    console.log(p2);
    
}
// function to check correct input
function input(){
    playerInput = prompt('rock, paper, scissors').toLowerCase();
    // console.log(move.includes(p1));
    if (move.includes(playerInput)){
        return playerInput;
    } else {
        alert('please enter rock, paper or scissors');
    }
}

let p1 = undefined;
let p2 = move[random()];


//consider refactoring?

function getWinner (p1, p2){
    if (p1 === p2){
        // console.log('tie!')
        return '0'
    } else if (p1 === move[0]){
         if(p2 === move[2]){
            // console.log('one is winner')
            return "+1"
        } else if (p2 === move[1]){
            // console.log('two is winner')
            return "-1"
        }
    }else if (p1 === move[1]){
        if(p2 === move[0]){
        //    console.log('one is winner')
           return "+1"
       } else if (p2 === move[2]){
        //    console.log('two is winner')
           return "-1"
       }
    } else if (p1 === move[2]){
        if(p2 === move[1]){
        //    console.log('one is winner')
           return "+1"
       } else if (p2 === move[0]){
        //    console.log('two is winner')
           return "-1"
       }
    }
}



p1 = input();
let result = getWinner(p1, p2);
displayMoves();
console.log(result);
// let myButton = document.getElementById("my-button");
// let i = 0;

// function testFunction(){
//     console.log("button is working");
//     let newPara = document.createElement('p');
//     newPara.innerHTML = "here we go" + i;
//     document.body.appendChild(newPara);
//     i++;

// }
// myButton.addEventListener('click', testFunction)
//next steps, make random function
//encase moves in function
//counter for game
//