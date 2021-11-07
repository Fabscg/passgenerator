// Assignment code here
var passwordText = promt("How many characters would you like your password to be?");

if(passwordText < 8 || passwordTex > 128){
  alert("The length should be in between 8 to 128 characters");
}
if(passwordText >= 8 && passwordText <= 128){
  var charUppercase = confirm("Do you want uppercase?");
  var charLowercase = confirm("do you want lowercase");
  var charNumbers = confirm("Do you want numbers?");
  var CharSymbols = confirm("Do you want special chara
  
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
