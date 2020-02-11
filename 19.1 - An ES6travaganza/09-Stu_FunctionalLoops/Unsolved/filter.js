const originalArray = [1, 3, 2, 5, 10];

const evenNumbers = originalArray.filter(function(data) {
  if (data % 2 === 0) {
    return true;
  }
});

console.log("");
console.log("Original Array: " + originalArray);
console.log("Even Numbers: " + evenNumbers);

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

// Complete the following

// 1. A filter that runs through the original array and creates a new array containing only its prime numbers (`primeArray`)
// Use the isPrime function provided to help with this
const primeNumbers = originalArray.filter(function(originalArray) {
  return isPrime(originalArray);
});

console.log("Prime NUmbers: " + primeNumbers);
// 2. A filter that runs through the original array and creates a new array containing only its numbers larger than 5(`moreThan5Array`)

// Your code here
const moreThan5Array = originalArray.filter(originalArray => {
  return originalArray > 5;
});
console.log("Numbers > 5: " + moreThan5Array);
console.log("");

// Bonus: Use arrow functions as callbacks!
