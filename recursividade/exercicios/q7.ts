import { mdc } from "./q4";

function mmc(n1: number, n2: number): number {
    return (n1 * n2) / mdc(n1, n2); // Calcula o MMC usando a relação MMC * MDC = n1 * n2
}

console.log(mmc(12, 18)); // Saída: 36