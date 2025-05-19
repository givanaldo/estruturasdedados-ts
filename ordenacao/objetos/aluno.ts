export class Aluno {
  
    constructor(
        private nome: string, 
        private curso: string, 
        private idade: number  ) { }

    getNome(): string {
        return this.nome;
    }

    getCurso(): string {
        return this.curso;
    }

    getIdade(): number {
        return this.idade;
    }
}