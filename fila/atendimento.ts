import { Queue } from './queue';

interface Cliente {
  id: number;
  nome: string;
  chegada: number;  
  duracao: number;  
}

interface Estatistica {
  esperaTotal: number;
  atendidos: number;
}

// inteiro aleatório entre min e max
function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function simularBanco(tempoSimulacao: number) {
  const fila = new Queue<Cliente>();
  const stats: Estatistica = { esperaTotal: 0, atendidos: 0 };

  let relogio = 0;
  let proxChegada = rand(500, 1500);
  let atendimentoFim = Infinity;
  let atendenteLivre = true;
  let clienteId = 0;

  while (relogio <= tempoSimulacao) {
    // 1) Chegada
    if (relogio >= proxChegada) {
      const cliente: Cliente = {
        id: clienteId++,
        nome: `Cliente ${clienteId}`,
        chegada: relogio,
        duracao: rand(800, 2000)
      };
      fila.enqueue(cliente);
      console.log(`Chegou ${cliente.nome} em ${relogio}ms.`);
      proxChegada = relogio + rand(500, 1500);
    }

    // 2) Fim do atendimento atual
    if (!atendenteLivre && relogio >= atendimentoFim) {
      console.log(`Atendimento finalizado em ${relogio}ms.`);
      atendenteLivre = true;
    }

    // 3) Se atendente livre e houver gente na fila, inicia atendimento
    if (atendenteLivre && !fila.isEmpty()) {
      const cliente = fila.dequeue()!;
      const tempoEspera = relogio - cliente.chegada;
      stats.esperaTotal += tempoEspera;
      stats.atendidos++;

      atendimentoFim = relogio + cliente.duracao;
      atendenteLivre = false;
      console.log(`Iniciou atendimento ao ${cliente.nome} em ${relogio}ms (esperou ${tempoEspera}ms).`);
    }

    relogio += 100; // avança 100 ms por iteração
  }

  console.log('\n--- Estatísticas ---');
  console.log(`Total atendidos: ${stats.atendidos}`);
  console.log(`Espera média: ${(stats.esperaTotal / stats.atendidos).toFixed(2)} ms`);
}

// Executa a simulação por 30 segundos
simularBanco(30000);
