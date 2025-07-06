import { BinaryTreeNode } from "./BinaryTreeNode";

function insert<T>(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> {
  if (node === null) {
    return new BinaryTreeNode(value);
  }

  if (value < node.value) {
    node.left = insert(node.left, value);
  } else {
    node.right = insert(node.right, value);
  }

  return node;
}

let tree: BinaryTreeNode<number> | null = null;
const values = [10, 5, 15, 2, 7];

for (const value of values) {
  tree = insert(tree, value);
}

tree?.printTree();