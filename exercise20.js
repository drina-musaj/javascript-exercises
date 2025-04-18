/*
20. Shortest Word

Given a non-empty string of words, return the length of the shortest word(s).
*/


const findShort = str => {

    let words =  str.split(' ');
    let minWord = words[0].length;

    for (let word of words){
        if(word.length<minWord)

            minWord=word.length
    }

    return minWord
};

console.log(findShort('Test where final word shortest see')); // 3
console.log(findShort('Lets all go on holiday somewhere very cold')); // 2
console.log(findShort('i want to travel the world writing code one day')); // 1