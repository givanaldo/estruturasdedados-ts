export class BinaryTreeNode<T> {
    value: T;
    left: BinaryTreeNode<T> | null = null;
    right: BinaryTreeNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }

    printTree(indent: string = ""): void {
        console.log(indent + this.value);

        if (this.left) {
            this.left.printTree(indent + "  ");
        }

        if (this.right) {
            this.right.printTree(indent + "  ");
        }
    }
}