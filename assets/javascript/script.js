// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// THEN I am presented with a series of prompts for password criteria
// 
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password

// 1 PROMPT needs validation
// THEN I choose a length of at least 8 characters and no more than 128 characters
// Prompt needed and ask for the length
// check IF the input number is < 8 and > 128


// 4 confirms
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// Confirm needed and ask the user if they want to use lowercase
// Confirm needed and ask the user if they want to use uppercase
// Confirm needed and ask the user if they want to use numeric
// Confirm needed and ask the user if they want to use special characters

// Need a function
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// Each prompt needs to be validated


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// all the information is gathered (all prompts finished)
// either do an alert or just check to see if my variable has a password
// Password generation process (look at rock paper scissors)

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
}


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
