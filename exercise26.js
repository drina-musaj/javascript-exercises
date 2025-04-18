/*
26. Capitalize Words
Write a function that capitalizes each word in a given input string.
*/

String.prototype.capitalize = function () {

    let words = str.split(' ')

    for( let i = 0 ; i<words.length; i++ ){
        let letters = words[i].split('')
        
        letters[0] = letters[0].toUpperCase()
        words[i] = letters.join('');
    }

    return words.join(' ')        
    };
  
  var str = "How can mirrors be real if our eyes aren't real";
  console.log(str.capitalize()); // 'How Can Mirrors Be Real If Our Eyes Aren't Real'
  