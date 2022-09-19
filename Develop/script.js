// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
 if (!max) {
  max = min
  min = 0
 }

 var rand = Math.random()
 return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
  var userInput = window.prompt("Choose between 8 and 128 characters for your password length.");
  var passwordLength = parseInt(userInput);
  if (isNaN(passwordLength)) {
    window.alert("This is not a number");
    return
  } 

  if (password < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters");
    return
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?");
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?");
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?");
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?");

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var LowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var UppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var optionsCart = []

  if (userWantsNumbers === true) {
    optionsCart.push(numberList)
  }

  if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
  }

  if (userWantsLowercase === true) {
    optionsCart.push(LowercaseList)
  }

  if (userWantsUppercase === true) {
    optionsCart.push(UppercaseList)
  }


  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }

  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
