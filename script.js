// Assignment Code

var generateBtn = document.querySelector("#generate");
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var i;

    let length = "0";
    let lengthInt = 0;
    
    function getLength() {
        length = prompt("What would you like your password to be? select any number between 8 and 128");
        
        if (!(length)){
            return 0;
        }
        lengthInt = parseInt(length);
        if (isNaN(lengthInt)){
            getLength();
        }
        else if ((lengthInt < 8) || (lengthInt > 128)){
            getLength();
        }
        return lengthInt;
    }
    
    lengthInt = getLength();
    if (lengthInt === 0){
        return;
    }

    while (!(wantNum) && !(wantCap) && !(wantLow) && !(wantSpec)){
      alert("You will need to select at least one character type to include in your password.")
      var checkNum = confirm("Would you like numbers in your password?");
      var checkCap = confirm("Would you like capitalized letters in your password?");
      var checkLow = confirm("Would you like lower cased letters in your password?");
      var checkSpec = confirm("Would you like special characters in your password?");


  function useUserPreferences(charNum, charCap, charLower, charSpec) {

    var userPass = ""
    var validChar = ""

    var charNum = '1234567890'
    var charCap = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    var charLower = 'qwertyuiopasdfghjklzxcvbnm'
    var charSpec = '!@#$%^&*()_+{}{|:"<>?},./;[]' 
    
    for (i = 0; i < charNum.length, i++;) {
      newChar = validChar.charAt(Math.floor(Math.random()*validChar.length+1));
      userPass = charNum.useUserPreferences(newChar)
    }
    for (i = 0; i < charCap.length, i++;) {
      newChar = validChar.charAt(Math.floor(Math.random()*validChar.length+1));
      userPass = charCap.useUserPreferences(newChar)
    }
    for (i = 0; i < charLower.length, i++;) {
      newChar = validChar.charAt(Math.floor(Math.random()*validChar.length+1));
      userPass = charLow.useUserPreferences(newChar)
    }
    for (i = 0; i < charSpec.length, i++;) {
      newChar = validChar.charAt(Math.floor(Math.random()*validChar.length+1));
      userPass = charSpec.useUserPreferences(newChar)
    }
  }

  document.getElementById("display").value = password

}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
