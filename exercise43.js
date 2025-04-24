/*
43. Kids With the Greatest Number of Candies
Given an array candies where candies[i] represents the number of candies that the ith kid has, and an integer extraCandies, 
write a function that for each kid checks if he/she would have the greatest number of candies in the group if they were given extraCandies. 
Note that multiple kids can have the greatest number of candies. For example,
*/

const kidsWithCandies = (candies, extraCandies) => {
    
    const max = Math.max(...candies)
    const newValue = candies.map(candy => (candy + extraCandies >= max))
    return newValue

  };
  
  console.log(kidsWithCandies([12, 1, 12], 10)); // [true, false, true]
  console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true, false, false, false, false]