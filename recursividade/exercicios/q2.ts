function contagemregressiva(n: number): void {
    if (n < 0) return;
    console.log(n);
    contagemregressiva(n - 1);
}

const n = parseInt(prompt("Digite um número inteiro: ")!);
console.log(`Contagem regressiva de ${n}:`);
contagemregressiva(n);