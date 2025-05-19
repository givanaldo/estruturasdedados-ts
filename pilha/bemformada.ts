export function bemFormada(expressao: string): boolean {
  const pilha: string[] = [];
  for (let i = 0; i < expressao.length; i++) {
    const ch = expressao.charAt(i);
    if (ch === '(' || ch === '[') {
      pilha.push(ch);
    } else {
      if (ch === ')' && pilha.length > 0) {
        if (pilha.pop() !== '(') {
          return false;
        }
      }
      if (ch === ']' && pilha.length > 0) {
        if (pilha.pop() !== '[') {
          return false;
        }
      }
    }
  }
  return pilha.length === 0;
}

export function bemFormada2(expressao: string): boolean {
  const pilha: string[] = [];
  for (let i = 0; i < expressao.length; i++) {
    const ch = expressao.charAt(i);
    switch (ch) {
      case ')':
        if (pilha.pop() !== '(') {
          return false;
        }
        break;
      case ']':
        if (pilha.pop() !== '[') {
          return false;
        }
        break;
      default:
        pilha.push(ch);
    }
  }
  return pilha.length === 0;
}

// Testes de exemplo
const expressoes = [
  '()',
  '[()]',
  '[()',
  '([((([])))])',
  '([((([]))))]'
];

console.log('Testes de bemFormada:');
for (const expr of expressoes) {
  console.log(`${expr} -> ${bemFormada(expr)}`);
}

console.log('\nTestes de bemFormada2:');
for (const expr of expressoes) {
  console.log(`${expr} -> ${bemFormada2(expr)}`);
}
