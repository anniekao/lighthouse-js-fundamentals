let prompt = require("prompt-sync")();

let running = true;
let randomInt = Math.floor(Math.random() * 100) + 1;

while (running){
    let guess = prompt('Guess a number between 1 - 100: ');
    if (guess == randomInt){
        console.log('You guessed right!');
        running = false;
    }
}