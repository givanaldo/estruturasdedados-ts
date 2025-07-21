import { MaxHeap } from "./maxheap";

const heap = new MaxHeap();

const vHeap = [0, 1, 2, 3, 4, 5, 6, 7, 8,9];

for (let i of vHeap)
    heap.insert(i);

heap.print();

