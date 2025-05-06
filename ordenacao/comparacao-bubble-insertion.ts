import { bubbleSort1, bubbleSort2, insertionSort, selectionSort } from "./algoritmos";

// criar vetor aleatório
let v1 = [];
for (let i = 0; i < 10000; i++) {
  v1.push(Math.floor(Math.random() * 10000));
}
let v2 = [...v1];
let v3 = [...v1];
let v4 = [...v1];

console.log("== INICIANDO == ");

let inicio = performance.now();
bubbleSort1(v1);
let fim = performance.now();
console.log(`Tempo de execução Bubble sort 1: ${fim - inicio} ms`);

inicio = performance.now();
bubbleSort2(v2);
fim = performance.now();
console.log(`Tempo de execução Bubble sort 2: ${fim - inicio} ms`);

inicio = performance.now();
insertionSort(v3);
fim = performance.now();
console.log(`Tempo de execução Insertion sort: ${fim - inicio} ms`);

inicio = performance.now();
selectionSort(v4);
fim = performance.now();
console.log(`Tempo de execução Selection sort: ${fim - inicio} ms`);
