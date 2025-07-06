import { TreeNode } from "./TreeNode";

const root = new TreeNode("A");

const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");

root.addChild(nodeB);
root.addChild(nodeC);
root.addChild(nodeD);

const nodeE = new TreeNode("E");
const nodeF = new TreeNode("F");

nodeC.addChild(nodeE);
nodeC.addChild(nodeF);

root.printTree();