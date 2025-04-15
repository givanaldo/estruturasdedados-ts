let frutas = new Array("Maçã", "Banana", "Laranja");
frutas.push("Uva");
frutas.unshift("Morango");
console.log(frutas.join(' - '));

let tamanho = frutas.length;
console.log(`Tamanho do vetor: ${tamanho}`);

frutas.splice(2, 0, "Pera", "Pêssego"); // Insere índice 2
console.log(frutas.join(' - '));

let algumasFrutas = frutas.slice(1, 3);
console.log(algumasFrutas.join(' - '));

let arrAninhado = [1, [2, 3], [4, [5]]];
let arrPlano = arrAninhado.flat(2);
console.log(arrPlano.join(' - '));
console.log(arrAninhado.join(' - '));