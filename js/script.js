// Computer randomly makes selection
function getComputerChoice() 
{
    let num = randomNumber();

    if (num === 0)
    {
        return "rock";
    }
    else if (num === 1)
    {
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}

// Helper for getComputerChoice()
function randomNumber() 
{
    return Math.floor(Math.random() * 3);
}

// User makes selection
function getHumanChoice()
{
    let choice = prompt("Choose one: rock, paper, scissors");

    return choice;
}

// For each round
function playRound(humanChoice, computerChoice, round) 
{
    // For case-insensitive entries
    humanChoice = humanChoice.toLowerCase();

    // Logs current round and selections
    console.log(`ROUND ${round}`);
    console.log(`Human: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`);

    // Tied round
    if (
        (humanChoice === computerChoice)
    )
    {
        // Logs current round results and scores
        console.log(`No one wins this round!  ${humanChoice} vs ${computerChoice} ends in a tie.`);
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);

        // Alerts current round results and scores
        alert(`ROUND ${round}
Human: ${humanChoice}
Computer: ${computerChoice}
No one wins this round!  ${humanChoice} vs ${computerChoice} ends in a tie.
Your Score: ${humanScore} | Computer Score: ${computerScore}`
        );
    }

    // Computer wins round
    else if (
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock")
    )
    {
        // Updates computer score
        computerScore += 1;

        // Logs current round results and scores
        console.log(`You lose this round!  ${computerChoice} beats ${humanChoice}.`);
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);

        // Alerts current round results and scores
        alert(`ROUND ${round}
Human: ${humanChoice}
Computer: ${computerChoice}
You lose this round!  ${computerChoice} beats ${humanChoice}.
Your Score: ${humanScore} | Computer Score: ${computerScore}`
        );
    }

    // Human wins round
    else 
    {
        // Updates human score
        humanScore += 1;

        // Logs current round results and scores
        console.log(`You win this round!  ${humanChoice} beats ${computerChoice}.`);
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);

        // Alerts current round results and scores
        alert(`ROUND ${round}
Human: ${humanChoice}
Computer: ${computerChoice}
You win this round!  ${humanChoice} beats ${computerChoice}.
Your Score: ${humanScore} | Computer Score: ${computerScore}`
        );
    }    
}

let humanScore = 0;
let computerScore = 0;