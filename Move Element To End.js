/* You're given an array of intergers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

Sample Input: 
array = [2, 1, 2, 2, 2, 3, 4, 2] tomove = 2

Sample Output: [1, 3, 4, 2, 2, 2, 2]
Note: the numbers 1, 3, 4 could be ordered differently

*Optimal Space & Time Complexity

O(n) time | O(1) space - where n is the length of the array */

// Solution

function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;
  while(i < j) {
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) swap(i , j, array);
    i++;
  }
  return array;
}

function swap(i ,j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

exports.moveElementToEnd = moveElementToEnd;