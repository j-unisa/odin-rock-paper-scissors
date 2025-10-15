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

console.log(getComputerChoice());

function getHumanChoice()
{
    // Prompt user to pick rock, paper, or scissors
    // Store in variable
    let choice = prompt("Choose one: rock, paper, scissors");

    // Return variable
    return choice;
}

console.log(getHumanChoice());

// TODO: Call getComputerChoice
// TODO: Call getHumanChoice