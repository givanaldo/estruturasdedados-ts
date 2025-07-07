import { TreeNode } from "./TreeNode";

const root = new TreeNode("Tecnologia");
const web = new TreeNode("Web");
const mobile = new TreeNode("Mobile");

root.addChild(web);
root.addChild(mobile);

const frontend = new TreeNode("Frontend")

web.addChild(frontend);
web.addChild(new TreeNode("Backend"));

mobile.addChild(new TreeNode("iOS"));
mobile.addChild(new TreeNode("Android"));

frontend.addChild(new TreeNode("HTML"));
frontend.addChild(new TreeNode("CSS"));
frontend.addChild(new TreeNode("Javascript"));

frontend.printTree();