class No {
    nome: string;
    posicao: string;
    altura: number;
    idade: number;
    cidade: string;
    proximo: No | null = null;

    constructor(nome: string, posicao: string, altura: number, idade: number, cidade: string) {
        this.nome = nome;
        this.posicao = posicao;
        this.altura = altura;
        this.idade = idade;
        this.cidade = cidade;
    }
}

class ListaEncadeada {
    cabeca: No | null = null;

    adicionarOrdenado(novoNo: No): void {
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

    buscar(nome: string): No | null {
        let atual = this.cabeca;
        while (atual !== null) {
            if (atual.nome.toLowerCase() === nome.toLowerCase()) {
                return atual;
            }
            atual = atual.proximo;
        }
        return null;
    }

    excluir(nome: string): boolean {
        if (this.cabeca === null) return false;

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

    listar(): No[] {
        const atletas: No[] = [];
        let atual = this.cabeca;
        while (atual !== null) {
            atletas.push(atual);
            atual = atual.proximo;
        }
        return atletas;
    }
}


const lista = new ListaEncadeada();

function atualizarTabela(): void {
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

function adicionarAtleta(): void {
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
}

function buscarAtleta(): void {
    const nome = (document.getElementById("nomeBusca") as HTMLInputElement).value;
    const atleta = lista.buscar(nome);

    if (atleta) {
        alert(`Atleta encontrado: ${atleta.nome}, posição: ${atleta.posicao}, cidade: ${atleta.cidade}`);
    } else {
        alert("Atleta não encontrado.");
    }
    // Limpar campo após buscar
    (document.getElementById("nomeBusca") as HTMLInputElement).value = "";
}

function excluirAtleta(): void {
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
}
