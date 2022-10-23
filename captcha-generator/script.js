let submitButton = document.getElementById("submit-button");
let userInput = document.getElementById("user-input");
let textOutput = document.getElementById("text");
let canvas = document.getElementById("canvas");
let reloadButton = document.getElementById("reload-button");
let text = "";

// Generate Text
const textGenerator = () => {
    let generatedText = "";
    /* String.fromCharCode gives ASCII value from a given number */
    // total 9 letters hence loop of 3
    for(let i=0;i<3;i++){
        // 65-90 numbers are capital letters
        generatedText += String.fromCharCode(randomNumber(65,90));
        // 97-122 are small numbers
        generatedText += String.fromCharCode(randomNumber(97,122));
        // 48-57 are numbers from 0-9
        generatedText += String.fromCharCode(randomNumber(48,57));
    }
    return generatedText;
}

// Generate random numbers between a gitven range
const randomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomNumber(1,10));