/* Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order.

If the input array is empty, the function should return an empty array.

Sample Input: array = [1,2,3]

Sample Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

*Optimal Space & Time Complexity

O(n*n!) Time | O(n*n!) Space - where n is the length of the input array */

// Solution 1

function getPermutations(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(array, currentPermutation, permutations) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutation.concat([array[i]]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}

// Solution 2

function getPermutations(array) {
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations;
}

function permutationsHelper(i, array, permutations) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      permutationsHelper(i + 1, array, permutations);
      swap(i, j, array);
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

exports.getPermutations = getPermutations;