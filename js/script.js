console.log("Hello World!");

function getComputerChoice() 
{
    // Get random number from randomNumber()
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

// TODO: Call getComputerChoice