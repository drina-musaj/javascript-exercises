/*
28. Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
*/

const isIsogram = str => {
    let letters = str.toLowerCase().split('')

    for(let i = 0; i<letters.length; i++)
        for( let j = i+1 ; j<letters.length; j++)
            if(letters[i]===letters[j]){
                letters.join('')
                return false
            }
            else                 
            letters.join('')
            return true

  };
  
  console.log(isIsogram('Dermatoglyphics')); // true
  console.log(isIsogram('isIsogram')); // false
  console.log(isIsogram('isogram')); // true
  console.log(isIsogram('moOse')); // false
  console.log(isIsogram('aba')); // false
  console.log(isIsogram('')); // true