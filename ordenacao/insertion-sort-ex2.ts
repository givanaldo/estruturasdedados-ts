import { insertionSort } from "./algoritmos";

// criar vetor aleatório com 100 elementos
let vetor_aleatorio = [];
for (let i = 0; i < 100; i++) {
    vetor_aleatorio.push(Math.floor(Math.random() * 100));
}

console.log(vetor_aleatorio);
console.log("\nOrdenando o vetor...");

const inicio = performance.now(); // contagem de tempo em milissegundos

let novo_vetor_aleatorio = insertionSort(vetor_aleatorio);

const fim = performance.now();

console.log(`Tempo de execução: ${fim - inicio} ms`);
console.log(novo_vetor_aleatorio);
