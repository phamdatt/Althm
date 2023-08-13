class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

var root = null;

function logInorder(node) {
    if (node == null)
        return;

    logInorder(node.left);
    logInorder(node.right)
}

/*create root*/

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
console.log(root)
logInorder(root);