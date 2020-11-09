//The distance between a node in a Binary Tree and the tree's root is called the node's depths.
//The depth of any node in the tree is equal to the depth of its parent node plus 1.
//Write a function that takes in a Binary Tree and returns the sum of its node's depths.

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