import { No } from './no';
import { ListaEncadeada } from './ListaEncadeada';

const listaAtletas = new ListaEncadeada();

// --- Adicionar Atletas ---
console.log("\nAdicionando atletas...");
const atleta1 = new No("João Silva", "Ponta", 1.85, 25, "São Paulo");
listaAtletas.adicionarOrdenado(atleta1);
console.log(`Atleta "${atleta1.nome}" adicionado.`);

const atleta2 = new No("Maria Oliveira", "Líbero", 1.70, 22, "Rio de Janeiro");
listaAtletas.adicionarOrdenado(atleta2);
console.log(`Atleta "${atleta2.nome}" adicionado.`);

const atleta3 = new No("Pedro Costa", "Oposto", 1.90, 28, "Belo Horizonte");
listaAtletas.adicionarOrdenado(atleta3);
console.log(`Atleta "${atleta3.nome}" adicionado.`);

const atleta4 = new No("Ana Souza", "Central", 1.88, 26, "Curitiba");
listaAtletas.adicionarOrdenado(atleta4);
console.log(`Atleta "${atleta4.nome}" adicionado.`);


// --- Listar Atletas ---
console.log("\n--- Lista de Atletas ---");
const todosAtletas = listaAtletas.listar();
if (todosAtletas.length > 0) {
    todosAtletas.forEach(atleta => {
        console.log(`Nome: ${atleta.nome}, Posição: ${atleta.posicao}, Altura: ${atleta.altura.toFixed(2)}m, Idade: ${atleta.idade}, Cidade: ${atleta.cidade}`);
    });
} else {
    console.log("Nenhum atleta cadastrado.");
}

// --- Buscar Atleta ---
console.log("\n--- Buscando Atleta ---");
const nomeParaBuscar1 = "Maria Oliveira";
const encontrado1 = listaAtletas.buscar(nomeParaBuscar1);
if (encontrado1) {
    console.log(`"${nomeParaBuscar1}" encontrado: Posição: ${encontrado1.posicao}, Cidade: ${encontrado1.cidade}`);
} else {
    console.log(`"${nomeParaBuscar1}" não encontrado.`);
}

const nomeParaBuscar2 = "Carlos Santos";
const encontrado2 = listaAtletas.buscar(nomeParaBuscar2);
if (encontrado2) {
    console.log(`"${nomeParaBuscar2}" encontrado: Posição: ${encontrado2.posicao}, Cidade: ${encontrado2.cidade}`);
} else {
    console.log(`"${nomeParaBuscar2}" não encontrado.`);
}


// --- Excluir Atleta ---
console.log("\n--- Excluindo Atleta ---");
const nomeParaExcluir1 = "Pedro Costa";
const excluido1 = listaAtletas.excluir(nomeParaExcluir1);
if (excluido1) {
    console.log(`Atleta "${nomeParaExcluir1}" excluído com sucesso.`);
} else {
    console.log(`Atleta "${nomeParaExcluir1}" não encontrado para exclusão.`);
}

const nomeParaExcluir2 = "João Ninguém";
const excluido2 = listaAtletas.excluir(nomeParaExcluir2);
if (excluido2) {
    console.log(`Atleta "${nomeParaExcluir2}" excluído com sucesso.`);
} else {
    console.log(`Atleta "${nomeParaExcluir2}" não encontrado para exclusão.`);
}

// --- Listar Atletas Após Exclusão ---
console.log("\n--- Lista de Atletas Após Exclusão ---");
const atletasAposExclusao = listaAtletas.listar();
if (atletasAposExclusao.length > 0) {
    atletasAposExclusao.forEach(atleta => {
        console.log(`Nome: ${atleta.nome}, Posição: ${atleta.posicao}, Altura: ${atleta.altura.toFixed(2)}m, Idade: ${atleta.idade}, Cidade: ${atleta.cidade}`);
    });
} else {
    console.log("Nenhum atleta cadastrado.");
}