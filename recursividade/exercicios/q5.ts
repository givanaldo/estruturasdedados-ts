function multiplicacao(n1: number, n2: number): number {
    if (n2 === 0)
        return 0; 
    if (n2 > 0)
        return n1 + multiplicacao(n1, n2 - 1); 
    return -multiplicacao(n1, -n2); 
}


console.log(multiplicacao(3, 4)); 
console.log(multiplicacao(3, -4)); 
console.log(multiplicacao(-3, -4));
console.log(multiplicacao(-3, 4)); 