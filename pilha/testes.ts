import { Stack } from "./stack";
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

// Criando a pilha e empilhando 10 pessoas aleatórias
const pilha = new Stack<Pessoa>();

for (let i = 0; i < 10; i++) {
    pilha.push(gerarPessoaAleatoria());
}

console.log("Pilha após empilhar 10 pessoas:");
console.log(pilha.toArray());

// Usando peek
console.log("Topo da pilha (peek):");
console.log(pilha.peek());

// Usando pop
console.log("Desempilhando uma pessoa (pop):");
console.log(pilha.pop());

// Tamanho da pilha após pop
console.log("Tamanho da pilha após pop:");
console.log(pilha.size());

// Verificando se a pilha está vazia
console.log("A pilha está vazia?");
console.log(pilha.isEmpty());

// Usando peek
console.log("Topo da pilha (peek):");
console.log(pilha.peek());
