interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class GerenciadorDeProdutos {
    private produtos: Map<number, Produto>;

    constructor() {
        this.produtos = new Map<number, Produto>();
        this.carregarDoStorage();
    }

    adicionarProduto(produto: Produto): void {
        this.produtos.set(produto.id, produto);
        this.salvarNoStorage();
    }

    listarProdutos(): void {
        console.log("Lista de Produtos:");
        for (const [id, prod] of this.produtos) {
            console.log(`ID: ${id}, Nome: ${prod.nome}, Preço: R$ ${prod.preco}`);
        }
    }

    buscarProduto(id: number): Produto | undefined {
        return this.produtos.get(id);
    }

    removerProduto(id: number): void {
        this.produtos.delete(id);
        this.salvarNoStorage();
    }

    private salvarNoStorage(): void {
        const lista = Array.from(this.produtos.values());
        localStorage.setItem("produtos", JSON.stringify(lista));
    }

    private carregarDoStorage(): void {
        const dados = localStorage.getItem("produtos");
        if (dados) {
            const lista: Produto[] = JSON.parse(dados);
            for (const prod of lista) {
                this.produtos.set(prod.id, prod);
            }
        }
    }
}

// Testando... (não funciona direto no Node, testar no Playground)

const gerenciador = new GerenciadorDeProdutos();

gerenciador.adicionarProduto({ id: 1, nome: "Notebook", preco: 3500 });
gerenciador.adicionarProduto({ id: 2, nome: "Mouse", preco: 150 });

gerenciador.listarProdutos();

console.log("Buscar produto ID 2:", gerenciador.buscarProduto(2));

gerenciador.removerProduto(1);
gerenciador.listarProdutos();