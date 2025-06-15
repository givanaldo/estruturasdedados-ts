/**
 * Fuzzysort: um algoritmo híbrido que combina Selection Sort (para posicionar o menor elemento),
 * Bubble Sort (para posicionar o maior elemento) e Insertion Sort (para ordenar subarrays pequenos).
 *
 * Ideia geral:
 * 1. Se o tamanho do segmento for pequeno (≤ THRESHOLD), usa Insertion Sort diretamente.
 * 2. Caso contrário, numa única iteração:
 *    a. Usa Selection Sort para encontrar o menor elemento no segmento [esq..dir] e o coloca em esq.
 *    b. Usa um único “pass” de Bubble Sort para levar o maior elemento desse segmento para dir.
 *    c. Chama recursivamente Fuzzysort no subarray interno [esq+1..dir-1].
 *
 * Isso garante que a cada chamada recursiva:
 * - O menor elemento ficará fixo na borda esquerda (com Selection).
 * - O maior elemento ficará fixo na borda direita (com Bubble “pass”).
 * - Para subarrays pequenos, Insertion Sort é mais eficiente que repetir todos os passos acima.
 *
 * Complexidade aproximada: O(n²) no pior caso (semelhante a Selection ou Bubble), 
 * mas a escolha de Insertion Sort para subarrays pequenos otimiza trechos internos.
 */

const THRESHOLD = 10;

/**
 * Ordena arr[left..right] usando Insertion Sort.
 */
function insertionSortRange(arr: number[], left: number, right: number): void {
  for (let i = left + 1; i <= right; i++) {
    const chave = arr[i];
    let j = i - 1;
    // Move todos os elementos maiores que 'chave' uma posição à direita
    while (j >= left && arr[j] > chave) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = chave;
  }
}

/**
 * Fuzzysort principal: ordena arr[0..arr.length-1] “in place”.
 */
export function fuzzysort(arr: number[]): void {
  // Chama a função recursiva com os índices iniciais do array completo
  fuzzysortRange(arr, 0, arr.length - 1);
}

function fuzzysortRange(arr: number[], left: number, right: number): void {
  // Se o segmento for inválido ou vazio, nada a fazer
  if (left >= right) return;

  const tamanho = right - left + 1;

  // Caso o segmento seja pequeno o suficiente, usar Insertion Sort
  if (tamanho <= THRESHOLD) {
    insertionSortRange(arr, left, right);
    return;
  }

  // 1) Selection Sort parcial: encontrar o menor elemento em [left..right]
  let minIdx = left;
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < arr[minIdx]) {
      minIdx = i;
    }
  }
  // Coloca esse menor elemento na posição 'left'
  if (minIdx !== left) {
    [arr[left], arr[minIdx]] = [arr[minIdx], arr[left]];
  }

  // 2) Bubble Sort “pass” para posicionar o maior elemento em 'right'
  //    Percorre do início do segmento até 'right-1' e faz swaps adjacentes, 
  //    de modo que ao final deste loop, o maior esteja em arr[right].
  for (let i = left; i < right; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  // Agora arr[right] contém o maior elemento do segmento original.

  // 3) Recursão no “miolo” restante: [left+1..right-1]
  fuzzysortRange(arr, left + 1, right - 1);
}
