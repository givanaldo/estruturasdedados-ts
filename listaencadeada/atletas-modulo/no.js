export class No {
    nome;
    posicao;
    altura;
    idade;
    cidade;
    proximo = null;
    constructor(nome, posicao, altura, idade, cidade) {
        this.nome = nome;
        this.posicao = posicao;
        this.altura = altura;
        this.idade = idade;
        this.cidade = cidade;
    }
}
