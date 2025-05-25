function potencia(base: number, expoente: number): number {
    if (expoente === 0) {
        return 1;
    }
    return base * potencia(base, expoente - 1);
}

console.log(`2^3 = ${potencia(2, 3)}`);
console.log(`3^4 = ${potencia(3, 4)}`);
console.log(`2^10 = ${potencia(2, 10)}`);
console.log(`5^4 = ${potencia(5, 4)}`);
