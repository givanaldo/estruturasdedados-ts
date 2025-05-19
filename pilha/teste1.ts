import { Stack } from "./stack";

let pilha = new Stack<string>();
pilha.push("João");
pilha.push("Carlos");
pilha.push("José");
pilha.push("Roberto");

console.log("Topo:", pilha.peek());
console.log("Tamanho:", pilha.size());
console.log("Remover elemento:", pilha.pop());
console.log("Topo:", pilha.peek());
console.log("Tamanho:", pilha.size());
pilha.push("Alberto");
console.log("Topo:", pilha.peek());
console.log("Tamanho:", pilha.size());
