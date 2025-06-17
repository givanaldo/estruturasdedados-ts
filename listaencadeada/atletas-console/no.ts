export class No {
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
