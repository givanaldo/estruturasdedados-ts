export function mdc(n1: number, n2: number): number {
    if (n2 === 0)
        return n1;
    return mdc(n2, n1 % n2);
}

console.log(`MDC(48, 18) = ${mdc(48, 18)}`);
console.log(`MDC(47, 18) = ${mdc(47, 18)}`);