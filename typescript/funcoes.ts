function saudar(nome: string): void {
    console.log(`Olá, ${nome}!`);
}

function soma(a: number, b: number): number {
    return a + b;
}

let soma2 = (a: number, b: number) => a + b;

let n1 = 20;
let n2 = 5;
console.log(`Soma = ${soma(n1, n2)}`);
console.log(`Soma2 = ${soma2(n1, n2)}`);