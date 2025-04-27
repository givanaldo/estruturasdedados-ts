function mdc(n1: number, n2: number): number {
    if (n2 === 0)
        return n1;
    return mdc(n2, n1 % n2);
}

console.log(mdc(48, 18)); // Saída: 6