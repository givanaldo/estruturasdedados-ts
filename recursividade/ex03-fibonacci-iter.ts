function fibonacci(n: number): number {
    let result = 0;
    if (n <= 1) 
        return n;
    let n1 = 0, n2 = 1;
    for (let i=2; i<=n; i++) {
        result = n1 + n2;
        n1 = n2; 
        n2 = result;
    }
    return result;
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