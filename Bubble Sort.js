// Write a function that takes in an array of integers and returns a sorted version of that array. Use the Bubble Sort algorithm to sort the array.
// array = [8, 5, 2, 9, 5, 6, 3]
// sorted array = [2, 3, 5, 5, 6, 8, 9]

// Solution
function bubbleSort(array) {
  let isSorted = fasle;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

exports.bubbleSort = bubbleSort;