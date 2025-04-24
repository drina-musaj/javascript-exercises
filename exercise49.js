/*
49. Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.
*/

const solution = str => {
    const regex = (/([A-Z])/g);
    return str.replace(regex, ' $1')
  };
  
  console.log(solution('camelCasingHere')); // camel Casing Here
  console.log(solution('No Camels here')); // No Camels here
  console.log(solution('ABC')); // ABC
  console.log(solution('')); // ''