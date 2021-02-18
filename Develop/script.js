// Homework Code //
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numSet = "0123456789";
var specialSet = "!()?[]`~;:!@#$%^&*+=";


// Write password to the password input //
function generatePassword() {
  // vars for password //
  var password = [];
  var passwordLength = prompt("How many characters would you like your password to be? Please eanter a number between 8 and 128");
    // logic for password length //
    if (!passwordLength) {
      return ("");
    }
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a password length between 8 and 128 characters.")
      var tryAgain = confirm("Would you like to try again?");
      if (tryAgain) {
        generatePassword();
      } else {
        return ("");
      }
    }
    if (isNaN(parseInt(passwordLength))) {
      alert("Please only enter a numerical value");
      var tryAgain = confirm("Would you like to try again?");
      if (tryAgain) {
        generatePassword();
      } else {
        return ("");
      }
    } 
  // Vars for added criteria //
  var lowCase = confirm("Would you like your password to include lowercase letters?");
    console.log(lowCase);
  var upCase = confirm("Would you like your password to include uppercase letters?");
    console.log(upCase);
  var numbers = confirm("Would you like your password to include numbers?");
    console.log(numbers);
  var specialChars = confirm("Would you like your password to include special characters?");
    console.log(specialChars);
  var passwordSet = "";
    // Logic and criteria //
    if (lowCase) { 
      passwordSet = lowerCase;
    }
    if (upCase) {
      passwordSet = passwordSet + upperCase;
    }
    if (numbers) {
      passwordSet = passwordSet + numSet;
    }
    if (specialChars) {
      passwordSet = passwordSet + specialSet;
    }
    console.log(passwordLength);
    for ( var i = 0; i < passwordLength; i++ ) {
      password += passwordSet[Math.floor(Math.random() * passwordSet.length)];
  }
  return password;
};

// function for generating the password //
function writePassword() {
  var password = generatePassword()
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
