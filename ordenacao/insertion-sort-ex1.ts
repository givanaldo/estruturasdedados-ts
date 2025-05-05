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

let vetor = [5, 2, 9, 1, 5, 6];
console.log(vetor);

console.log("Ordenando o vetor...");
console.log(insertionSort(vetor));
