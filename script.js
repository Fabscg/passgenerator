
//creating global variables

var password = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*()_+=<>/?;:";

var charLength = 128;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var password = ''
    var currentString = ''
    var plength = prompt("Choose the number of characters that you would like in your password");

    while (plength < 8 || plength > 128) {
        alert("Length must be between 8-128 characters.")
        plength = prompt("Choose the number of characters that you would like in your password");
    }

    var charUppercase = confirm("Would you like to add uppercase?");
    var charLowerCase = confirm("Would you like to ad lowercase?");
    var charNumbers = confirm("Would you like to add numbers?");
    var hasSymbols = confirm("Would you like to ad special symbols?");

    while (!(charUppercase) && !(charLowerCase) && !(charNumbers) && !(hasSymbols)) {
        alert("You must select at least one character type!");
        charUppercase = confirm("Would you like to add uppercase?");
        charLowerCase = confirm("Would you like to ad lowercase?");
        charNumbers = confirm("Would you like to add numbers?");
        hasSymbols = confirm("Would you like to ad special symbols?");
    }

    if (charUppercase) {
        currentString += upperCase
    }
    if (charLowerCase) {
        currentString += lowerCase
    }
    if (charNumbers) {
        currentString += numbers
    }
    if (hasSymbols) {
        currentString += symbols
    }

    for (var i = 0; i < plength; i++) {
        password += currentString.charAt(Math.floor(Math.random() * currentString.length))
    }

    return password

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
