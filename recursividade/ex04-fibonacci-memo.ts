function fibonacci(n: number, memo: Map<number, number> = new Map()): number {
    if (n <= 1) return n;

    if (memo.has(n)) return memo.get(n)!;

    const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    memo.set(n, result);
    
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