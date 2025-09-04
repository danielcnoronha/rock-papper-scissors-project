function getComputerChoice () {
    let computerOptions = Math.floor(Math.random()* 3); 


    if (computerOptions === 0 ){
       return("rock")
    }
    else if (computerOptions === 1) {
        return("paper")
    }
    else {
        return("scissors")
    }
   
}

function getHumanChoice (){


    let humanOptions = prompt("Rock,paper or scissors?");

    humanOptions = humanOptions.trim().toLowerCase ();

    if (humanOptions === "rock"){
        return("rock")
    }
    else if (humanOptions === "paper"){
        return("paper")
    }
    else if (humanOptions === "scissors"){
        return("scissors")
    }

}




let humanScore = 0;
let computerScore = 0;



function playRound (humanChoice,computerChoice){


    if (humanChoice === computerChoice){
        return ("it's a tie")
    }

    else if(
    (humanChoice === "rock" && computerChoice === "scissors" ) ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
) {
    humanScore++;
    return (` You win! ${humanChoice}  beats  ${computerChoice}`)
} else {
    computerScore++;
    return (`You lose! ${computerChoice} beats ${humanChoice}`)
}

}

const humanSelection = getHumanChoice ();
const computerSelection = getComputerChoice ();
console.log(`Computer chose: ${computerSelection}`);

console.log(playRound (humanSelection, computerSelection))

console.log(`Score → Human: ${humanScore}, Computer: ${computerScore}`);




