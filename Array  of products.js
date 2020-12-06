/* Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

In other words, the value at output[i] is equal to the product of every number in the input array other than input[i].

Note that you're expected to solve this problem without using division.

Sample Input: array = [5, 1, 4, 2]

Sample output: [8, 40, 10, 20]

*Optimal Space & Time Complexity

O(n) Time | O(n) Space - where n is the length of the input array */

// Solution 1
// O(n^2) Time | O(n) Space

function arrayOfProducts(array) {
  const products = [];

  for (let i = 0; i < array.length; i++) {
    let runningProduct = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        runningProduct *= array[j];
      }
      products[i] = runningProduct;
    }
  }
  return products;
}