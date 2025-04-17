/*
14. Square Every Digit
Given an integer, your task is to square every digit of it and concatenate them to produce a new integer.
*/

const squareDigits = num => {
        let res = num.toString().split('').map(dig => dig*dig).join('');
        return res;
};
  
  console.log(squareDigits(2112)); // 4114
  console.log(squareDigits(3212)); // 9414
  console.log(squareDigits(9159)); // 8112581