/*
11. Get the Middle Character
Given a word, your job is to return the middle character(s) of the word. 
If the word's length is odd, return the middle character.
 If the word's length is even, return the middle 2 characters. */

 const getMiddle = str =>{
    const len = str.length;
    const middle = Math.floor(len/2);

    if(len%2 === 0) {
        return str[middle - 1] + str[middle];
    }
    else{
        return str[middle];
    }
 }

console.log(getMiddle('test')); // 'es'
console.log(getMiddle('testing')); // 't'
console.log(getMiddle('middle')); // 'dd'
console.log(getMiddle('A')); // 'A'