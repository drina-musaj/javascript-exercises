/*
30. Counting Duplicates
Write a function that will return the count of distinct case-insensitive alphanumeric characters 
that occur more than once in the input string.
*/

const duplicateCount = text => {

        let letters = text.toLowerCase().split('')

        for(let i = 0; i < letters.length; i++){
            for(let j = i+1; j< letters.length; j++){
                if (letters[i] === letters[j]){
                    return letters.length
                }
                else return 0
            }
        }
};
  
  console.log(duplicateCount('')); // 0
  console.log(duplicateCount('abcde')); // 0
  console.log(duplicateCount('abA11')); // 2
  console.log(duplicateCount('aabbcde')); // 2
  console.log(duplicateCount('aabBcde')); // 2
  console.log(duplicateCount('Indivisibility')); // 1
  console.log(duplicateCount('Indivisibilities')); // 2