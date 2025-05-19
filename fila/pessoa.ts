export class Pessoa {
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    toString(): string {
        return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }
}
