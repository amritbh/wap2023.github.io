/**
 * Question 1

Write the necessary Node script to make this code work for all 
arrays: [1,2,3,4,5,6,7,8].even(); // [2,4,6,8] [1,2,3,4,5,6,7,8].odd(); // [1,3,5,7] Test your code in Node.JS CLI


 */
//extends the `Array` prototype and adds a method called `even()` and uses the `filter()` 
//to create a new array that contains only the even
Array.prototype.even = function() {
    return this.filter((number) => number % 2 === 0);
  };
  
  Array.prototype.odd = function() {
    return this.filter((number) => number % 2 !== 0);
  };
  
  console.log([1,2,3,4,5,6,7,8].even()); // [2,4,6,8]
  console.log([1,2,3,4,5,6,7,8].odd()); // [1,3,5,7]

