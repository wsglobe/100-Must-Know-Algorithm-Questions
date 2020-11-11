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
  const temp = array[j]; // store array[j] in a temporary variable
  array[j] = array[i]; // put array[i] in the place of array[j]
  array[i] = temp; // assign the temp variable to array[i]
}

exports.bubbleSort = bubbleSort;