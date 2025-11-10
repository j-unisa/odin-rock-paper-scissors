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

const resultsDiv = document.querySelector("#results");

// For each round
function playRound(humanChoice, computerChoice) 
{
    // For case-insensitive entries
    humanChoice = humanChoice.toLowerCase();

    // Displays current selections
    const humanChoiceNode = document.createElement("p");
    humanChoiceNode.textContent = `Human: ${humanChoice}`;
    resultsDiv.appendChild(humanChoiceNode);

    const computerChoiceNode = document.createElement("p");
    computerChoiceNode.textContent = `Computer: ${computerChoice}`;
    resultsDiv.appendChild(computerChoiceNode);

    // Tied round
    if (
        (humanChoice === computerChoice)
    )
    {
        // Displays current round results
        const resultsNode = document.createElement("p");
        resultsNode.textContent = `No one wins this round!  ${humanChoice} vs ${computerChoice} ends in a tie.`;
        resultsDiv.appendChild(resultsNode);
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

        // Displays current round results
        const resultsNode = document.createElement("p");
        resultsNode.textContent = `You lose this round!  ${computerChoice} beats ${humanChoice}.`;
        resultsDiv.appendChild(resultsNode);
    }

    // Human wins round
    else 
    {
        // Updates human score
        humanScore += 1;

        // Displays current round results
        const resultsNode = document.createElement("p");
        resultsNode.textContent = `You win this round!  ${humanChoice} beats ${computerChoice}.`;
        resultsDiv.appendChild(resultsNode);
    }

    // Displays game results
    if (humanScore == 5)
    {
        const winnerNode = document.createElement("p");
        winnerNode.textContent = `YOU WIN!`;
        resultsDiv.appendChild(winnerNode);
    }
    else if (computerScore == 5)
    {
        const winnerNode = document.createElement("p");
        winnerNode.textContent = `YOU LOSE!`;
        resultsDiv.appendChild(winnerNode);
    }

    // Displays total score
    const scoreNode = document.createElement("p");
    scoreNode.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
    resultsDiv.appendChild(scoreNode);

    window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
    });
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => 
{
    playRound(rockButton.id, getComputerChoice());
}
);
paperButton.addEventListener("click", () => 
{
    playRound(paperButton.id, getComputerChoice());
});
scissorsButton.addEventListener("click", () => 
{
    playRound(scissorsButton.id, getComputerChoice());
});
