/*
13. Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), 
and returns a string of those numbers in the form of a phone number. 
*/

const createPhoneNumber = numbers => {

    if(numbers.length!==10) return 'Number has to be 10 digits long'

    const phone =  numbers.join('');     
    return `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6-10)}`;  
    };
  
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
  console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // '(111) 111-1111'
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'