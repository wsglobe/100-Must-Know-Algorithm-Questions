/* write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they sinply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

Sample Input:
array = [-1, -5, -10, -1100, -1100, -1101, -1002, -9001]

Sample out: true

*Optimal Space & Time Complexity

O(n) Time | O(1) Space - where n is the length of the array */