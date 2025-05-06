import { bubbleSort1, bubbleSort2, insertionSort, selectionSort, shellSort } from "./algoritmos";
import { mergeSort, quickSort } from "./algoritmos";

// criar vetor aleatório
let v1 = [];
for (let i = 0; i < 100000; i++) {
  v1.push(Math.floor(Math.random() * 10000));
}
let v2 = [...v1];
let v3 = [...v1];
let v4 = [...v1];
let v5 = [...v1];
let v6 = [...v1];
let v7 = [...v1];
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
selectionSort(v3);
fim = performance.now();
console.log(`Tempo de execução Selection sort: ${fim - inicio} ms`);

inicio = performance.now();
insertionSort(v4);
fim = performance.now();
console.log(`Tempo de execução Insertion sort: ${fim - inicio} ms`);

inicio = performance.now();
shellSort(v5);
fim = performance.now();
console.log(`Tempo de execução Shell sort: ${fim - inicio} ms`);

inicio = performance.now();
mergeSort(v6);
fim = performance.now();
console.log(`Tempo de execução Merge sort: ${fim - inicio} ms`);

inicio = performance.now();
quickSort(v7);
fim = performance.now();
console.log(`Tempo de execução Quick sort: ${fim - inicio} ms`);
