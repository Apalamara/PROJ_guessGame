'use strict';

//////////// Variables

// Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`El secretNumber es ${secretNumber}`)

const secreNumberTxt = document.querySelector('.number');

const guessNumber = document.querySelector('.guess');

// Highscore
let highscore = 0;

// Buttons
const btnCheck = document.querySelector('.btn.check');
const btnAgain = document.querySelector(".btn.again");

// Scores
const scoreMsg = document.querySelector('.score')
const highScoreMsg = document.querySelector('.highscore')

// Message
let message = document.querySelector(".message");
let messageContainer = document.querySelector(".guessing_message");


//////////// Event Listeners
btnCheck.addEventListener("click", checkGuess, false);
btnAgain.addEventListener("click", newGame, false);



//////////// Funciones
function newGame(){
    // Generando un nuevo numero random
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(`El secretNumber es ${secretNumber}`)

    // Volviendo el input a vacio
    guessNumber.value = '';

    // Reseteando el score a 20
    scoreMsg.innerText = '20'; 
    secreNumberTxt.innerText = '?'
    secreNumberTxt.style.fontSize = '5rem';
        

    // Reseteando el mensaje inicial
    document.querySelector(".message").innerText = 'Start Guessing... '; 
    document.querySelector(".guessing_message").style.backgroundColor = '#e4c78f'; 

    // Habilitando btn Check
    btnCheck.disabled = false;
    btnCheck.style.backgroundColor = '#e8e2d4'
    btnCheck.style.color = '#1b251c'
}


function checkGuess() {
    // Score Value
    let scoreValue = parseInt(document.querySelector('.score').innerText)
    console.log(scoreValue)

    // GuessNumber
    let guessNumber = document.querySelector('.guess').value;
    console.log(`El guessNumber es ${guessNumber}`)

    
    if (!guessNumber){
        message.innerText = '⛔️ You must enter a number!';
        messageContainer.style.backgroundColor = '#c65238';   
        
    } else if (guessNumber > secretNumber) {
        message.innerText = '👆 Too High';
        messageContainer.style.backgroundColor = '#c65238'; 

        scoreValue = scoreValue - 1;

    } else if (guessNumber < secretNumber) {
        message.innerText = '👇 Too Low';
        messageContainer.style.backgroundColor = '#c65238'; 

        scoreValue = scoreValue - 1;
    } else {
        // Messages
        message.innerText = '🎉 Correct Number!';
        messageContainer.style.backgroundColor = '#b1d3d6'; 

        secreNumberTxt.innerText = secretNumber;
        secreNumberTxt.style.fontSize = '3.3rem';
        
        // Check Btn
        btnCheck.disabled = true;
        btnCheck.style.backgroundColor = '#1b251c'
        btnCheck.style.color = '#e8e2d4'

        // Score
        if (scoreValue > highscore){
            highscore = scoreValue;
        }
    }

    scoreMsg.innerText = scoreValue;
    highScoreMsg.innerText = highscore;
}






// Falta:

/*
- Perder cuando llegas a cero 
    - Crear nueva logica porque tengo que ver que el score sea mayor a cero
    - ( que no se pueda clickear mas el btn de check)
- Ganar cuando gano 
    - ✅ (que no se pueda clickear mas el btn de check)
    - ✅ mostrar el numero en el signo de pregunta 
- Que funcione el btn de Again 
    - ✅ Tirar otro secretnumber
    - ✅ poner en blanco el input
    - ✅ resetear el score
    - ✅ no resetear el highscore
    - ✅ que me vuelva a decir start guessing
- Extras
    - ✅ Usar variables para los elementos 
    - Que no me deje meter un numero que no este entre 1 y 20 
    - mostrar el numero cuando ganas en el signo de pregunta


*/