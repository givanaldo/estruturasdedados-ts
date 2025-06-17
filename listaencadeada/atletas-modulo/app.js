import { No } from "./no.js";
import { ListaEncadeada } from "./ListaEncadeada.js";
const lista = new ListaEncadeada();
export function atualizarTabela() {
    const tbody = document.getElementById("tabelaAtletas");
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
window.adicionarAtleta = function () {
    const nome = document.getElementById("nome").value;
    const posicao = document.getElementById("posicao").value;
    const altura = Number(document.getElementById("altura").value);
    const idade = Number(document.getElementById("idade").value);
    const cidade = document.getElementById("cidade").value;
    if (nome && posicao && altura && idade && cidade) {
        const novoNo = new No(nome, posicao, altura, idade, cidade);
        lista.adicionarOrdenado(novoNo);
        atualizarTabela();
        // Limpar campos após adicionar
        document.getElementById("nome").value = "";
        document.getElementById("posicao").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("cidade").value = "";
    }
    else {
        alert("Preencha todos os campos!");
    }
};
window.buscarAtleta = function () {
    const nome = document.getElementById("nomeBusca").value;
    const atleta = lista.buscar(nome);
    if (atleta) {
        alert(`Atleta encontrado: ${atleta.nome}, posição: ${atleta.posicao}, cidade: ${atleta.cidade}`);
    }
    else {
        alert("Atleta não encontrado.");
    }
    // Limpar campo após buscar
    document.getElementById("nomeBusca").value = "";
};
window.excluirAtleta = function () {
    const nome = document.getElementById("nomeBusca").value;
    const sucesso = lista.excluir(nome);
    if (sucesso) {
        alert("Atleta excluído com sucesso.");
        atualizarTabela();
    }
    else {
        alert("Atleta não encontrado para exclusão.");
    }
    // Limpar campo após buscar
    document.getElementById("nomeBusca").value = "";
};
