function rot13(str) {

  // create new array to store all letter in string.
  const newArray = [];

  // loop though str to store letter.
  for (let i = 0; i < str.length; i++) {

    // check if it is an alphabets.
    if (str[i].match(/\W+/)) {
      newArray.push(str[i]);
      continue;
      
    } else {
      let ASCII_num = str[i].charCodeAt(0) + 13;
      // check if ASCII number exceed A-Z.
      if (ASCII_num > 90) {
        ASCII_num = (ASCII_num - 90) + 64
      }

      newArray.push(ASCII_num);
    }
  };
  
  // create array to store decode letter.
  const decodeArray = [];

  // loop though array to decode.
  for (let j = 0; j < newArray.length; j++) {
    if (typeof newArray[j] !== 'number') {
      decodeArray.push(newArray[j]);
    } else {
      decodeArray.push(String.fromCharCode(newArray[j]))
    }
  };

  // join array to return a string sentence.
  const decodeStr = decodeArray.join("");

  return decodeStr;
}

rot13("SERR PBQR PNZC");
