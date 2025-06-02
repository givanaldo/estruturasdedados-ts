import { Stack, Queue } from 'typescript-collections';

function ehPalindromo(texto: string): boolean {
    const pilha = new Stack<string>();
    const fila = new Queue<string>();

    // Limpa o texto: remove espaços e converte para minúsculas
    const textoLimpo = texto.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (textoLimpo.length === 0) {
        return true; 
    }

    // Adiciona cada caractere à pilha e à fila
    for (let i = 0; i < textoLimpo.length; i++) {
        const char = textoLimpo[i];
        pilha.push(char);
        fila.enqueue(char);
    }

    // Compara os caracteres da pilha (invertido) com os da fila (original)
    while (!pilha.isEmpty()) {
        const charPilha = pilha.pop();
        const charFila = fila.dequeue();

        if (charPilha !== charFila) {
            return false;
        }
    }
    return true; 
}

console.log(`\n"arara": ${ehPalindromo("arara")}`);                      // true
console.log(`"A grama é amarga": ${ehPalindromo("A grama é amarga")}`);  // true
console.log(`"Roma me tem amor": ${ehPalindromo("Roma me tem amor")}`);  // true
console.log(`"hello": ${ehPalindromo("hello")}`);                        // false
console.log(`"Ovo": ${ehPalindromo("Ovo")}`);                            // true
console.log(`"Casa": ${ehPalindromo("Casa")}`);                          // false
