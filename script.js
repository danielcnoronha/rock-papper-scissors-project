function getComputerChoice () {
    let computerOptions = Math.floor(Math.random()* 3); 


    if (computerOptions <1 ){
       return("rock")
    }
    else if (computerOptions == 1) {
        return("papper")
    }
    else {
        return("scissors")
    }
   
}

/*

Create a prompt message that displays "rock, papper, scissors ?"
assign values so that prompt can read "rock", "papper" or "scissors"
create an alert that returns "you chose (Rock, papper os scissors)"

*/

console.log(getComputerChoice())

function getHumanChoice (){

    let humanOptions = prompt("Rock,papper,scissors?");

    if (humanOptions === "rock"){
        return("rock")
    }
    else if (humanOptions === "papper"){
        return("papper")
    }
    else if (humanOptions === "scissors"){
        return("scissors")
    }
    else {
        return("You made a typo")
    };
}
console.log(getHumanChoice())

let humanScore = 0

let computerScore = 0

/* create a function that takes the human and computer player choices as arguments 
plays a single round
increments the variable of the ronds winner 
logs a winner announcement*/

function playRound (){
    let humanOptions
    let computerOptions
}

