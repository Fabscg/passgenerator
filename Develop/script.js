// Assignment code here


var passwordText = prompt("How many characters would you want your password to be?");

if(passwordText < 8 || passwordText > 128){
  alert("The length should be in between 8 to 128 characters");
}
if(passwordText >= 8 && passwordText <= 128){
  var charUppercase = confirm("Do you want uppercase?");
  var charLowercase = confirm("do you want lowercase");
  var charNumbers = confirm("Do you want numbers?");
  var charSymbols = confirm("Do you want special characters?");

  if (charUppercase != true && charLowercase != true && charNumbers != true && charSymbols != true){

    alert("You need to select one charater at least");
  }

  var passwordResult = document.getElementById("password");

  // document.getElementById("generatedPassword").addEventListener("click", () => {
  //   var includeLowercase = charLowercase.true;
  //   var includeUppercase = charUppercase.true;
  //   var includeNumbers = charNumbers.true;
  //   var includeSymbols = charSymbols.true;
  //   passwordResult.innerHTML = generatePassword(includeLowercase, includeNumbers,includeSymbols, includeUppercase, length);


  // });

  var randomFunc = {
    lower: getRandomLower, 
    upper:getRandomUpper, 
    number: getRandomNumber,
    symbol:getRandomSymbol
  }

  function generatedPassword(lower, upper, number, symbol, length){
    var generatePassword = "";
    var characterCounter = lower + upper + number + symbol;
    var arrayChar = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0]);

    if (characterCounter === 0){
      return "";
    }

    for (var i = 0;i<length;i+=characterCounter)
    arrayChar.forEach(type => {
      var funcName = Object.keys(type)[0];
      generatePassword += randomfunc[funcName]();
    })
  }

const finalPassword = generatedPassword.slice(0,length);

prompt(finalPassword) ;

// }

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
  const symbols =  !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.lenth)];
}
document.getElementById("#generate").addEventListener("click", finalPassword);

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

  // passwordText.value = password;

// }

// Add event listener to generate button
}
