function hanoi(n: number, origem: string, auxiliar: string, destino: string,): void {
  if (n === 1) {
    console.log(`Mover disco 1 de ${origem} para ${destino}`);
    return;
  }

  // Passo 1: move n-1 discos da origem para o auxiliar
  hanoi(n - 1, origem, destino, auxiliar);

  // Passo 2: move o maior disco (o n-ésimo) da origem para o destino
  console.log(`Mover disco ${n} de ${origem} para ${destino}`);

  // Passo 3: move os n-1 discos do auxiliar para o destino
  hanoi(n - 1, auxiliar, origem, destino);
}

hanoi(3, 'O', 'Aux', 'D'); 
