import { bubbleSort, insertionSort, selectionSort, shellSort } from "./algoritmos";
import { mergeSort, quickSort } from "./algoritmos";
import { timSort } from "./timsort";
import { fuzzysort } from "./fuzzysort";

// criar vetor aleatório
let v1 = [];
for (let i = 0; i < 100000; i++)
  v1.push(Math.floor(Math.random() * 100000));

let v2 = [...v1];
let v3 = [...v1];
let v4 = [...v1];
let v5 = [...v1];
let v6 = [...v1];
let v7 = [...v1];
let v8 = [...v1];
let v9 = [...v1];

console.log("== INICIANDO == ");
let inicio, fim;

//console.log("\nVetor original: ", v1);
inicio = performance.now();
bubbleSort(v1);
fim = performance.now();
//console.log("Vetor ordenado: ", v1);
console.log(`Tempo de execução Bubble sort 1: ${fim - inicio} ms`);

//console.log("\nVetor original: ", v2);
inicio = performance.now();
selectionSort(v2);
fim = performance.now();
//console.log("Vetor ordenado: ", v2);
console.log(`Tempo de execução Selection sort: ${fim - inicio} ms`);

//console.log("\nVetor original: ", v3);
inicio = performance.now();
insertionSort(v3);
fim = performance.now();
//console.log("Vetor ordenado: ", v3);
console.log(`Tempo de execução Insertion sort: ${fim - inicio} ms`);

//console.log("\nVetor original: ", v3);
inicio = performance.now();
fuzzysort(v9);
fim = performance.now();
//console.log("Vetor ordenado: ", v3);
console.log(`Tempo de execução Fuzzy sort: ${fim - inicio} ms`);


//console.log("\nVetor original: ", v4);
inicio = performance.now();
shellSort(v4);
fim = performance.now();
//console.log("Vetor ordenado: ", v4);
console.log(`Tempo de execução Shellsort: ${fim - inicio} ms`);

//console.log("\nVetor original: ", v5);
inicio = performance.now();
let newMerge = mergeSort(v5);
fim = performance.now();
//console.log("Vetor ordenado: ", newMerge);
console.log(`Tempo de execução Mergesort: ${fim - inicio} ms`);

//console.log("\nVetor original: ", v6);
inicio = performance.now();
quickSort(v6);
fim = performance.now();
//console.log("Vetor ordenado: ", v6);
console.log(`Tempo de execução Quicksort: ${fim - inicio} ms`);

//console.log("\nVetor original: ", v7);
inicio = performance.now();
timSort(v7);
fim = performance.now();
//console.log("Vetor ordenado: ", v7);
console.log(`Tempo de execução Timsort: ${fim - inicio} ms`);

//console.log("\nVetor original: ", v8);
inicio = performance.now();
v8.sort((a, b) => a - b); // Timsort nativo do JavaScript
v8.sort();
fim = performance.now();
//console.log("Vetor ordenado: ", v8);
console.log(`Tempo de execução sort padrão do TS: ${fim - inicio} ms`);
