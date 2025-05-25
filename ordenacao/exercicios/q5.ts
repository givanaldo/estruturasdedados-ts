import * as readline from 'readline';

function bubbleSortChars(arr: string[]): void {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // A última i posições já estão ordenadas
    for (let j = 0; j < n - 1 - i; j++) {
      // Se o caractere na posição j for maior que o próximo, troca-os
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
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (prompt: string) =>
    new Promise<string>(resolve => rl.question(prompt, resolve));

  const input = await question('Digite uma string para ordenar: ');
  const trimmed = input.trim();

  if (trimmed.length === 0) {
    console.log('Nenhuma string válida foi digitada.');
    rl.close();
    return;
  }

  const sorted = sortStringWithBubble(trimmed);
  console.log(`\nString ordenada: ${sorted}`);

  rl.close();
}

main().catch(err => console.error(err));
