class FullBinaryTree {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

function isFullBinaryTree(node) {
    if (node == null) return true
    if (node.left == null && node.right == null) return true
    if (node.left != null && node.right != null) {
        return isFullBinaryTree(node.left) && isFullBinaryTree(node.right)
    }
    return false
}

/*
             1
            / \
           2   3
          / \
         4   5
        / \
       6   7
      / \
     8   9
*/

function countTotalNode(node) {
    if (node === null) {
        return 0; // Nếu cây rỗng hoặc nút là nút lá, không có nút bên trong nào
    }

    // Đệ quy đếm số lượng nút bên trong trong các nút con của nút hiện tại
    const leftInternals = countTotalNode(node.left)
    const rightInternals = countTotalNode(node.right)

    return leftInternals + rightInternals + 1
}

/*
             1
            / \
           2   3
          / \
         4   5
        / \
       6   7
*/

function countInternalNode2(node) {
    if (node === null || (node.left == null && node.right == null)) {
        return 0; // Nếu cây rỗng hoặc nút là nút lá, không có nút bên trong nào
    }

    // Đệ quy đếm số lượng nút bên trong trong các nút con của nút hiện tại
    const leftInternals = countInternalNode2(node.left)
    const rightInternals = countInternalNode2(node.right)

    // Trả về tổng số lượng nút bên trong và 1 (để tính cả nút hiện tại)
    return leftInternals + rightInternals + 1
}


/*
             1
            / \
           2   3
*/

function countInternalNode(node) {
    let nodes = countLeaves(node) - 1
    return nodes
}

/*
             1
            / \
           2   3
          / \     
         4   5
*/

function countLeaves(node) {
    if (node === null) {
        return 0; // Nếu cây rỗng, không có nút lá nào
    }

    if (node.left === null && node.right === null) {
        return 1; // Nếu nút là nút lá, trả về 1 nút lá
    }

    // Đệ quy đếm số lượng nút lá trong các nút con của nút hiện tại
    const leftLeaves = countLeaves(node.left)
    const rightLeaves = countLeaves(node.right)

    return leftLeaves + rightLeaves;
}

// create root

let root = new FullBinaryTree(1)
root.left = new FullBinaryTree(2)
root.right = new FullBinaryTree(3)
root.left.left = new FullBinaryTree(4)
root.left.right = new FullBinaryTree(5)
root.left.left.left = new FullBinaryTree(6)
root.left.left.right = new FullBinaryTree(7)
root.left.left.left.left = new FullBinaryTree(8)
root.left.left.left.right = new FullBinaryTree(9)
// console.log(root)
// console.log(isFullBinaryTree(root))
// console.log(countInternalNode(root))
console.log(countTotalNode(root))
// console.log(countLeaves(root))

