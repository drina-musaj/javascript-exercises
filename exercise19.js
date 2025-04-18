/*
19. Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string,
but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
 */

 const spinWords = str => {

    let words = str.split(" ");

    for( let i = 0; i<words.length; i++)
        if (words[i].length > 4) {
            words[i] = words[i].split("").reverse().join("");
          }

        return words.join(" ");

        }
        


  
  console.log(spinWords('This is a test')); // 'This is a test'
  console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
  console.log(spinWords('This is another test')); // 'This is rehtona test'