import { bubbleSort, insertionSort, selectionSort, shellSort } from "./algoritmos";
import { mergeSort, quickSort } from "./algoritmos";

// criar vetor aleatório
let v1 = [];
for (let i = 0; i < 1000; i++) {
  v1.push(i);
}
let v2 = [...v1];
let v3 = [...v1];
let v4 = [...v1];
let v5 = [...v1];
let v6 = [...v1];
let v7 = [...v1];

console.log("== INICIANDO == ");

console.log("\nVetor original: ", v1);
let inicio = performance.now();
bubbleSort(v1);
let fim = performance.now();
console.log("Vetor ordenado: ", v1);
console.log(`Tempo de execução Bubble sort 1: ${fim - inicio} ms`);

console.log("\nVetor original: ", v2);
inicio = performance.now();
selectionSort(v2);
fim = performance.now();
console.log("Vetor ordenado: ", v2);
console.log(`Tempo de execução Selection sort: ${fim - inicio} ms`);

console.log("\nVetor original: ", v3);
inicio = performance.now();
insertionSort(v3);
fim = performance.now();
console.log("Vetor ordenado: ", v3);
console.log(`Tempo de execução Insertion sort: ${fim - inicio} ms`);
/*
console.log("\nVetor original: ", v4);
inicio = performance.now();
shellSort(v4);
fim = performance.now();
console.log("Vetor ordenado: ", v4);
console.log(`Tempo de execução Shell sort: ${fim - inicio} ms`);

console.log("\nVetor original: ", v5);
inicio = performance.now();
let newMerge = mergeSort(v5);
fim = performance.now();
console.log("Vetor ordenado: ", newMerge);
console.log(`Tempo de execução Merge sort: ${fim - inicio} ms`);

console.log("\nVetor original: ", v6);
inicio = performance.now();
quickSort(v6);
fim = performance.now();
console.log("Vetor ordenado: ", v6);
console.log(`Tempo de execução Quick sort: ${fim - inicio} ms`);
*/