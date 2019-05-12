let prompt = require("prompt-sync")({
    sigint: true
});

let running = true;
let randomInt = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let attempts = 1;

while (running){
    let guess = prompt('Guess a number between 1 - 100: ');
    if (guess == randomInt && attempts > 1 ){
        console.log(`You got it! You took ${attempts} attempts.`);
        running = false;
    } else if (guess == randomInt && attempts === 1) {
        console.log(`You got it! You took ${attempts} attempt.`);
        running = false;
    } else if (guesses.includes(guess)) {
        console.log('Already Guessed!');
    } else if (guess > randomInt){
        guesses.push(guess);
        attempts += 1;
        console.log('Too High!');
    } else if (guess < randomInt){
        guesses.push(guess);
        attempts += 1;
        console.log('Too Low!');
    } else if (typeof guess != 'number'){
        console.log('Not a number! Try again!');
    }
}
