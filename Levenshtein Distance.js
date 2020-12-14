/* Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string.

There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.

Sample Input: str1 = "abc" str2 = "yabd"

Sample Output: 2 // insert "y"; substitute "c" for "d"

*Optimal Space & Time Complexity

O(nm) Time | O(min(n.m)) Space - where n and m are the lengths of the two input strings */

// Solution 1
// O(nm) Time | O(nm) Space

function levenshteinDistance(str1, str2) {
  const edits = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }
  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
      }
    }
  }
  return edits[str2.length][str1.length];
}

// Solution 2
// O(nm) Time | O(min(n, m)) Space

function levenshteinDistance(str1, str2) {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;
  const evenEdits = [];
  const oddEdits = new Array(small.length + 1);
  for (let j = 0; j < small.length + 1; j++) {
    evenEdits.push(j);
  }
  for (let i = 1; i < big.length + 1; i++) {
    let currentEdits, previousEdits;
    if (i % 2 === 1) {
      currentEdits = oddEdits;
      previousEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      previousEdits = oddEdits;
    }
    currentEdits[0] = 1;
    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentEdits[j] = previousEdits[j - 1];
      } else {
        currentEdits[j] = 1 + Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1]);
      }
    }
  }
  return big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length];
}