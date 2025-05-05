import { bubbleSort, insertionSort, selectionSort } from "./algoritmos";

// criar vetor aleatório com 100 elementos
let v1 = [];
for (let i = 0; i < 10000; i++) {
  v1.push(Math.floor(Math.random() * 10000));
}
let v2 = [...v1];
let v3 = [...v1];

console.log("== INICIANDO == ");

let inicio = performance.now();
const vBubble = insertionSort(v1);
let fim = performance.now();
console.log(`Tempo de execução Bubble: ${fim - inicio} ms`);

inicio = performance.now();
const vInsertion = bubbleSort(v2);
fim = performance.now();
console.log(`Tempo de execução Insertion: ${fim - inicio} ms`);

inicio = performance.now();
const vSelection = selectionSort(v3);
fim = performance.now();
console.log(`Tempo de execução Selection: ${fim - inicio} ms`);
