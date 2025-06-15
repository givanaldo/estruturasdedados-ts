import { ListaArray } from "./ListaArray";

const lista = new ListaArray<string>();

console.log("----- Exemplo de uso da ListaArray -----");

console.log("\nAdicionando elementos...");
lista.adicionar("a");
lista.adicionar("b");
lista.adicionar("c");
lista.imprimir();  // Lista: ['a', 'b', 'c']

console.log("\nInserindo elemento na posição 1...");
lista.inserir(1, "x");
lista.imprimir();  // Lista: ['a', 'x', 'b', 'c']

console.log("\nRemovendo elemento da posição 2...");
const removido = lista.remover(2);
console.log("Elemento removido:", removido);
lista.imprimir();  // Lista: ['a', 'x', 'c']

console.log("\nConsultando elemento na posição 0...");
console.log("Elemento na posição 0:", lista.get(0));  // 'a'

console.log("\nTamanho da lista:");
console.log(lista.tamanho());  // 3

console.log("\nRemovendo elemento da posição inválida (10)...");
console.log(lista.remover(10));  // undefined

console.log("\nEstado final da lista:");
lista.imprimir();