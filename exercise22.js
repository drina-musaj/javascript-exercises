/*
22. Exes and Ohs
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The input string can contain any character.
*/

const XO = str => {

    let letterX = str.split(/o/i)
    let letterO = str.split(/[x]/i)

    if (letterX.length == letterO.length)
        return true
    else return false
    
};
  
  console.log(XO('xo')); // true
  console.log(XO('Oo')); // false
  console.log(XO('xxOo')); // true
  console.log(XO('xxxm')); // false
  console.log(XO('ooom')); // false
  console.log(XO('ty')); // true (when no 'x' and 'o' is present should return true)