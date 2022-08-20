function convertToRoman(num) {

  // store arabic numerals
  let arabicNum = num;
  let romanNumOutput = "";

  // create roman numerals object for looking up
  let romanNumObj = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
    };

    // loop though romanNumObj
    for (let romanNum in romanNumObj) {
      while (arabicNum >= romanNumObj[romanNum]) {
        // concat string of roman number to output variable
        romanNumOutput += romanNum;

        // minus the value until break while loop to check the next roman number
        arabicNum -= romanNumObj[romanNum];
      }
    }

 return romanNumOutput;
}

convertToRoman(36);
