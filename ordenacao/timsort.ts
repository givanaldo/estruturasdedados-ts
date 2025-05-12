// timsort.ts
// Implementação simplificada de Timsort em TypeScript, no mesmo estilo dos demais algoritmos

/**
 * Calcula o tamanho mínimo de "run" (minRun) para o algoritmo.
 * Baseado em Java's TimSort: combina runs naturais e runs de tamanho mínimo.
 */
function minRunLength(n: number): number {
  let r = 0;
  while (n >= 64) {
    r |= n & 1;
    n >>= 1;
  }
  return n + r;
}

/**
 * Ordenação por inserção para subarrays pequenos.
 * Ordena arr[left..right] in-place.
 */
function insertionSort(arr: number[], left: number, right: number): void {
  for (let i = left + 1; i <= right; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}

/**
 * Mescla dois subarrays ordenados: arr[l..m] e arr[m+1..r]
 */
function merge(arr: number[], l: number, m: number, r: number): void {
  const len1 = m - l + 1;
  const len2 = r - m;
  const left = new Array<number>(len1);
  const right = new Array<number>(len2);

  for (let i = 0; i < len1; i++) left[i] = arr[l + i];
  for (let i = 0; i < len2; i++) right[i] = arr[m + 1 + i];

  let i = 0;
  let j = 0;
  let k = l;

  while (i < len1 && j < len2) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
    }
  }

  // Copia remanescentes
  while (i < len1) {
    arr[k++] = left[i++];
  }
  while (j < len2) {
    arr[k++] = right[j++];
  }
}

/**
 * Função principal de Timsort.
 * Ordena o array in-place.
 */
export function timSort(arr: number[]): void {
  const n = arr.length;
  const minRun = minRunLength(n);

  // Passo 1: Ordena cada run de tamanho minRun usando insertion sort
  for (let start = 0; start < n; start += minRun) {
    const end = Math.min(start + minRun - 1, n - 1);
    insertionSort(arr, start, end);
  }

  // Passo 2: Mescla runs de tamanho crescente (bottom-up)
  let size = minRun;
  while (size < n) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = Math.min(left + size - 1, n - 1);
      const right = Math.min(left + 2 * size - 1, n - 1);
      if (mid < right) {
        merge(arr, left, mid, right);
      }
    }
    size *= 2;
  }
}

// Exemplo de uso:
// import { timSort } from './timsort';
// const arr = [5, 2, 9, 1, 5, 6];
// timSort(arr);
// console.log(arr); // [1,2,5,5,6,9]
