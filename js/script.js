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

// For entire game
function playGame(rounds)
{
    // Tracks current round
    let currentround = totalRounds - rounds + 1;

    // After all rounds are completed
    if (rounds === 0)
	{
        // Tied Game
        if (humanScore === computerScore)
        {
            // Logs game's final results and scores
            console.log(`FINAL SCORE
Your Score: ${humanScore} | Computer Score: ${computerScore}`);
            console.log(`NO ONE WINS THE ENTIRE GAME!  IT'S A TIE.`);

            // Alerts game's final results and scores
            alert(`FINAL SCORE
Your Score: ${humanScore} | Computer Score: ${computerScore}
NO ONE WINS THE ENTIRE GAME!  IT'S A TIE.`
            );
        }

		// Human wins game
        else if (humanScore > computerScore)
        {
            // Logs game's final results and scores
            console.log(`FINAL SCORE
Your Score: ${humanScore} | Computer Score: ${computerScore}`);
            console.log(`YOU WIN THE ENTIRE GAME!`);

            // Alerts game's final results and scores
            alert(`FINAL SCORE
Your Score: ${humanScore} | Computer Score: ${computerScore}
YOU WIN THE ENTIRE GAME!`
            );
        }

        // Computer wins game
        else
        {
            // Logs game's final results and scores
            console.log(`FINAL SCORE
Your Score: ${humanScore} | Computer Score: ${computerScore}`);
            console.log(`YOU LOSE THE ENTIRE GAME!`);

            // Alerts game's final results and scores
            alert(`FINAL SCORE
Your Score: ${humanScore} | Computer Score: ${computerScore}
YOU LOSE THE ENTIRE GAME!`
            );
        }
	}

    // For all rounds
	else
	{
        // Play one round
        playRound(getHumanChoice(), getComputerChoice(), currentround);

		// Next round
        playGame(rounds - 1);
	}
}

let humanScore = 0;
let computerScore = 0;
let totalRounds = 5;

playGame(totalRounds);