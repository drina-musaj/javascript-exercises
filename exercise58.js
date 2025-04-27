/*58. Object Keys from snake_case to camelCase
Write a function that converts all the keys in an object from snake case to camel case.*/

const toCamel = obj => {
    const result = {};

    for (let key in obj) {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      result[camelKey] = obj[key];
    }
  
    return result;
};

console.log(
  toCamel({
    first_name: 'John',
    last_name: 'Rambo',
    favorite_movie: 'First Blood',
  })
); // {'firstName': 'John', 'lastName': 'Rambo', 'favoriteMovie': 'First Blood'}