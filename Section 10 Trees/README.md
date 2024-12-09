![trees](../resources/trees.png)

Trees are a data structure that have a hierarchical structure, can have multiple child nodes.

Trees have:

- parent - child relationship
- and leaf at the end of the tree
- can have subtrees (like the circle one in photo)
- nodes - like a linked list

Examples: 

- HTML structure is a tree

If you played chess online versus a computer, in the era when was not machine learning, the algorithm was a tree.

**Binary Tree** is a type of tree witha few rules aplied to it:

- each node can have either one, two or zero nodes
- each child can have one parent 
- each node represent a state

```javascript 
function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
```

![binary tree](../resources/binary-tree.png)