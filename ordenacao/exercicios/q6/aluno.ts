export class Aluno {
  constructor(
    public matricula: number,
    public nome: string,
    public media: number
  ) {}

  toString(): string {
    return `${this.nome} - Matrícula: ${this.matricula} - Média: ${this.media.toFixed(1)}`;
  }
}
