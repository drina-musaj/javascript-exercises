/*
48. Count Characters in Your String
Write a function that counts the frequency of all the characters in a given string.
*/

const count = string => {

    const frequency = []
    
    for (let letter of string){
        frequency[letter] = (frequency[letter] || 0) + 1;
    }

    return frequency
    
  };
  
  console.log(count('')); // {}
  console.log(count('aba')); // { a: 2, b: 1 }