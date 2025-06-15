const THRESHOLD = 10;

export function fuzzysort(arr: number[]): void {
  fuzzysortRange(arr, 0, arr.length - 1);
}

function fuzzysortRange(arr: number[], left: number, right: number): void {
  if (left >= right) return;
  const tamanho = right - left + 1;
  if (tamanho <= THRESHOLD) {
    insertionSortRange(arr, left, right);
    return;
  }
  let minIdx = left;
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < arr[minIdx]) {
      minIdx = i;
    }
  }
  if (minIdx !== left) {
    [arr[left], arr[minIdx]] = [arr[minIdx], arr[left]];
  }
  for (let i = left; i < right; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  fuzzysortRange(arr, left + 1, right - 1);
}

function insertionSortRange(arr: number[], left: number, right: number): void {
  for (let i = left + 1; i <= right; i++) {
    const chave = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > chave) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = chave;
  }
}


