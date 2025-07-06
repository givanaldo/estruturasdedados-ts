const mapaDeMapas = new Map<string, Map<string, number>>();

const notasAluno1 = new Map<string, number>();
notasAluno1.set("Matemática", 8.5);
notasAluno1.set("Português", 7.0);

const notasAluno2 = new Map<string, number>();
notasAluno2.set("Matemática", 10.0);
notasAluno2.set("Português", 8.0);
notasAluno2.set("Inglês", 8.5);

mapaDeMapas.set("Aluno 1", notasAluno1);
mapaDeMapas.set("Aluno 2", notasAluno2);

for (let [aluno, notas] of mapaDeMapas.entries()) {
    console.log(`# Nome: ${aluno}`);
    for (let [disciplina, nota] of notas.entries()) {
        console.log(`  - ${disciplina}: ${nota.toFixed(1)}`);
    }
}