import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
const rl = readline.createInterface({ input: stdin, output: stdout });

function insertInOrder(sortedArr: string[], valor: string): void {
    let i = sortedArr.length - 1;

    // Enquanto houver elementos maiores que 'value', desloca-os para a direita
    while (i >= 0 && sortedArr[i].localeCompare(valor) > 0) {
        sortedArr[i + 1] = sortedArr[i];
        i--;
    }

    // Insere 'value' na posição correta
    sortedArr[i + 1] = valor;
}

async function main() {

    const n = parseInt(await rl.question('Quantos nomes deseja inserir? '));

    if (isNaN(n) || n <= 0) {
        console.log('Número inválido.');
        rl.close();
        return;
    }

    const sortedNames: string[] = [];

    // Lê cada nome e insere já ordenado
    for (let k = 0; k < n; k++) {
        const name = await rl.question(`Nome ${k + 1}: `);
        insertInOrder(sortedNames, name.trim());
    }

    rl.close();

    // Exibe resultado
    console.log('\nNomes em ordem alfabética:');
    for (const nm of sortedNames) {
        console.log(nm);
    }
}

main();
