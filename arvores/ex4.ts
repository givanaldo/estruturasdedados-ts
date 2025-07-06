import { BinaryTreeNode } from "./BinaryTreeNode";

const root = new BinaryTreeNode(10);
root.left = new BinaryTreeNode(5);
root.right = new BinaryTreeNode(15);
root.left.left = new BinaryTreeNode(2);
root.left.right = new BinaryTreeNode(7);

root.printTree();