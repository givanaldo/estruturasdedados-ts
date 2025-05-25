import { Aluno } from './aluno';

const alunos: Aluno[] = [
    new Aluno(2023001, 'Ana Silva', 7.8),
    new Aluno(2023002, 'Bruno Costa', 9.2),
    new Aluno(2023003, 'Carla Souza', 6.5),
    new Aluno(2023004, 'Daniel Oliveira', 8.9),
    new Aluno(2023005, 'Eduardo Lima', 5.4),
    new Aluno(2023006, 'Fernanda Rocha', 9.5),
    new Aluno(2023007, 'Gabriel Martins', 7.3),
    new Aluno(2023008, 'Helena Ferreira', 8.0),
    new Aluno(2023009, 'Igor Alves', 6.8),
    new Aluno(2023010, 'Juliana Pereira', 9.0),
];

function ordenarPorMedia(lista: Aluno[]): Aluno[] {
    return [...lista].sort((a, b) => b.media - a.media);
}

function ordenarPorNome(lista: Aluno[]): Aluno[] {
    return [...lista].sort((a, b) => a.nome.localeCompare(b.nome));
}

console.log('Alunos ordenados por média (maior para menor):');
ordenarPorMedia(alunos).forEach(aluno => {
    console.log(aluno.toString());
});

console.log('\nAlunos ordenados por nome (ordem alfabética):');
ordenarPorNome(alunos).forEach(aluno => {
    console.log(aluno.toString());
});
