function potencia(base: number, expoente: number): number {
    if (expoente === 0) {
        return 1;
    }
    return base * potencia(base, expoente - 1);
}

console.log(potencia(2, 3));