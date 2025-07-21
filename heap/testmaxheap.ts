import { MaxHeap } from "./maxheap";

const heap = new MaxHeap();

heap.insert(10);
heap.insert(30);
heap.insert(5);
heap.insert(70);
heap.insert(25);

heap.print(); // Deve mostrar algo como: [70, 30, 5, 10, 25]

heap.insert(90);
heap.print(); 

console.log(heap.extractMax());
heap.print(); 