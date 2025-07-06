import { BinaryTreeNode } from "./BinaryTreeNode";

const root = new BinaryTreeNode("A");
root.left = new BinaryTreeNode("B");
root.right = new BinaryTreeNode("C");
root.left.left = new BinaryTreeNode("D");
root.left.right = new BinaryTreeNode("E");
root.right.right = new BinaryTreeNode("F");

root.printTree();