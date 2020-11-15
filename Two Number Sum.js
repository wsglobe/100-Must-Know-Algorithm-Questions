

// Solution 1
// O(nlog(n)) time | O(1) space
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b); //the compare func will sort the array in ascending order
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;    
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return []; // if no matches found in the array
}


// Solution 2 using hash table {}
// O(n) time | O(n) space

function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true; // store num in {}
    }
  }
  return []; //if no matches found in the array
}