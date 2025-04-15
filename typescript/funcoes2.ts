// npm install --save-dev @types/node

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const soma = (a: number, b: number) => a + b;

rl.question('Digite o primeiro número: ', (numero1: string) => {
    rl.question('Digite o segundo número: ', (numero2: string) => {
        console.log(`A soma de ${numero1} e ${numero2} é: ${soma(parseInt(numero1), parseInt(numero2))}`);
        rl.close();
    });
});