const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();

    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; // Picks a random number

    if (randomNumber === 1) {
        computerChoice = 'rock'
    } // if the #1 is chosen

    if (randomNumber === 2) {
        computerChoice = 'paper'
    } // if the #2 is chosen

    if (randomNumber === 3) {
        computerChoice = 'scissors'
    } // if the #3 is chosen

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice) {
        result = 'Its a draw!'
    } 

    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Won!'
    } // paper beats rock

    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost!'
    } // rock beats scissors

    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You lost!'
    } // scissors beats paper

    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost!'
    } // paper beats rock

    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Won!'
    } // rock beats scissors

    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost!'
    } // scissors beats paper
    resultDisplay.innerHTML = result
}