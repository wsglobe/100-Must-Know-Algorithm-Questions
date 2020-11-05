//find the closest value to target value in BST(Binary Search Tree)
//compare the absolute value between the two

//Solution 1
//Helper Function
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBst(tree, target) {
  if (tree === null)
  return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}



//Solution 2
//Helper Function
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

// This is the class of the input tree:
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}