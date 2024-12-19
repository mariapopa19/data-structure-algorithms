class TreeNode {
    public value:number;
    public readonly left: TreeNode|null;
    public readonly right: TreeNode|null;
    constructor(value: number) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    private readonly root: TreeNode|null;
    constructor() {
        this.root = null;
    }

    insert(value: number) {

    }

    lookup(value: number) {

    }
}

const tree = new BinarySearchTree();

//      9
//  4      20
// 1  6  15  170

function traverse(node: TreeNode) {
    const tree: { value: number; left?: any; right?: any } = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
