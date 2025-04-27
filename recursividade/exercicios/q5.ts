function multiplicacao(n1: number, n2: number): number {
    if (n2 === 0)
        return 0; // Caso base: qualquer número multiplicado por 0 é 0
    if (n2 > 0)
        return n1 + multiplicacao(n1, n2 - 1); // Soma sucessiva para n2 positivo
    return -multiplicacao(n1, -n2); // Ajuste para n2 negativo
}


console.log(multiplicacao(3, 4)); // Saída: 12
console.log(multiplicacao(3, -4)); // Saída: -12
console.log(multiplicacao(-3, -4)); // Saída: 12