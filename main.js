
//random
function random(){
    return Math.floor(Math.random() * 3);
}

let move = ['rock', 'paper', 'scissors'];
// 0 rock, 1 paper, 2 scissors
//  > = beats 
//  2 > 1 > 0 > 2

let p2 = move[Math.floor(Math.random() * 3)];
let p1 = move[Math.floor(Math.random() * 3)];

console.log(`player 1: ${p1}`)
console.log(`player 2: ${p2}`)

if (p1 === p2){
    console.log('tie!')
}    

else if (p1 === move[0]){
     if(p2 === move[2]){
        // return 'player 1 wins'
        console.log('one is winner')
    } else if (p2 === move[1]){
        // return 'player 2 wins'
        console.log('two is winner')
    }
}

else if (p1 === move[1]){
    if(p2 === move[0]){
       // return 'player 1 wins'
       console.log('one is winner')
   } else if (p2 === move[2]){
       // return 'player 2 wins'
       console.log('two is winner')
   }
}

else if (p1 === move[2]){
    if(p2 === move[1]){
       // return 'player 1 wins'
       console.log('one is winner')
   } else if (p2 === move[0]){
       // return 'player 2 wins'
       console.log('two is winner')
   }
}
