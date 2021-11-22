
//creating global variables

var password = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var plength = prompt("Choose the number of characters that you would like in your password");

var charLength = 128;

if(plength < 8 || plength > 128){
    alert("Length must be between 8-128 characters.")
}

if(plength >= 8 && plength <= 128){
    var charUppercase = confirm("Would you like to add uppercase?");
    var charLowerCase = confirm("Would you like to ad lowercase?");
    var charNumbers = confirm("Would you like to add numbers?");
    var Symbols = confirm("Would you like to ad special symbols?");
}
if (charUppercase != true && charLowerCase != true && charNumbers !=  Symbols != true){
    alert("You must select at least one character type!");
}


var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*()_+=<>/?;:";

var typesCount = upperCase + lowerCase + numbers + symbols;

var generatedPassword = "";



for (var i = 0; i < 128; i++){
    var index = Math.floor(Math.random() * charLength.length) + 1;
    generatedPassword += charLength[index];
}



password = generatedPassword;

generateBtn.addEventListener("click",function(){

})
