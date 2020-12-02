/* Write a function that, given a string, returns its longest palindromic substring.

A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are parlindromes.

You can assume that there will only be one longest palindromic substring.

Sample Input: string = "abaxyzzyxf"

Sample Output: "xyzzyx"

Hint: Recognize that a palindrome is a string that is symmetrical with respect to its center, which can either be a character (in the case of odd-length palindromes) or an empty string (in the case of even-length palindromes.) Thus, you can check the parlindromicity of a string by simply expanding from its center and making sure that characters on both sides are indeed mirrored.

*Optimal Space & Time Complexity

O(n^2) Time | O(n) Space - where n is the length of the input string */

// Solution

function longestPalindromicSubstring(string) {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1,i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}
