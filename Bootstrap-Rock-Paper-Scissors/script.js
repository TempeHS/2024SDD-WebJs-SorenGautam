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
let playerGuess

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
		alert ("Computer chose rock");
	} 
	if (randomNumber === 2) {
		alert ("Computer chose scissors")
	}

	if (randomNumber === 3) {
		alert ("Computer chose papers")
	}
	
	if the playerGuess is 1 and randomNumber is 2 then add a score to playerGuess

	if the playerGuess is 1 and randomNumber is 3 then add a score to computerChoice

	if the playerGuess is 1 and the randomNumber is 1 then no score is added

	if the playerGuess is 2 and computer chooses 1 then add a score to computer

	if the playerScore is 2 and the computer chooses 2 then no score is added 

	if the playerScore is 2 and the computer chooses 3 then add a score to the playerGuess
	
	if the playerscore is 3 and the computer chooses 1 then add a score to playerGuess

	if the playerGuess is 3 and computer chooses 2 then add a score to computer
	
	if the playerGuess is 3 and the computer chooses 3 then no score is added at all


	
	const computerChoice = randomNumber //for debug only
	equalityCheck (playerClicked, computerChoice);


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
