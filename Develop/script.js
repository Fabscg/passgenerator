var plength = prompt("Choose the number of characters that you would like in your password");
var generateEl = document.getElementById("generate");

const generatedPassword = document.getElementById("password");

if (plength < 8 || plength > 128){
  alert("Length must be 8-128 characters")
}

if (plength >= 8 && plength <= 128){
var cuppercase = confirm("Would you like to use uppercase letters?")
var clowercase = confirm("Would you like to use lowercase letters?")
var cnumbers = confirm("would you like to use numbers?")
var csymbols = confirm("would you like to use special characters?");
}    

if (cuppercase != true && clowercase != true && cnumbers != true && csymbols != true){
  alert("You must select at least one character type!")
}



const randomFunc = {
  lower:getRandomLower,
  upper:getRandomUpper,
  number:getRandomNumber,
  symbol:getRandomSymbol
}

// GENERATE EVENT LISTENER

generateEl.addEventListener("click", () => {
const length = +plength.values;
const hasLower = cuppercase.checked;
const hasUpper = clowercase.checked;
const hasNumber = cnumbers.checked;
const hasSymbol = csymbols.checked;

generatedPassword.innerText = generatePassword(
  hasLower,
  hasUpper, 
  hasNumber, 
  hasSymbol, 
  length
  );
});

// GENERATE PASSWORD FUNCTION

function generatePassword(lower, upper, number, symbol, length){


  var generatedPassword = "";
  var typesCount = lower + upper + number + symbol;
  var typesArray = [{lower}, {upper}, {number}, {symbol}].filter(
    item => Object.values(item)[0]
  );

  if(typesCount ===0) {
    return "";
  }
  
  for(var i = 0; i < length; i += typesCount){
    typesArray.forEach(type => {
      var funcName = Object.keys(type)[0];

  
      generatedPassword += randomFunc[funcName]();
    });
  }

  var finalPassword = generatedPassword.slice(0, length);

  };

// GENERATOR FUNCTIONS

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
  const symbols =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}


