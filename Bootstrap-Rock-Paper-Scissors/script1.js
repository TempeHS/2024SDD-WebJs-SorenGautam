//**********************************************************************************
// written by Ben Jones
//
// Student boilerplate to make a OOP Rock Paper Scissors
// - OOP - Const data type - Passing data into methods
//
// Written 22/6/2023
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE
//**********************************************************************************



let playerScore;
let computerScore;

function gameLoop (playerClicked) {
	

	const randomNumber = generateRandomNumber()

}
	// convert random number to a choice so you can both equality check and use in the ouput string it should be stored in a const 
	

	(if randomNumber === 1) { 

		choice = "Rock";

	} else if (randomNumber === 2) { choice = "Paper"

	} else if (randomNumber === 3) { choice = "Scissors"
	
}
		
    if (randomNumber === 1) {
		alert (Computer chose )
	}


	
	const computerChoice = randomNumber //for debug only
	equalityCheck (playerClicked, computerChoice);
}

function generateRandomNumber () {
	const result = Math.floor((Math.random() * 3) + 1);
	return result;
}


function equalityCheck (playerChoice, computerChoice){
	


	alert (playerChoice);  //for debug only
	alert (computerChoice); //for debug only

	const playerTip = 0;
	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
}
