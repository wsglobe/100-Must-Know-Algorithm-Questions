/* Write a function that takes in an array of integers and returns a sorted version of that array. Use the Selection Sort algorithm to sort the array.

Sample Input:
array = [8, 5, 2, 9, 5, 6, 3]
Sample Output:
[2, 3, 5, 5, 6, 8, 9]

Hint: Divide the input array into two subarrays in place. The first subarray should be sorted at all times and should start with a length of 0, while the second subarray should be unsorted. Find the smallest(or largest)element in the unsorted subarray and insert it into the sorted subarray with a swap. Repeat this process of finding the smallest(or largest)element in the unsorted subarray and insert it in its correct position in the sorted subarray with a swap until the entire array is sorted.*/

// Solution

function selectionSort(array) {
  let startIdx = 0;
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i])
      smallestIdx = i;
    }
    swap(startIdx, smallestIdx, array);
    startIdx++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[i] = array[j];
  array[i] = temp;
}

exports.selectionSort = selectionSort;