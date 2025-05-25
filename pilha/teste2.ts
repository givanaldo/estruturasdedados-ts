// npm i typescript-collections

import { Stack } from "typescript-collections";
import { Pessoa } from "./pessoa";

function gerarPessoaAleatoria(): Pessoa {
    const nomes = [
        "Ana", "Bruno", "Carlos", "Daniela", "Eduardo",
        "Fernanda", "Gabriel", "Helena", "Igor", "Juliana"
    ];
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const idade = Math.floor(Math.random() * 60) + 18;
    return new Pessoa(nome, idade);
}

const pilha = new Stack<Pessoa>();

for (let i = 0; i < 10; i++) {
    pilha.push(gerarPessoaAleatoria());
}

//console.log("Pilha após empilhar 10 pessoas:");
//console.log(pilha.toArray());

console.log("Topo da pilha (peek):");
console.log(pilha.peek());

console.log("Desempilhando uma pessoa (pop):");
console.log(pilha.pop());

console.log("Tamanho da pilha após pop:");
console.log(pilha.size());

console.log("A pilha está vazia?");
console.log(pilha.isEmpty());

console.log("Topo da pilha (peek):");
console.log(pilha.peek());
