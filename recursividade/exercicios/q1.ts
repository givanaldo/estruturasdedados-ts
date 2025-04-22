function somavetor(vetor: number[], i: number): number {
  if (i < 0) return 0;
  return vetor[i] + somavetor(vetor, i - 1);
}

const v = [12, 2, 31, 40, 15];
console.log(`Soma dos elementos: ${somavetor(v, v.length-1)}`);