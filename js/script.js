console.log("Hello World!");

function getComputerChoice() 
{
    // Get random number from randomNumber()
    // Store in variable
    let num = randomNumber();

    // If random number is 0, 1, 2 then return rock, paper, scissors respectively
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

function randomNumber() 
{
    return Math.floor(Math.random() * 3);
}

// console.log(getComputerChoice());

function getHumanChoice()
{
    // Prompt user to pick rock, paper, or scissors
    // Store in variable
    let choice = prompt("Choose one: rock, paper, scissors");

    // Return variable
    return choice;
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice, round) 
{
    // Convert humanChoice to lowercase
    humanChoice = humanChoice.toLowerCase();

    console.log(`ROUND ${round}`);

    // Verify humanChoice and computerChoice
    console.log(`Human: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`);

    // Compare choices and determine the winner of the round
    // Announce the round winner using console.log
    // Increment humanScore or computerScore depending on the winner
    // TODO: Capitalize first choice in winner announcement
    if (
        (humanChoice === "rock" && computerChoice === "rock") || 
        (humanChoice === "paper" && computerChoice === "paper") || 
        (humanChoice === "scissors" && computerChoice === "scissors")
    )
    {
        console.log(`No one wins this round!  ${humanChoice} vs ${computerChoice} ends in a tie.`);
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
        alert(`ROUND ${round}
Human: ${humanChoice}
Computer: ${computerChoice}
No one wins this round!  ${humanChoice} vs ${computerChoice} ends in a tie.
Your Score: ${humanScore} | Computer Score: ${computerScore}`
        )
    }
    else if (
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock")
    )
    {
        computerScore += 1;
        console.log(`You lose this round!  ${computerChoice} beats ${humanChoice}.`);
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
        alert(`ROUND ${round}
Human: ${humanChoice}
Computer: ${computerChoice}
You lose this round!  ${computerChoice} beats ${humanChoice}.
Your Score: ${humanScore} | Computer Score: ${computerScore}`
        )
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    )
    {
        humanScore += 1;
        console.log(`You win this round!  ${humanChoice} beats ${computerChoice}.`);
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
        alert(`ROUND ${round}
Human: ${humanChoice}
Computer: ${computerChoice}
You win this round!  ${humanChoice} beats ${computerChoice}.
Your Score: ${humanScore} | Computer Score: ${computerScore}`
        )
    }    
}

function playGame(rounds)
{
    // Create variable to keep track of number of rounds
    // Move/call playRound here
    // Move score variables here
    // Call playRound 5 times
    // Update score after each round
    // Announce winner of entire game

    let currentround = totalRounds - rounds + 1;

    // Recursive draft
    if (rounds === 0)
	{
        // if humanScore equals computerScore
        // then announce tie
        if (humanScore === computerScore)
        {
            console.log(`FINAL SCORE
Human Score: ${humanScore} | Computer Score: ${computerScore}`);
            console.log(`No one wins the entire game!  It's a tie.`);
        }
		// else if humanScore is greater than computerScore
        // then announce human as winner
        else if (humanScore > computerScore)
        {
            console.log(`FINAL SCORE
Human Score: ${humanScore} | Computer Score: ${computerScore}`);
            console.log(`You win the entire game!`);
        }
        // else computerScore is greater than humanScore
        // so announce computer as winner
        else
        {
            console.log(`FINAL SCORE
Human Score: ${humanScore} | Computer Score: ${computerScore}`);
            console.log(`You lose the entire game!`);
        }
	}

	else
	{
		// divide into simpler cases
        playRound(getHumanChoice(), getComputerChoice(), currentround);

		// function(simpler cases)
        playGame(rounds - 1);
	}
}

let humanScore = 0;
let computerScore = 0;
let totalRounds = 5;

playGame(totalRounds);

console.log(humanScore);
console.log(computerScore);