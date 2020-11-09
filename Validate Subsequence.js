// [1],[1,3],[2,4],[1,2,3,4] are all Subsequences of array [1,2,3,4]

//Solution 1 using While Loop

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

function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break; // we have a match
    if (sequence[seqIdx] === value)
    seqIdx++;
  }
  return seqIdx === sequence.length;
}


