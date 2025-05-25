/**
 * Shellsort com sequência original de Shell:
 * gap inicial = floor(n/2), depois gap = floor(gap/2), até gap = 1.
 */
function shellSortShell(arr: number[]): void {
  const n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
}

/**
 * Shellsort com sequência de Hibbard:
 * gaps = 1, 3, 7, 15, …, 2^k - 1 (maior <= n)
 */
function shellSortHibbard(arr: number[]): void {
  const n = arr.length;
  const gaps: number[] = [];
  let k = 1;
  // gerar gaps de Hibbard até < n
  while ((2 ** k - 1) < n) {
    gaps.unshift(2 ** k - 1);
    k++;
  }

  for (const gap of gaps) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
  }
}

/**
 * Shellsort com sequência de Knuth:
 * gaps = (3^k - 1) / 2, para k = 1, 2, 3, … (maior <= n)
 */
function shellSortKnuth(arr: number[]): void {
  const n = arr.length;
  const gaps: number[] = [];
  let k = 1;
  // gerar gaps de Knuth até < n
  while ((3 ** k - 1) / 2 < n) {
    gaps.unshift((3 ** k - 1) / 2);
    k++;
  }

  for (const gap of gaps) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
  }
}

/**
 * Shellsort com sequência de Sedgewick (1986):
 * Gaps hₖ gerados por:
 *   se k é par:   h = 9·2^k – 9·2^(k/2) + 1
 *   se k é ímpar: h = 8·2^k – 6·2^((k+1)/2) + 1
 * Produz a sequência 1, 5, 19, 41, 109, 209, …
 */
function shellSortSedgewick(arr: number[]): void {
  const n = arr.length;
  const gaps: number[] = [];
  let k = 0;
  let gap: number;

  // Gera todos os gaps < n, em ordem decrescente
  do {
    if (k % 2 === 0) {
      gap = 9 * (2 ** k) - 9 * (2 ** (k / 2)) + 1;
    } else {
      gap = 8 * (2 ** k) - 6 * (2 ** ((k + 1) / 2)) + 1;
    }
    if (gap < n) {
      gaps.unshift(Math.floor(gap));
    }
    k++;
  } while (gap < n);

  // Ordenação usando cada gap
  for (const g of gaps) {
    for (let i = g; i < n; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= g && arr[j - g] > temp) {
        arr[j] = arr[j - g];
        j -= g;
      }
      arr[j] = temp;
    }
  }
}

// Exemplo de uso:
const arrayData = [];
for (let i = 0; i < 1000000; i++)
  arrayData.push(Math.floor(Math.random() * 1000000));

//const arrayData = [23, 12, 1, 8, 34, 54, 2, 3];
let inicio, fim;

const data1 = [...arrayData];
inicio = performance.now();
shellSortShell(data1);7
fim = performance.now();
console.log(`Runtime Shell sequence: ${(fim - inicio).toFixed(4)} ms`);
//console.log("Shell sequence:", data1);

const data2 = [...arrayData];
inicio = performance.now();
shellSortHibbard(data2);
fim = performance.now();
console.log(`Runtime Hibbard sequence: ${(fim - inicio).toFixed(4)} ms`);
//console.log("Hibbard sequence:", data2);

const data3 = [...arrayData];
inicio = performance.now();
shellSortKnuth(data3);
fim = performance.now();
console.log(`Runtime Knuth sequence: ${(fim - inicio).toFixed(4)} ms`);
//console.log("Knuth sequence:", data3);

const data4 = [...arrayData];
inicio = performance.now();
shellSortSedgewick(data4);
fim = performance.now();
console.log(`Runtime Sedgewick sequence: ${(fim - inicio).toFixed(4)} ms`);
//console.log("Sedgewick sequence:", data4);
