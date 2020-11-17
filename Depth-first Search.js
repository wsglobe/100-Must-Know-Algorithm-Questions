/*Depth-first Search: navigate the tree from Left to Right, branch by branch, in other words, before traversing any node's sibling nodes, its children nodes must be traversed. (going deep before wide)
*Optimal Space & Time Complexity
O(v + e) time | O(v) space - where v is the number of vertices of the input graph and e is the number of edges of the input graph*/
// Solution
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

exports.Node = Node;