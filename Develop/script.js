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
  // declaring set of all kind of characters
  let setUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let setLowercase = 'abcdefghijklmnopqrstuvwxyz';
  let setOfNumeric = '0123456789'; 
  let setOfSpecial = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~!";


  // making prompt of Acceptance Criteria 
  let passwordLenght = window.prompt("Enter how many characters passport should have. From 8 characters and no more than 128 characters");
  passwordLenght = Number(passwordLenght);

  if (passwordLenght < 8 || passwordLenght > 128) {
    window.alert('Try again, password lenght should be from 8 to 128');
    return generatePassword();
  }
  
  let lowercaseType = window.confirm("lowercase ?");
  let uppercaseType = window.confirm("uppercase ?");
  let numericType = window.confirm("numeric ?");
  let specialType = window.confirm("special ?");

 
    let finalSet = '';
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

  console.log(finalSet);


 
    function makePass (passwordLenght,finalSet ) {
      let result = '';
      for (let i = 0; i < passwordLenght; i++){
        result += finalSet.charAt(Math.floor(Math.random() * finalSet.length));
      }
      return result;
    }
    makePass();
    console.log(makePass(passwordLenght,finalSet));
    window.alert(makePass(passwordLenght,finalSet));
 
};



