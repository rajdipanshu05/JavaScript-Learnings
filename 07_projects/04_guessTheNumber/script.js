let randomNum = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses'); //array
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1

let play = true;

if(play){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Pleas Enter a Valid Number')
    } else if(guess<1 || guess>100){
        alert('please Enter a number between 1 to 100')
    } else {
        prevGuess.push(guess);
        if(numGuess == 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    } 
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You Guessed it Right!!`)
        endGame()
    } else if(guess<randomNum){
        displayMessage(`Number is too low`)
    } else{
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess}`;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(guess){
    lowOrHi.innerHTML = `<h2>${guess}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    play = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click',function(e){
        randomNum = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';
        play = true
    })
}