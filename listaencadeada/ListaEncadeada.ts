import { No } from "./No";

export class ListaEncadeada<T> {
    private cabeca: No<T> | null = null;
    private tamanho: number = 0;

    adicionar(item: T): void {
        const novoNo = new No(item);
        if (!this.cabeca) {
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
        this.tamanho++;
    }

    inserir(pos: number, item: T): void {
        if (pos < 0 || pos > this.tamanho) return;

        const novoNo = new No(item);
        if (pos === 0) {
            novoNo.proximo = this.cabeca;
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            let anterior: No<T> | null = null;
            let indice = 0;

            while (indice < pos && atual) {
                anterior = atual;
                atual = atual.proximo;
                indice++;
            }
            if (anterior) {
                anterior.proximo = novoNo;
                novoNo.proximo = atual;
            }
        }
        this.tamanho++;
    }

    remover(pos: number): T | null {
        if (pos < 0 || pos >= this.tamanho) return null;

        let atual = this.cabeca;
        let anterior: No<T> | null = null;
        let indice = 0;

        if (pos === 0 && atual) {
            this.cabeca = atual.proximo;
            this.tamanho--;
            return atual.valor;
        }

        while (indice < pos && atual) {
            anterior = atual;
            atual = atual.proximo;
            indice++;
        }

        if (anterior && atual) {
            anterior.proximo = atual.proximo;
            this.tamanho--;
            return atual.valor;
        }

        return null;
    }

    get(pos: number): T | null {
        let atual = this.cabeca;
        let indice = 0;

        while (atual) {
            if (indice === pos) {
                return atual.valor;
            }
            atual = atual.proximo;
            indice++;
        }

        return null;
    }

    contem(valor: T): boolean {
        let atual = this.cabeca;
        while (atual !== null) {
            if (atual.valor === valor) {
                return true;
            }
            atual = atual.proximo;
        }
        return false;
    }

    tamanhoLista(): number {
        return this.tamanho;
    }

    imprimir(): void {
        let atual = this.cabeca;
        let elementos: string[] = [];

        while (atual !== null) {
            elementos.push(String(atual.valor));
            atual = atual.proximo;
        }

        console.log("Lista Encadeada:", elementos.join(" -> "));
    }
}