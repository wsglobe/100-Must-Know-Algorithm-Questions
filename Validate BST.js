/* Write a function that takes in a potentially invalid BST and returns a boolean representing whether the BST is valid.
A BST is valid if and only if all of its nodes are valid BST nodes.

*Optimal Space & Time Complexity
O(n) Time | O(d) Space - where n is the number of nodes in the BST and d is the depth(height) of the BST */

// Solution

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue)
  return false;
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}

exports.BST = BST;
exports.validateBst = validateBst;