function soma(n: number): number {
    if (n == 1) return 1; // caso base
    return n + soma(n - 1); // chamada recursiva
}

let num = parseInt(prompt("Digite um número para somar de 1 até N:")!);
alert(`Soma dos número até ${num} = ${soma(num)}`);
