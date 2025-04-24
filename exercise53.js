/*
53. Roman Numerals Encoder
Create a function that takes a positive integer less than 4,000 as its input and returns a string containing the Roman numeral representation of that integer. 
Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero.
 There can't be more than 3 identical symbols in a row. More about Roman numerals: http://en.wikipedia.org/wiki/Roman_numerals
*/

const convertToRoman = number => {

    const symbols = [
        { value: 1000, symbol: 'M' },
        { value: 900,  symbol: 'CM' },
        { value: 500,  symbol: 'D' },
        { value: 400,  symbol: 'CD' },
        { value: 100,  symbol: 'C' },
        { value: 90,   symbol: 'XC' },
        { value: 50,   symbol: 'L' },
        { value: 40,   symbol: 'XL' },
        { value: 10,   symbol: 'X' },
        { value: 9,    symbol: 'IX' },
        { value: 5,    symbol: 'V' },
        { value: 4,    symbol: 'IV' },
        { value: 1,    symbol: 'I' },
      ];

      let result = '';

  for (let i = 0; i < symbols.length; i++) {

    while (number >= symbols[i].value) {

      result += symbols[i].symbol;
      number -= symbols[i].value;
      
    }
  }

  return result;
    
  };
  
  console.log(convertToRoman(4)); // IV
  console.log(convertToRoman(9)); // IX
  console.log(convertToRoman(11)); // XI
  console.log(convertToRoman(19)); // XIX
  console.log(convertToRoman(22)); // XXII
  console.log(convertToRoman(15)); // XV
  console.log(convertToRoman(39)); // XXX + IX = XXXIX
  console.log(convertToRoman(160)); // C + LX = CLX
  console.log(convertToRoman(207)); // CC + VII = CCVII
  console.log(convertToRoman(246)); // CC + XL + VI = CCXLVI
  console.log(convertToRoman(789)); // DCC + LXXX + IX = DCCLXXXIX
  console.log(convertToRoman(1009)); // M + IX = MIX
  console.log(convertToRoman(1066)); // M + LX + VI = MLXVI
  console.log(convertToRoman(1776)); // M + DCC + LXX + VI = MDCCLXXVI
  console.log(convertToRoman(1918)); // M + CM + X + VIII = MCMXVIII
  console.log(convertToRoman(1954)); // M + CM + L + IV = MCMLIV
  console.log(convertToRoman(2014)); // MM + X + IV = MMXIV
  console.log(convertToRoman(2421)); // MM + CD + XX + I = MMCDXXI
  console.log(convertToRoman(3999)); // MMM + CM + XC + IX = MMMCMXCIX