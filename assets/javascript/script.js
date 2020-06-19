// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Variables and arrays
var enter;
var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmSpecial;
var choices;

lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Generate the password function
function generatePassword() { 

  // Initial prompt asking for password length
enter = parseInt(prompt("How long would you like the password to be? Please choose between 8 and 128."));

// Infinitely gives prompt until the criteria is met
while (enter < 8 || enter > 128) {
  enter = parseInt(prompt("Invalid length! Please choose between 8 and 128."));
}

// Once length is validated, user is prompted to choose which character types they want in their password
confirmLowercase = confirm("Will this contain lowercase letters?");
confirmUppercase = confirm("Will this contain UPPERCASE letters?");
confirmNumeric = confirm("Will this contain numbers?");
confirmSpecial = confirm("Will this contain special characters?");


// No character types chosen
  if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
      choices = alert("No character type chosen. Please try again.");

}

// All types chosen
  else if (confirmLowercase && confirmUppercase && confirmNumeric && confirmSpecial) {

      choices = lowercase.concat(uppercase, numeric, special);
}

// Three types of characters chosen
  else if (!confirmLowercase && confirmUppercase && confirmNumeric && confirmSpecial) {

    choices = uppercase.concat(numeric, special);
}
  else if (confirmLowercase && !confirmUppercase && confirmNumeric && confirmSpecial) {

    choices = lowercase.concat(numeric, special);
}
  else if (confirmLowercase && confirmUppercase && !confirmNumeric && confirmSpecial) {

    choices = lowercase.concat(uppercase, special);
}
  else if (confirmLowercase && confirmUppercase && confirmNumeric && !confirmSpecial) {

    choices = lowercase.concat(uppercase, numeric);
}

// Only 2 types of characters chosen
  else if (!confirmLowercase && !confirmUppercase && confirmNumeric && confirmSpecial) {

    choices = numeric.concat(special);
}
  else if (!confirmLowercase && confirmUppercase && !confirmNumeric && confirmSpecial) {

    choices = uppercase.concat(special);
}
  else if (!confirmLowercase && confirmUppercase && confirmNumeric && !confirmSpecial) {

    choices = uppercase.concat(numeric);
}
  else if (confirmLowercase && !confirmUppercase && !confirmNumeric && confirmSpecial) {

    choices = lowercase.concat(special);
}
   else if (confirmLowercase && !confirmUppercase && confirmNumeric && !confirmSpecial) {

    choices = lowercase.concat(numeric);
}
  else if (confirmLowercase && confirmUppercase && !confirmNumeric && !confirmSpecial) {

    choices = lowercase.concat(uppercase);
}

// Only 1 type of character chosen
  else if (confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
      choices = lowercase;
}

  else if (!confirmLowercase && confirmUppercase && !confirmNumeric && !confirmSpecial) {
      choices = uppercase;
}

  else if (!confirmLowercase && !confirmUppercase && confirmNumeric && !confirmSpecial) {
      choices = numeric;
}

  else if (!confirmLowercase && !confirmUppercase && !confirmNumeric && confirmSpecial) {
      choices = special;
}

// variables for a push array and a string converstion
var password = [];
var finalProduct = "";

// Randomizer created the password
for (var i = 0; i < enter; i++) {
  var randomized = choices[Math.floor(Math.random() * choices.length)];
  password.push(randomized);
}

// Puts together the generated password into an array and returns a final product in the display (also console.log for checking)
finalProduct = password.join("");
console.log(finalProduct);
return finalProduct;
}

// Generate button
generateBtn.addEventListener("click", writePassword);
