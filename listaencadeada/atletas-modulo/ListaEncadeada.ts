import { No } from "./no.js";

export class ListaEncadeada {
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
