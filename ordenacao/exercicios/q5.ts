import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
const rl = readline.createInterface({ input: stdin, output: stdout });

function bubbleSortChars(arr: string[]): void {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j].localeCompare(arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

function sortStringWithBubble(input: string): string {
  const chars = input.split('');
  bubbleSortChars(chars);
  return chars.join('');
}

async function main() {

  const input = (await rl.question('Digite uma string para ordenar: ')).trim();
  
  if (input.length === 0) {
    console.log('Nenhuma string válida foi digitada.');
    rl.close();
    return;
  }

  const sorted = sortStringWithBubble(input);
  console.log(`\nString ordenada: ${sorted}`);

  rl.close();
}

main();
