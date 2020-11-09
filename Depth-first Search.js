//Depth-first Search: navigate the tree from Left to Right, branch by branch, in other words, before traversing any node's sibling nodes, its children nodes must be traversed. (going deep before wide)
//Solution
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
