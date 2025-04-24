/*
35. Replace with Alphabet Position
Given a string, write a function that replaces every letter with its position in the alphabet: 'a' = 1, 'b' = 2, .... 
If anything in the input isn't a letter, ignore it and don't return it.
*/

const alphabetPosition = text => {
    let numbers = text.toUpperCase().split('').map(letter=>letter.charCodeAt())

    let newNumbers = numbers.filter(num => {
        if(num>64) return num
    })

    return newNumbers.map(num => num-64).join(' ')

   
  };
  
  console.log(alphabetPosition('The narwhal bacons at midnight.'));
  // '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'
  
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));
  // '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'