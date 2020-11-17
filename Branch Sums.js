/* Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

*Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the number of nodes in the Binary Tree
*/

//Solution
//O(n) time | O(n) space - where n is the number of nodes in the Binary Tree
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// at root node
function branchSums(root) {
  const sums = [];
  calculateBranchSums(root, 0, sums); //runningSum is 0
  return sums;
}

function calculateBranchSums(node, runningSum, sums) {
  

  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;