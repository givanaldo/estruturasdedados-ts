function insertionSort<T>(arr: T[]): T[] {
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
}

let vetor = [5, 2, 9, 1, 5, 6];
console.log(vetor);
console.log("Ordenando o vetor...");
let novo_vetor = insertionSort(vetor);
console.log(novo_vetor);
console.log("\n\n");

// criar vetor aleatório com 100 elementos
let vetor_aleatorio = [];
for (let i = 0; i < 100; i++) {
    vetor_aleatorio.push(Math.floor(Math.random() * 100));
}
console.log(vetor_aleatorio);
console.log("Ordenando o vetor...");
const inicio = performance.now(); // contagem de tempo em milissegundos
let novo_vetor_aleatorio = insertionSort(vetor_aleatorio);
const fim = performance.now();
console.log(`Tempo de execução: ${fim - inicio} ms`);
console.log(novo_vetor_aleatorio);
