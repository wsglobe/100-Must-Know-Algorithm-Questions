/* Write a BST class for a Binary Search Tree. The class should support:
- Inserting values with the insert method.
- Removing values with the remove method; this method should only remove the first instance of a given value.
- Searching for values with the contains method.
Note that you can't remove values from a single-node tree. In other words, calling the remove method on a single-node tree should simply not do anything.

Hint 1: 
As you try to insert, find, or remove a value into, in, or from a BST, you will have to traverse the tree's nodes. The BST property allows you to eliminate half of the remaining tree at each node that you traverse: if the target value is strictly smaller that a node's value, then it must be (or can only be) located to the left of the node, otherwise it must be (or can only be) to the right of that node.