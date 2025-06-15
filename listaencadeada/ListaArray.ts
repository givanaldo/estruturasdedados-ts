export class ListaArray<T> {
    private dados: T[] = [];

    adicionar(item: T): void {
        this.dados.push(item);
    }

    inserir(pos: number, item: T): void {
        this.dados.splice(pos, 0, item);
    }

    remover(pos: number): T | undefined {
        if (pos >= 0 && pos < this.dados.length) {
            return this.dados.splice(pos, 1)[0];
        }
        return undefined;
    }

    get(pos: number): T | undefined {
        return this.dados[pos];
    }

    tamanho(): number {
        return this.dados.length;
    }
    
    imprimir(): void {
        console.log("Lista:", this.dados);
    }
}

