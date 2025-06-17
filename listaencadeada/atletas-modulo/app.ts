import { No } from "./no.js";
import { ListaEncadeada } from "./ListaEncadeada.js";

const lista = new ListaEncadeada();

export function atualizarTabela(): void {
    const tbody = document.getElementById("tabelaAtletas")!;
    tbody.innerHTML = "";
    lista.listar().forEach((no) => {
        const linha = `<tr>
            <td>${no.nome}</td>
            <td>${no.posicao}</td>
            <td>${no.altura.toFixed(2)}</td>
            <td>${no.idade}</td>
            <td>${no.cidade}</td>
        </tr>`;
        tbody.innerHTML += linha;
    });
}

(window as any).adicionarAtleta = function(): void {
    const nome = (document.getElementById("nome") as HTMLInputElement).value;
    const posicao = (document.getElementById("posicao") as HTMLInputElement).value;
    const altura = Number((document.getElementById("altura") as HTMLInputElement).value);
    const idade = Number((document.getElementById("idade") as HTMLInputElement).value);
    const cidade = (document.getElementById("cidade") as HTMLInputElement).value;

    if (nome && posicao && altura && idade && cidade) {
        const novoNo = new No(nome, posicao, altura, idade, cidade);
        lista.adicionarOrdenado(novoNo);
        atualizarTabela();
        // Limpar campos após adicionar
        (document.getElementById("nome") as HTMLInputElement).value = "";
        (document.getElementById("posicao") as HTMLInputElement).value = "";
        (document.getElementById("altura") as HTMLInputElement).value = "";
        (document.getElementById("idade") as HTMLInputElement).value = "";
        (document.getElementById("cidade") as HTMLInputElement).value = "";
    } else {
        alert("Preencha todos os campos!");
    }
};

(window as any).buscarAtleta = function(): void {
    const nome = (document.getElementById("nomeBusca") as HTMLInputElement).value;
    const atleta = lista.buscar(nome);

    if (atleta) {
        alert(`Atleta encontrado: ${atleta.nome}, posição: ${atleta.posicao}, cidade: ${atleta.cidade}`);
    } else {
        alert("Atleta não encontrado.");
    }
    // Limpar campo após buscar
    (document.getElementById("nomeBusca") as HTMLInputElement).value = "";
};

(window as any).excluirAtleta = function(): void {
    const nome = (document.getElementById("nomeBusca") as HTMLInputElement).value;
    const sucesso = lista.excluir(nome);

    if (sucesso) {
        alert("Atleta excluído com sucesso.");
        atualizarTabela();
    } else {
        alert("Atleta não encontrado para exclusão.");
    }
    // Limpar campo após buscar
    (document.getElementById("nomeBusca") as HTMLInputElement).value = "";
};
