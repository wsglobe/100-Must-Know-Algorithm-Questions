/* write a function that takes in a non-empty sorted array of distinct integers, constructs a BST from the integers, and returns the root of the BST. The function should minimize the height of the BST. You've been provided with a BST class that you'll have to use to construct the BST. A BST is valid if and only if all of its nodes are valid BST nodes. Note that the BST class has an insert method which you can use if you want.

Hints: 

In order for the BST to have the smallest height possible, it needs to be balanced; in other words, it needs to have roughly the same number of nodes in its left subtree as in its right subtree.

Grab the middle element of the array, and make that element be the root node of the BST. Then, grab the middle element between the begining of the array and the first middle element, and make that element be the root of the BST's left subtree; similarly, make the middle element between the end of the array and the first middle element be the root of the BST's right subtree. Continue this approach until you run out of elements in the array.