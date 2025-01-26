# searching+BFS+DFS

Types of search:

- Linear Search
- Binary Search
- Depth First Saerch
- Breadth Firts Search
  
**Linear Search** or **Sequential Search** is a method of finding a target value within a list (looping through arrays). It's sequential check each element of the list for the target value util a metch is found or until all the elemets have been searched.

Searching the word Godzilla in an array of strings:

```typescript
var beasts: string[] = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla'); 

beasts.findIndex(item => item === 'Godzilla'); 

beasts.find(item => item === 'Godzilla');

beasts.includes('Godzilla');
```

**Binary Search** is working like that: you split a list over sorted item and decide from there when the item you are looking for is in the left od the right of the list. And because the list is sorted you cam make that decision very easily with just comparing things and just we keep going until we found what we want.

The main advantage why we put data in a tree is that we have the time complecity of O(log n) instead of O(n) of arrays.

**Breadth Firts Search** is working like: is going left to right on each level of the tree until you find the node you are looking for or the tree ends. Is using aditional memory because is have to track the child nodes of all the nodes on a given level while searching that level. You need to track every node and its children in order.

**Depth First Saerch**: we want to go as deep as posible into a graph or a tree, usualy starting fron the left side and then start going to the right until the traversal of the tree is done. Is not using aditional memory because is do not need to save anything.

BFS pros:

- shortest path
- closer nodes
- is good if you know the location, if the node is a the top level of the tree

BFS cons:

- more memory

DFS pros:

- less memory
- does path exist?
- if you know if the node is located in the lower level of the tree

DFS cons:

- can get slow - if is realy realy deep

`BFS and DFS are implemented as methods in binary search tree`
