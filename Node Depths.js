/*The distance between a node in a Binary Tree and the tree's root is called the node's depths.

Note that The depth of any node in the tree is equal to the depth of its parent node plus 1.

Write a function that takes in a Binary Tree and returns the sum of its node's depths.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

*Optimal Space & Time Complexity
Average case: when the tree is balanced
O(n) time | o(h) space - where n is the number of nodes in the Binary Tree and h is the height of the Binary Tree */


//Solution 1 using Iterative approach
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function nodeDepths(root) {
  let sumOfDepths = 0;
  const stack = [{node: root, depth: 0}]; //to store both node and its depth
  while (stack.length > 0) {
    const {node, depth} = stack.pop();
    if (node === null) continue;
    sumOfDepths += depth;
    stack.push({node: node.left, depth: depth + 1});
    stack.push({node: node.right, depth: depth + 1});
  }
  return sumOfDepths;
}


//Solution 2 using Recursive approach
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function nodeDepths(root, depth = 0) {
  if (root === null) return 0;
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}