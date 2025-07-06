import { TreeNode } from "./TreeNode";

const root = new TreeNode("Tecnologia");

const web = new TreeNode("Web");
const mobile = new TreeNode("Mobile");

root.addChild(web);
root.addChild(mobile);

web.addChild(new TreeNode("Frontend"));
web.addChild(new TreeNode("Backend"));

mobile.addChild(new TreeNode("iOS"));
mobile.addChild(new TreeNode("Android"));

root.printTree();