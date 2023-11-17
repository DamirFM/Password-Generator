// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Declaring set of all kind of characters
  let setUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let setLowercase = 'abcdefghijklmnopqrstuvwxyz';
  let setOfNumeric = '0123456789';
  let setOfSpecial = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~!";

  // Making prompt of Acceptance Criteria 
  let passwordLenght = window.prompt("Enter how many characters your passport should have. Choose from 8 characters and no more than 128 characters");
  passwordLenght = Number(passwordLenght);
  // Checking of entering correct Acceptance Criteria 
  if (passwordLenght < 8 || passwordLenght > 128) {
    window.alert('Try again, password lenght should be from 8 to 128');
    return generatePassword();
  }
  // Declaring type of characters and using confirm window method displays a dialog box with a message
  let lowercaseType = window.confirm("Would you like to add lowercase characters?");
  let uppercaseType = window.confirm("Would you like to add uppercase characters?");
  let numericType = window.confirm("Would you like to add numeric characters?");
  let specialType = window.confirm("Would you like to add special characters?");

  // Declaring empty string of chosen type of characters 
  let finalSet = '';
  // Checking the willing type of characters 
  // If type has been chosen, adding it to the empty string
  function addStr () {
  if (lowercaseType) {
    finalSet = finalSet.concat(setLowercase);
  }
  if (uppercaseType) {
    finalSet = finalSet.concat(setUppercase);
  }
  if (numericType) {
    finalSet = finalSet.concat(setOfNumeric);
  }
  if (specialType) {
    finalSet = finalSet.concat(setOfSpecial);
  }
}
  console.log(addStr());
  // Declaring empty string for the password
  let result = '';
  function makePass(passwordLenght, finalSet) {
  //For loop and Math.random method for picking the random characters from finalSet
    for (let i = 0; i < passwordLenght; i++) {
      result += finalSet.charAt(Math.floor(Math.random() * finalSet.length));
    }
  }
  //Call the function
  console.log(makePass(passwordLenght, finalSet));

  return result;
};



