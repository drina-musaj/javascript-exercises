/*
32. Reversed Strings
Write a function that reverses the string that is passed to it. For this challenge, you may NOT use the JavaScript built-in reverse() method.
*/

const reverseString = str => {

    let word=str.split('')
    let res=''
    
        for(let i=0; i<word.length; i++){

            res=word[i]+res
            
        }

        return res

};
  
  console.log(reverseString('hello')); // 'olleh'
  console.log(reverseString('world')); // 'dlrow'
  console.log(reverseString('')); // ''
  console.log(reverseString('h')); // 'h'