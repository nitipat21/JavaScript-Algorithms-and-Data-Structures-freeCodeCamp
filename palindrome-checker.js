function palindrome(str) {

  // remove all non-alphanumeric characters and convert to lower case
  let forwardStr = str.replace(/[\W]|_/gi, "").toLowerCase();

  // create array to store string in backward
  let backwardArray = [];

  // loop though forward string to store it in backward array
  for (let i = 0; i < forwardStr.length; i++) {
    backwardArray.unshift(forwardStr[i]);
  }

  // join string from backward array 
  let backwardStr = backwardArray.join("");

  // check if it is palindrome
  if (forwardStr === backwardStr) {
    return true
  } else {
    return false;
  }
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("A man, a plan, a canal. Panama")
palindrome("nope")
