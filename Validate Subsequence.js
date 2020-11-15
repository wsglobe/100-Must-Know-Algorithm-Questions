/* Given two non-empty array of integers, write a function that determines whether the second array is a subsequence of the first one.

Note that [1],[1,3],[2,4],[1,2,3,4] are all Subsequences of array [1,2,3,4]

Sample Input: array = [5, 1, 22, 25, 6, -1, 8, 10] sequence = [1, 6, -1, 10]
Sample Output: true

*Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the array
*/

//Solution 1 using While Loop
//O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx])
    seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length; //we have a match
}

//Solution 2 using For Loop
//O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break; // we have a match
    if (sequence[seqIdx] === value)
    seqIdx++;
  }
  return seqIdx === sequence.length;
}


