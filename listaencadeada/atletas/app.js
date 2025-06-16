"use strict";
class No {
    constructor(nome, posicao, altura, idade, cidade) {
        this.proximo = null;
        this.nome = nome;
        this.posicao = posicao;
        this.altura = altura;
        this.idade = idade;
        this.cidade = cidade;
    }
}
class ListaEncadeada {
    constructor() {
        this.cabeca = null;
    }
    adicionarOrdenado(novoNo) {
        if (this.cabeca === null || novoNo.nome.localeCompare(this.cabeca.nome) < 0) {
            novoNo.proximo = this.cabeca;
            this.cabeca = novoNo;
            return;
        }
        let atual = this.cabeca;
        while (atual.proximo !== null && novoNo.nome.localeCompare(atual.proximo.nome) > 0) {
            atual = atual.proximo;
        }
        novoNo.proximo = atual.proximo;
        atual.proximo = novoNo;
    }
    buscar(nome) {
        let atual = this.cabeca;
        while (atual !== null) {
            if (atual.nome.toLowerCase() === nome.toLowerCase()) {
                return atual;
            }
            atual = atual.proximo;
        }
        return null;
    }
    excluir(nome) {
        if (this.cabeca === null)
            return false;
        if (this.cabeca.nome.toLowerCase() === nome.toLowerCase()) {
            this.cabeca = this.cabeca.proximo;
            return true;
        }
        let atual = this.cabeca;
        while (atual.proximo !== null) {
            if (atual.proximo.nome.toLowerCase() === nome.toLowerCase()) {
                atual.proximo = atual.proximo.proximo;
                return true;
            }
            atual = atual.proximo;
        }
        return false;
    }
    listar() {
        const atletas = [];
        let atual = this.cabeca;
        while (atual !== null) {
            atletas.push(atual);
            atual = atual.proximo;
        }
        return atletas;
    }
}
const lista = new ListaEncadeada();
function atualizarTabela() {
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
function adicionarAtleta() {
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
}
function buscarAtleta() {
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
}
function excluirAtleta() {
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
}
