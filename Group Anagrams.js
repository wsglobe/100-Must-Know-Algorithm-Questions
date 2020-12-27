/* Write a function that takes in an array of strings and groups anagrams together.

Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo" are anagrams.

Your function should return a list of anagram group in no particular order.

Sample Input:
words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

Sample Output:
[["yo","oy"], ["flop","olfp"], ["act","tac","cat"],["foo"]]

*Optimal Space & Time Complexity

O(w*n*log(n)) Time | O(wn) Space - where w is the number of words and n is the length of the longest word */

// Solution 1
// O(w*n*log(n) + n*w*log(w)) Time | O(wn) Space

function groupAnagrams(words) {
  if (words.length === 0) return [];

  const sortedWord = words.map(word => word.split('').sort().join(''));
  const indices = [...Array(words.length).keys()];
  indices.sort((a, b) => {
    if (sortedWords[a] < sortedWords[b]) return -1;
    if (sortedWords[a] > sortedWords[b]) return 1;
    return 0;
  });

  const result = [];
  let currentAnagramGroup = [];
  let currentAnagram = sortedWords[indices[0]];
  for (const index of indices) {
    const word = words[index];
    const sortedWord = sortedWords[index];

    if (sortedWord === currentAnagram) {
      currentAnagramGroup.push(word);
      continue;
    }

    result.push(currentAnagramGroup);
    currentAnagramGroup = [word];
    currentAnagram = sortedWord;
  }

  result.push(currentAnagramGroup);

  return result;
}


// Solution 2
// O(w*n*log(n)) Time | O(wn) Space

function groupAnagrams(words) {
  const anagrams = {};
  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
}

exports.groupAnagrams = groupAnagrams;
