function soma(n: number): number {
    if (n === 1) return 1;
    return n + soma(n - 1);
  }
  
import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
const rl = readline.createInterface({ input: stdin, output: stdout });

async function main() {
    const valor = parseInt(await rl.question("Digite um número para somar de 1 até N: "));
    console.log(`Resultado da soma: ${soma(valor)}`);
    rl.close();
}

main();