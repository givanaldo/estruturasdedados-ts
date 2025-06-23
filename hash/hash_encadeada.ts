class Item {
    constructor(public chave: number, public valor: string) {}
}

class TabelaHash {
    tabela: Item[][];

    constructor(private tamanho: number) {
        this.tabela = new Array(tamanho).fill(null).map(() => []);
    }

    private hash(chave: number): number {
        return chave % this.tamanho;
    }

    inserir(chave: number, valor: string): void {
        const indice = this.hash(chave);
        this.tabela[indice].push(new Item(chave, valor));
    }

    buscar(chave: number): string | null {
        const indice = this.hash(chave);
        for (const item of this.tabela[indice]) {
            if (item.chave === chave) {
                return item.valor;
            }
        }
        return null;
    }

    remover(chave: number): void {
        const indice = this.hash(chave);
        this.tabela[indice] = this.tabela[indice].filter(item => item.chave !== chave);
    }
}

// Exemplo de uso
const tabela = new TabelaHash(10); 
tabela.inserir(1, "Valor 1");
tabela.inserir(11, "Valor 2"); // Colisão, será armazenado na mesma lista encadeada
tabela.inserir(2, "Valor 3");
console.log(tabela.buscar(1)); // Saída: "Valor 1"
console.log(tabela.buscar(11)); // Saída: "Valor 2" 
console.log(tabela.buscar(2)); // Saída: "Valor 3"
//tabela.remover(1);
console.log(tabela.buscar(3)); // Saída: null
console.log(tabela.buscar(11)); // Saída: "Valor 2" (ainda está presente)
console.log(tabela.buscar(2)); // Saída: "Valor 3"
console.log(tabela.tabela); // Exibe a tabela hash com os itens armazenados
console.log(tabela.tabela[0]); // Exibe a lista encadeada no índice 0
console.log(tabela.tabela[1]); // Exibe a lista encadeada no índice 1
console.log(tabela.tabela[2]); // Exibe a lista encadeada no índice 2
console.log(tabela.tabela[3]); // Exibe a lista encadeada no índice 3
