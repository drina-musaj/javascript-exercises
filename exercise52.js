/*
52. First Non-repeating Character
Write a function that takes an input string and returns the first character that is not repeated anywhere in the string.
Upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter.
*/

const firstNonRepeatingLetter = str => {
    const lowerWord = str.toLowerCase();

    for (let i = 0; i < str.length; i++){
        const char = lowerWord[i];
    if (lowerWord.indexOf(char) === lowerWord.lastIndexOf(char)) {
      return str[i];  
    }
    }
    return ''

  };
  
  console.log(firstNonRepeatingLetter('a')); // 'a'
  console.log(firstNonRepeatingLetter('stress')); // 't'
  console.log(firstNonRepeatingLetter('sTreSS')); // 'T'
  console.log(firstNonRepeatingLetter('abba')); // ''
  console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")); // ','