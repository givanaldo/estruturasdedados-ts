export class MaxHeap {
    private heap: number[] = [];

    // Troca dois elementos de posição no vetor
    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value: number): void {
        this.heap.push(value); // adiciona no final
        this.heapifyUp(this.heap.length - 1); // corrige a posição
    }

    private heapifyUp(index: number): void {
        let parent = Math.floor((index - 1) / 2);

        while (index > 0 && this.heap[index] > this.heap[parent]) {
            this.swap(index, parent);
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    extractMax(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown(0);

        return max;
    }

    private heapifyDown(index: number): void {
        let largest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < this.heap.length && this.heap[left] > this.heap[largest])
            largest = left;

        if (right < this.heap.length && this.heap[right] > this.heap[largest])
            largest = right;

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    print(): void {
        console.log(this.heap);
    }
}
