import { BinaryTreeNode } from "./BinaryTreeNode";

function insert<T>(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> {
  if (node === null) {
    return new BinaryTreeNode(value);
  }

  if (value < node.value)
    node.left = insert(node.left, value);
  else
    node.right = insert(node.right, value);

  return node;
}

function preOrder<T>(node: BinaryTreeNode<T> | null): void {
  if (!node) return;
  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
}

function inOrder<T>(node: BinaryTreeNode<T> | null): void {
  if (!node) return;
  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

function postOrder<T>(node: BinaryTreeNode<T> | null): void {
  if (!node) return;
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}

let tree: BinaryTreeNode<number> | null = null;
const values = [10, 5, 15, 2, 7, 20];

for (const value of values) {
  tree = insert(tree, value);
}

tree?.printTree();
console.log("Pré-ondem");
preOrder(tree);
console.log("Em-ondem");
inOrder(tree);
console.log("Pós-ondem");
postOrder(tree);