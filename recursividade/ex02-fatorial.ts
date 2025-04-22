function fatorial(n: number): number {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
  }
  
  import * as readline from 'node:readline/promises';
  import { stdin, stdout } from 'node:process';
  const rl = readline.createInterface({ input: stdin, output: stdout });
  
  async function main() {
      const num = parseInt(await rl.question("Digite um número para calcular o fatorial: "));
      console.log(`Fatorial de ${num} é: ${fatorial(num)}`);
      rl.close();
  }
  
  main();