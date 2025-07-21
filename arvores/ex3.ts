import { BinaryTreeNode } from "./BinaryTreeNode";

const root = new BinaryTreeNode("A");

const nodeB = new BinaryTreeNode("B")
const nodeC = new BinaryTreeNode("C");

root.left = nodeB;
root.right = nodeC;

const nodeD = new BinaryTreeNode("D");
const nodeE = new BinaryTreeNode("E");
const nodeF = new BinaryTreeNode("F");

nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;

nodeB.printTree();