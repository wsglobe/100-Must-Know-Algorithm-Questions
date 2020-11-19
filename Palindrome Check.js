/* Write a function that takes in a non-empty string and returns a boolean representing whether the string is a palindrome.

A palidrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

Sample Input:
string = "abcdcba"
Sample Output: 
True

*Optimal Space & Time Complexity

O(n) time | O(1) space - where n is the length of the input string */

// Solution

function isPalindrome(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx])
    return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}

exports.isPalindrome = isPalindrome;