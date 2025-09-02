function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()* 3); 


    if (computerChoice <1 ){
       return("rock")
    }
    else if (computerChoice == 1) {
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

    let humanChoice = prompt("Rock,papper,scissors?");

    if (humanChoice === "rock"){
        return("You chose rock!")
    }
    else if (humanChoice === "papper"){
        return("You chose papper!")
    }
    else if (humanChoice === "scissors"){
        return("You chose scissors!")
    }
    else {
        return("You made a typo")
    };
}

console.log(getHumanChoice())



