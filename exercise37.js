/*
37. Unique In Order
Implement a function that takes an iterable argument (a string or an array) as input and returns a list of items without any elements with the same value next to each other
and preserving the original order of elements.
*/

const uniqueInOrder = iterable => {

  let letters = iterable.toString().split('')
  let newarr= []
  let currentLetter=''
  for(let i=0; i<letters.length; i++){
    if(letters[i] != currentLetter){
        newarr.push(letters[i])
        currentLetter=letters[i]
    }
  }
  return newarr 
  };
  
  console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3]
  console.log(uniqueInOrder('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D']
  console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']