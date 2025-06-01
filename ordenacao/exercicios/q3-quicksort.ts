/**
 * Pivô: primeiro elemento do subarray.
 * Seleciona sempre o elemento na posição `low` como pivô.
 */
function quicksortFirstPivot(arr: number[], low = 0, high = arr.length - 1): void {
  if (low < high) {
    const p = partitionFirst(arr, low, high);
    quicksortFirstPivot(arr, low, p - 1);
    quicksortFirstPivot(arr, p + 1, high);
  }
}

function partitionFirst(arr: number[], low: number, high: number): number {
  const pivot = arr[low];
  let i = low + 1;
  let j = high;
  while (true) {
    while (i <= j && arr[i] <= pivot) i++;
    while (i <= j && arr[j] > pivot) j--;
    if (i > j) break;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

/**
 * Pivô: último elemento do subarray.
 * Seleciona sempre o elemento na posição `high` como pivô.
 */
function quicksortLastPivot(arr: number[], low = 0, high = arr.length - 1): void {
  if (low < high) {
    const p = partitionLast(arr, low, high);
    quicksortLastPivot(arr, low, p - 1);
    quicksortLastPivot(arr, p + 1, high);
  }
}

function partitionLast(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}

/**
 * Pivô: elemento aleatório dentro do subarray.
 * Escolhe um índice randômico entre `low` e `high` e usa esse valor como pivô.
 */
function quicksortRandomPivot(arr: number[], low = 0, high = arr.length - 1): void {
  if (low < high) {
    // escolhe pivô aleatório e troca com o último
    const randIdx = Math.floor(Math.random() * (high - low + 1)) + low;
    [arr[randIdx], arr[high]] = [arr[high], arr[randIdx]];
    const p = partitionLast(arr, low, high);
    quicksortRandomPivot(arr, low, p - 1);
    quicksortRandomPivot(arr, p + 1, high);
  }
}

/**
 * Pivô: mediana de três (first, middle, last).
 * Calcula a mediana entre os elementos nas posições `low`, `mid` e `high`,
 * usa esse valor como pivô.
 */
function quicksortMedianOfThree(arr: number[], low = 0, high = arr.length - 1): void {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    // determina índice da mediana de arr[low], arr[mid], arr[high]
    const pivotIndex = medianIndex(arr, low, mid, high);
    [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];
    const p = partitionLast(arr, low, high);
    quicksortMedianOfThree(arr, low, p - 1);
    quicksortMedianOfThree(arr, p + 1, high);
  }
}

function medianIndex(arr: number[], i: number, j: number, k: number): number {
  const a = arr[i], b = arr[j], c = arr[k];
  if ((a - b) * (c - a) >= 0) return i;
  else if ((b - a) * (c - b) >= 0) return j;
  else return k;
}

// Exemplo de uso:
const data = [];
for (let i = 0; i < 1000000; i++) {
  //data.push(i);
  data.push(Math.floor(Math.random() * 1000000));
}

//const arrayData = [23, 12, 1, 8, 34, 54, 2, 3];
//const data = [5,3,8,4,2,7,1,10];

let inicio, fim;

const a = [...data];
inicio = performance.now();
quicksortFirstPivot(a);
fim = performance.now();
console.log(`Runtime FirstPivot: ${(fim - inicio).toFixed(4)} ms`);
//console.log("FirstPivot:", a);

const b = [...data];
inicio = performance.now();
quicksortLastPivot(b);
fim = performance.now();
console.log(`Runtime LastPivot: ${(fim - inicio).toFixed(4)} ms`);
//console.log("LastPivot:", b);

const c = [...data];
inicio = performance.now();
quicksortRandomPivot(c);
fim = performance.now();
console.log(`Runtime RandomPivot: ${(fim - inicio).toFixed(4)} ms`);
//console.log("RandomPivot:", c);

const d = [...data];
inicio = performance.now();
quicksortMedianOfThree(d);
fim = performance.now();
console.log(`Runtime MedianOfThree: ${(fim - inicio).toFixed(4)} ms`);
//console.log("MedianOfThree:", d);
