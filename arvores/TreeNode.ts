export class TreeNode<T> {
    value: T;
    children: TreeNode<T>[];

    constructor(value: T) {
        this.value = value;
        this.children = [];
    }

    addChild(child: TreeNode<T>): void {
        this.children.push(child);
    }

    printTree(indent: string = ""): void {
        console.log(indent + this.value);
        for (const child of this.children) {
            child.printTree(indent + "  ");
        }
    }
}
