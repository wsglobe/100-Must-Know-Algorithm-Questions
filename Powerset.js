/* Write a function that takes in an array of unique integers and returns its powerset.

The powerset P(X) of a set X is the set of all subsets of X. For example, the powerset of [1, 2] is [[], [1], [2], [1, 2]].

Note that the sets in the powerset do not need to be in any particular order.

Sample Input: array = [1, 2, 3]

Sample Output: [[], [1], [2], [3], [1, 2], [1, 3], [ 2, 3], [1 , 2, 3]]

*Optimal Space & Time Complexity

O(n*2^n) Time | O(n*2^n) Space - where n is the length of the input array */

// Solution 1

function powerset(array) {
  const subsets = [[]];
  for (const ele of array) {
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(ele));
    }
  }
  return subsets;
}
