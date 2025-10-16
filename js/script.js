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

function playRound(humanChoice, computerChoice) 
{
    // Convert humanChoice to lowercase
    humanChoice = humanChoice.toLowerCase();

    // Verify humanChoice and computerChoice
    console.log(humanChoice);
    console.log(computerChoice);

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
    }
    else if (
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock")
    )
    {
        console.log(`You lose this round!  ${computerChoice} beats ${humanChoice}.`);
        computerScore += 1;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    )
    {
        console.log(`You win this round!  ${humanChoice} beats ${computerChoice}.`);
        humanScore += 1;
    }    
}

function playGame()
{
    // Create variable to keep track of number of rounds
    // Move/call playRound here
    // Move score variables here
    // Call playRound 5 times
    // Update score after each round
    // Announce winner of entire game

    // Recursive draft
    /*
    if (simplest case)
	{
		solution for simplest case
	}

	else
	{
		divide into simpler cases
		function(simpler cases)
	} 
    */
}

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());

console.log(humanScore);
console.log(computerScore);