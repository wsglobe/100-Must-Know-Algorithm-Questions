/* Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

*Optimal Space & Time Complexity

O(n) Time | O(d) Space - where n is the number of nodes in the Binary Tree and d is the depth(height) of the Binary Tree. */

// Solution 1
// O(n) Time | O(n) Space

function invertBinaryTree(tree) {
  const queue = [tree];
  while (queue.length) {
    const current = queue.shift();
    if (current === null) continue;
    swapLeftAndRight(current);
    queue.push(current.left);
    queue.push(current.right);
  }
}

function swapLeftAndRight(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}

// Solution 2
// O(n) Time | O(d) Space

funciton invertBinaryTree(tree) {
  if (tree === null) return;
  swapLeftAndRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swapLeftAndRight(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}

exports.invertBinaryTree = invertBinaryTree;