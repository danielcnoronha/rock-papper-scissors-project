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





function playgame(){
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

}



    function fiveRounds(round1,round2,round3,round4,round5){}



        const firstRound = playgame ()
        const secondRound = playgame ()
        const thirdRound = playgame ()
        const fourthRound = playgame ()
        const fifthRound = playgame ()

        


    console.log(fiveRounds(firstRound, secondRound,thirdRound, fourthRound, fifthRound))




