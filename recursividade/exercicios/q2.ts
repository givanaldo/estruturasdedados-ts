function contagemregressiva(n: number): void {
    if (n < 0)
        return;
    console.log(n);
    contagemregressiva(n - 1);
}

import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
const rl = readline.createInterface({ input: stdin, output: stdout });

async function main() {
    const n = parseInt(await rl.question("Digite um número inteiro: "));
    console.log(`Contagem regressiva de ${n}:`);
    contagemregressiva(n); rl.close();
}

main();

