// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"];
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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

  var numbers = window.confirm("Would you like to include numbers in your password?");
  var symbols = window.confirm("Would you like to include symbols in your password?");
  var lowercase = window.confirm("Would you like to include lowercase letters in your password?");
  var uppercase = window.confirm("Would you like to include uppercase letters in your password?");

  var optionsCart = []

  if (numbers) {
    for (var i=0; i < numberList.length; i++) {
      optionsCart.push(numberList);
    }
  }

  if (symbols) {
    for (var i=0; i < symbolList.length; i++) {
      optionsCart.push(symbolList);
    }
  }

  if (lowercase) {
    for (var i=0; i < lowercaseList.length; i++) {
      optionsCart.push(lowercaseList);
    }
  }

  if (uppercase) {
    for (var i=0; i < numberList.length; i++) {
      optionsCart.push(uppercaseList);
    }
  }

  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList);
  }


  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }
  console.log(generatePassword)
  return generatePassword
  

}

function randomInterval(min, max) {
  if (!max) {
   max = min
   min = 0
  }
 
  var random = Math.random()
  return Math.floor(min * (1 - random) + random * max)
 }
 
 function getRandomItem(list) {
   return list[randomInterval(list.length)]
 }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
