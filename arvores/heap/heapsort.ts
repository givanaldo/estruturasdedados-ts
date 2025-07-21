import { MaxHeap } from "./maxheap";

function heapsort(array: number[]): number[] {
    const heap = new MaxHeap();

    // Passo 1: Construir o heap com todos os elementos
    for (const value of array) {
        heap.insert(value);
    }

    // Passo 2: Repetidamente extrair o maior valor e colocar no início da lista ordenada
    const sorted: number[] = [];
    while (!heapIsEmpty(heap)) {
        const max = heap.extractMax();
        if (max !== undefined) sorted.unshift(max); // Insere no início para manter ordem crescente
    }

    return sorted;
}

// Função auxiliar que verifica se o heap está vazio
function heapIsEmpty(heap: MaxHeap): boolean {
    return (heap as any).heap.length === 0;
}


//Exemplo de uso 

const valores = [12, 4, 10, 1, 5, 8];
const ordenado = heapsort(valores);

console.log(ordenado); // Saída esperada: [1, 4, 5, 8, 10, 12]