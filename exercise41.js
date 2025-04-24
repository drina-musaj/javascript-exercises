/*
41. Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

const reverse = x => {
    const max_value = Math.pow(2,31)
    const min_value = -Math.pow(2, 31)
    
   

        let reversed = Math.abs(x).toString().split('').reverse().join('')
        
        if (reversed < min_value || reversed > max_value) {
            return 0;
        }

        return reversed
        
       
    
  };
  
  console.log(reverse(0)); // 0
  console.log(reverse(120)); // 21
  console.log(reverse(123)); // 321
  console.log(reverse(-123)); // -321
  console.log(reverse(1534236469)); // 0