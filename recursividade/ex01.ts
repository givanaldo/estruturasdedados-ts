function soma(n: number): number {
    if (n === 1) return 1;
    return n + soma(n - 1);
  }

// usar a linha de comando npx ts-node ex01.ts
// Antes, executar no terminal: npm i @types/node

import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
const rl = readline.createInterface({ input: stdin, output: stdout });

async function main() {
    const num = parseInt(await rl.question("Digite um número para somar de 1 até N: "));
    console.log(`Resultado da soma: ${soma(num)}`);
    rl.close();
}

main();