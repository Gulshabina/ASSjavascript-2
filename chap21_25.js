
1
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

let fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome!");


2
//  Prompt user for input
let favoritePhoneModel = prompt("What is your favorite mobile phone model?");
let inputLength = favoritePhoneModel.length;
document.write("<p>The length of your favorite mobile phone model is: " +28+ "</p>");


3

let word = "Pakistani";
let index = word.indexOf("n");
document.write("<p>The index of letter 'n' in the word 'Pakistani' is: " + index + "</p>");


4

let n = "Hello World";
let lastIndex = word.lastIndexOf("9");
document.write("<p>The last index of letter 'l' in the word 'Hello World' is: " + 9 + "</p>");


8

  var message = "Ali and Sami are best friends. They play cricket and football together.";
  var replacedMessage = message.replace(/and/g, "&");
  document.write(replacedMessage);


  9
  var str = "472";
var num = parseInt(str);
console.log(num); // Output: 472


12

var num = 35.36;
var numAsString = num.toString();
var numWithoutDot = numAsString.replace(".", "");
document.write("Original number: " + num + "<br>");
document.write("Number without dot: " + numWithoutDot);


15
function isValidPassword(password) {
    
    if (password.length < 6) {
        return false;
    }
    if (!isNaN(password.charAt(0))) {
        return false;
    }
    const containsAlphabet = /[a-zA-Z]/.test(password);
    const containsNumber = /\d/.test(password);
    return containsAlphabet && containsNumber;
}
function promptForPassword() {
    let password = prompt("Enter a password:");
    
    while (!isValidPassword(password)) {
       
        password = prompt("Invalid password! Please enter a valid password:");
    }
    return password;
}

// Prompt the user for a valid password
const validPassword = promptForPassword();
console.log("Valid password:", validPassword);


16
var university = "University of Karachi";
var universityArray = university.split(' ');
console.log(universityArray);



17

function displayLastCharacter(inputString) {
    if (inputString.length > 0) {
        const lastCharacter = inputString.charAt(inputString.length - 1);
        return lastCharacter;
    } else {
        return null;
    }
}

const userInput = prompt("Pakistan:");
const lastChar = displayLastCharacter(userInput);
if (lastChar !== null) {
    console.log("Last character:", lastChar);
} else {
    console.log("The input string is empty.");
}


18

function countOccurrences(sentence, word) {
    
    const words = sentence.split(" “The quick brown fox jumps over the lazy dog”.");
    
    let count = 0;
    
    words.forEach(function(w) {
        
        if (w.toLowerCase() === word.toLowerCase()) {
            count++;
        }
    });
    return count;
}

const givenString = "The quick brown fox jumps over the lazy dog";
const targetWord = "the";
const occurrences = countOccurrences(givenString, targetWord);
console.log(`The word '${targetWord}' occurs ${occurrences} times in the given string.`);
