function decimalParaBinario(n: number): string {
    if (n === 0)
        return "0";
    if (n === 1)
        return "1";
    return decimalParaBinario(Math.floor(n / 2)) + (n % 2).toString();
}

console.log(decimalParaBinario(10)); // Saída: "1010"
console.log(decimalParaBinario(128)); // Saída: "10000000"