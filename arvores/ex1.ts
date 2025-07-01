const root = new TreeNode("A");

const b = new TreeNode("B");
const c = new TreeNode("C");
const d = new TreeNode("D");

root.addChild(b);
root.addChild(c);
root.addChild(d);

const e = new TreeNode("E");
const f = new TreeNode("F");

c.addChild(e);
c.addChild(f);