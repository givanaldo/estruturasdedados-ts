function fibonacci(n: number): string {
    let result : string = "";
    for (let i=0; i<=n;i++) {
        result += fibonaccinum(i) + " ";
    }
    return result;
}

function fibonaccinum(n: number): number {
    if (n <= 1)
        return n;
    return fibonaccinum(n - 1) + fibonaccinum(n - 2);
}

import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
const rl = readline.createInterface({ input: stdin, output: stdout });
  
async function main() {
    const num = parseInt(await rl.question("Digite o n-ésimo termo de Fibonacci: "));
    console.log(`Fibonacci(${num}) = ${fibonacci(num)}`);
    rl.close();
}
  
main();