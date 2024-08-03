let userScore = 0;
let computerScore = 0;




function playGame(userChoice){
    var userChoice;
    const computerChoice = Math.floor(Math.random()*3);
    const choice = ['stone','paper','sissor'];
    const computerchoiceName = choice[computerChoice];

    if(userChoice === computerchoiceName){
        console.log("it's a tie");
    }

    if(userChoice === 'stone'){
        if(computerchoiceName === 'paper'){
            console.log("you loose",`computer choose ${computerchoiceName}`);
            computerScore++;
        }
        else{
            console.log("you win" ,`computer choose ${computerchoiceName}`);
        }
    }

    
    if(userChoice === 'paper'){
        if(computerchoiceName === 'sissor'){
            console.log("you loose",`computer choose ${computerchoiceName}`);
            computerScore++;
        }
        else{
            console.log("you win",`computer choose ${computerchoiceName}`);
        }
    }

    
    if(userChoice === 'sissor'){
        if(computerchoiceName === 'stone'){
            console.log("you loose",`computer choose ${computerchoiceName}`);
            computerScore++;
        }
        else{
            console.log("you win",`computer choose ${computerchoiceName}`);
        }
    }
}










