/*
18. Mumbling
Given a string which includes only letters, write a function that produces the outputs below.
*/

const accum = str => {
  let arr= str.split("");
   let res = [];
   for(let i = 0 ; i<arr.length ; i++){
    res.push(arr[i].toUpperCase()+arr[i].repeat(i));

   }

   return res.join('-')

    
};
  
  console.log(accum('abcd')); // 'A-Bb-Ccc-Dddd'
  console.log(accum('cwAt')); // 'C-Ww-Aaa-Tttt'
  console.log(accum('RqaEzty')); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'