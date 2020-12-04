/* You're given an array of integers where each integer represents a jump of its value in the array. For instance, the integer 2 represents a jump of two indices forward in the array; the integer -3 represents a jump of three indices backward in the array.

If a jump spills past the array's bounds, it wraps over to the other side. For instance, a jump of -1 at index 0 bring us to the last index in the array. Similarly, a jump of 1 at the last index in the array brings us to index 0.

Write a function that returns a boolean representing whether the jummps in the array form a single cycle. A single cycle occurs if, starting at any index in the array and following the jumps, every element in the array is visited exactly once before landing back on the starting index.

Sample Input: array = [2, 3, 1, -4, -4, 2]

Sample Output: true

*Optimal Space & Time Complexity

O(n) Time | O(1) Space - where n is the length of the input array */

// Solution

function hasSingleCycle(array) {
  let numElementsVisited = 0;
  let currentIdx = 0;
  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && currentIdx === 0) return false;
    numElementsVisited++;
    currentIdx = getNextIdx(currentIdx, array);
  }
  return currentIdx === 0; // back at starting index
}
// Helper function for handling edge cases
function getNextIdx(currentIdx, array) {
  const jump = array[currentIdx];
  const nextIdx = (currentIdx + jump) % array.length;
  // [26, 1, 2 , 3, 4]
  // nextIdx = (0 + 26) % 5 = 1;
  // what about [-26, 1, 2, 3 ,4]?
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

exports.hasSingleCycle = hasSingleCycle;