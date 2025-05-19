import { Aluno } from './aluno';
import { shellSort, mergeSort, quickSort } from './ordenacao';

// Funções auxiliares para gerar dados aleatórios
const nomes = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo', 'Fernanda', 'Guilherme', 'Helena', 'Igor', 'Juliana'];
const cursos = ['ADS', 'Medicina', 'Engenharia', 'Direito', 'Arquitetura', 'Biologia'];

function randomNome(): string {
  return nomes[Math.floor(Math.random() * nomes.length)] + " " +
         Math.floor(Math.random() * 1000);
}

function randomCurso(): string {
  return cursos[Math.floor(Math.random() * cursos.length)];
}

function randomIdade(): number {
  return Math.floor(Math.random() * 50) + 18;
}

// Gera 10 alunos aleatórios
const alunos: Aluno[] = [];
for (let i = 0; i < 10; i++) {
  alunos.push(new Aluno(randomNome(), randomCurso(), randomIdade()));
}

const cmpNome = (a: Aluno, b: Aluno) => a.getNome().localeCompare(b.getNome());
const cmpIdade = (a: Aluno, b: Aluno) => a.getIdade() - b.getIdade();

// Cópias para testes independentes
const arrShell = [...alunos];
const arrMerge = [...alunos];
const arrQuick = [...alunos];

console.log('Alunos antes da ordenação:');
alunos.forEach(aluno => {
  console.log(`Nome: ${aluno.getNome()}, Curso: ${aluno.getCurso()}, Idade: ${aluno.getIdade()}`);
});

console.log('\nOrdenando alunos por nome...\n');

console.time('ShellSort');
const sortedShell = shellSort(arrShell, cmpNome);
console.timeEnd('ShellSort');

console.time('MergeSort');
const sortedMerge = mergeSort(arrMerge, cmpNome);
console.timeEnd('MergeSort');

console.time('QuickSort');
const sortedQuick = quickSort(arrQuick, cmpIdade);
console.timeEnd('QuickSort');

console.log('Alunos depois da ordenação:');
sortedQuick.forEach(aluno => {
  console.log(`Nome: ${aluno.getNome()}, Curso: ${aluno.getCurso()}, Idade: ${aluno.getIdade()}`);
});
