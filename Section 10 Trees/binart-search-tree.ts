class TreeNode {
    public value:number;
    public left: TreeNode|null;
    public right: TreeNode|null;
    constructor(value: number) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    public root: TreeNode|null;
    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    // left
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // right
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value: number) {
        if(!this.root) {
            return false;
        }

        let currentNode: TreeNode | null  = this.root;
        while(currentNode) {
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            } 
        }
        return false;
    }

    remove(value: number) {
        if(!this.root) {
            return false;
        }

        let currentNode: TreeNode | null = this.root;
        let parentNode: TreeNode | null = null;

        while(currentNode) {
            if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                // We have a match, get to work!

                // Option 1: No right child:
                if(currentNode.right === null) {
                    if(parentNode === null) {
                        this.root = currentNode.left;
                    } else {

                        // if parent > current value, make current left child a child of parent 
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                        // if parent < current value, make left child a right child of parent
                        } else if(currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                
                // Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    if(parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;

                        //if parent > current, make right child of the left parent
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                        //if parent < current, make right child of the right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                // Option 3: Right child that has a left child    
                } else {

                    // find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if(parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }

                return true;
            }
        } 
    }

    breadthFirstSearch() {
        let currentNode: TreeNode|null= this.root;
        let list: number[] = [];
        let queue: (TreeNode|null)[] = [];

        queue.push(currentNode);

        while(queue.length > 0) {
            currentNode = queue.shift()!;
            console.log(currentNode.value);
            if (currentNode?.value !== undefined) {
                list.push(currentNode.value);
            }
            if(currentNode?.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
        
    }

    breadthFirstSearchRecursive(queue: (TreeNode|null)[], list: number[]): number[] {
        if (!queue.length) {
            return list;
        }
        let currentNode: TreeNode|null = queue.shift() || null;
        if (currentNode?.value !== undefined) {
            list.push(currentNode.value);
        }
        if(currentNode?.left) {
            queue.push(currentNode.left);
        }
        if(currentNode?.right) {
            queue.push(currentNode.right);
        }
         
        return this.breadthFirstSearchRecursive(queue, list);
    }
    depthFirstSearchInorder() {
        return traverseInOrder(this.root, []);
    }
    depthFirstSearchPostorder() {
        return traversePostOrder(this.root, []);
    }
    depthFirstSearchPreorder() {
        return traversePreOrder(this.root, []);
    }
}

function traverseInOrder(node: TreeNode|null, list: number[]) {
    if (node === null) {
        return list;
    }
    if(node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if(node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node: TreeNode|null, list: number[]) {
    if (node === null) {
        return list;
    }
    list.push(node.value);
    if(node.left) {
        traversePreOrder(node.left, list);
    }
    if(node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node: TreeNode|null, list: number[]) {
    if (node === null) {
        return list;
    }
    if(node.left) {
        traversePostOrder(node.left, list);
    }
    if(node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
tree.breadthFirstSearch()
tree.breadthFirstSearchRecursive([tree.root], [])
tree.depthFirstSearchInorder()
tree.depthFirstSearchPreorder()
console.log(tree.depthFirstSearchPostorder());


console.log(JSON.stringify(traverse(tree.root)));

console.log(tree.lookup(170));

//      9
//  4      20
// 1  6  15  170

function traverse(node: TreeNode | null) {
    if (node === null) {
        return null;
    }
    const tree: { value: number; left?: any; right?: any } = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
