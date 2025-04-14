/* for */
for (let i = 1; i <= 5; i++) {
    console.log(`Número: ${i}`);
}

let total = 0;
for (let i = 1; i <= 10; i++)
    total = total + i;
console.log(`Soma = ${total}`);

console.log('\nTabela-verdade AND');
for (let a=0; a<=1; a++) {
    for (let b=0; b<=1; b++) {
        console.log(`${a}  ${b} | ${a && b}`);
    }
}

console.log('\nTabela-verdade OR');
for (let a=0; a<=1; a++) {
    for (let b=0; b<=1; b++) {
        console.log(`${a}  ${b} | ${a || b}`);
    }
}

/* while */
let n = 0;
while (n < 5) {
    console.log(`Número: ${n}`);
    num++;
}

/* do .. while */
let i = 0;
do {
    console.log(`Número: ${i}`);
    i++;
} while (i < 5);

/* Exercícios
    - Executar a soma de 10 números.
    - Executar a soma dos números pares entre X e Y.
    - Solicitar um número e imprime a sequência de Fibonacci até esse número.
*/