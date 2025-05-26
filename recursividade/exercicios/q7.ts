import { mdc } from "./q4";

// Calcula o MMC usando a relação MMC * MDC = n1 * n2
function mmc(n1: number, n2: number): number {
    return (n1 * n2) / mdc(n1, n2); 
}

console.log(`MMC(12, 18) = ${mmc(12, 18)}`);
console.log(`MMC(50, 60) = ${mmc(50, 60)}`);
console.log(`MMC(48, 16) = ${mmc(48, 16)}`);
console.log(`MMC(18, 22) = ${mmc(18, 22)}`);