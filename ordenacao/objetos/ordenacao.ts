type Comparator<T> = (a: T, b: T) => number;

export function shellSort<T>(arr: T[], cmp: Comparator<T>): T[] {
  const a = [...arr];
  const n = a.length;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = a[i];
      let j = i;
      while (j >= gap && cmp(a[j - gap], temp) > 0) {
        a[j] = a[j - gap];
        j -= gap;
      }
      a[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return a;
}

export function mergeSort<T>(arr: T[], cmp: Comparator<T>): T[] {
  if (arr.length < 2) return [...arr];
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), cmp);
  const right = mergeSort(arr.slice(mid), cmp);
  const result: T[] = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (cmp(left[i], right[j]) <= 0) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

export function quickSort<T>(arr: T[], cmp: Comparator<T>): T[] {
  if (arr.length < 2) return [...arr];
  const pivot = arr[Math.floor(arr.length / 2)];
  const less = arr.filter(x => cmp(x, pivot) < 0);
  const equal = arr.filter(x => cmp(x, pivot) === 0);
  const greater = arr.filter(x => cmp(x, pivot) > 0);
  return [...quickSort(less, cmp), ...equal, ...quickSort(greater, cmp)];
}
