export function bubbleSort1<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < (arr.length - i -1); j++) {
          if(arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          }
      }
  }
  return arr;
}

export function bubbleSort2<T>(arr: T[]): T[] {
  const n = arr.length;
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
  
export function selectionSort<T>(arr: T[]): T[] {
const n = arr.length;
for (let i = 0; i < n - 1; i++) {
  let minIdx = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[minIdx]) {
      minIdx = j;
    }
  }
  if (minIdx !== i) {
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
}
return arr;
}

export function insertionSort<T>(arr: T[]): T[] {
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

export function shellSort<T>(arr: T[]): T[] {
  let n = arr.length;
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
  return arr;
}

export function mergeSort<T>(arr: T[]): T[] {
  const n = arr.length;
  if (n < 2) 
	  return arr.slice();
  const mid = Math.floor(n / 2);
  const left =  mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge<T>(a: T[], b: T[]): T[] {
  const result: T[] = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    result.push(a[i] <= b[j] ? a[i++] : b[j++]);
  }
  return result.concat(a.slice(i)).concat(b.slice(j));
}

export function quickSort<T>(arr: T[], lo = 0, hi = arr.length - 1): T[] {
  if (lo < hi) {
    const p = partition(arr, lo, hi);
    quickSort(arr, lo, p - 1);
    quickSort(arr, p + 1, hi);
  }
  return arr;
}

function partition<T>(arr: T[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[hi]] = [arr[hi], arr[i]];
  return i;
}