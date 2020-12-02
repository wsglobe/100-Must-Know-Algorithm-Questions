/* Write a function that, given a string, returns its longest palindromic substring.

A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are parlindromes.

You can assume that there will only be one longest palindromic substring.

Sample Input: string = "abaxyzzyxf"

Sample Output: "xyzzyx"

Hint: Recognize that a palindrome is a string that is symmetrical with respect to its center, which can either be a character (in the case of odd-length palindromes) or an empty string (in the case of even-length palindromes.) Thus, you can check the parlindromicity of a string by simply expanding from its center and making sure that characters on both sides are indeed mirrored.