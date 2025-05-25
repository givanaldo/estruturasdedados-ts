import { Stack } from "./stack";

export function bemFormada(expressao: string): boolean {
  const pilha = new Stack<string>();
  for (let i = 0; i < expressao.length; i++) {
    const ch = expressao[i];
    if (ch === '(' || ch === '[' || ch === '{') {
      pilha.push(ch);
    } else {
      if (ch === ')' && pilha.size() > 0)
        if (pilha.pop() !== '(') return false;
      if (ch === ']' && pilha.size() > 0)
        if (pilha.pop() !== '[') return false;
      if (ch === '}' && pilha.size() > 0)
        if (pilha.pop() !== '{') return false;
    }
  }
  return pilha.size() === 0;
}

// Exemplos
const expressoes = [
  '(5+2)', // True
  '{[(2*4)+5]*(5/3}', // false
  '[(2 / 8) + 3]', // verdadeira
  '([2 + (6 * (([5+9]*8))])' // falsa
];

console.log('Testes de bemFormada:');
for (const expr of expressoes) {
  console.log(`${expr} -> ${bemFormada(expr)}`);
}
