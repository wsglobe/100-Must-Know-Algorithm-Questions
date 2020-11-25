/* Write a function that takes in two non-empty arrays of integers, finds the pair of numbers(one from each array)whose absolute difference is closest to zero, and returns an array containing these two numbers, with number form the first array in the first position.

Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

You can assume that there will only be one pair of numbers with the smallest difference.

Sample Inout:

arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

Sample Output:

[28, 26]

*Optimal Space & Time Complexity

O(nlog(n) + mlog(m)) time | O(1) space - where n is the length of the first input array and m is the length of the second input array */

// Solution

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = areayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      current = secondNum - firstNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum]
    }
  }
  return smallestPair;
}

exports.smallestDifference = smallestDifference;