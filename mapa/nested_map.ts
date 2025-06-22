const mapaDeMapas = new Map<string, Map<string, number>>();

const notasAluno = new Map<string, number>();
notasAluno.set("Matemática", 8.5);
notasAluno.set("Português", 7.0);

mapaDeMapas.set("Aluno1", notasAluno);

console.log(mapaDeMapas.get("Aluno1")?.get("Matemática"));