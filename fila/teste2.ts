import { Queue } from './queue';

interface Cliente {
  id: number;
  nome: string;
  arrival: number;       // instante de chegada em ms
  serviceTime: number;   // duração do atendimento em ms
}

interface Estatistica {
  esperaTotal: number;
  atendidos: number;
}

// Gera um inteiro aleatório entre min e max (inclusive)
function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function simularBanco(simTime: number) {
  const fila = new Queue<Cliente>();
  const stats: Estatistica = { esperaTotal: 0, atendidos: 0 };

  let clock = 0;
  let nextArrival = rand(500, 1500);
  let atendimentoEndsAt = Infinity;
  let atendenteLivre = true;
  let clienteId = 0;

  while (clock <= simTime) {
    // 1) Chegada: se passamos do próximo arrival
    if (clock >= nextArrival) {
      const cliente: Cliente = {
        id: clienteId++,
        nome: `Cliente${clienteId}`,
        arrival: clock,
        serviceTime: rand(800, 2000)
      };
      fila.enqueue(cliente);
      console.log(`Chegou ${cliente.nome} em ${clock}ms.`);
      nextArrival = clock + rand(500, 1500);
    }

    // 2) Fim do atendimento atual
    if (!atendenteLivre && clock >= atendimentoEndsAt) {
      console.log(`Atendimento finalizado em ${clock}ms.`);
      atendenteLivre = true;
    }

    // 3) Se atendente livre e houver gente na fila, inicia atendimento
    if (atendenteLivre && !fila.isEmpty()) {
      const cliente = fila.dequeue()!;
      const wait = clock - cliente.arrival;
      stats.esperaTotal += wait;
      stats.atendidos++;

      atendimentoEndsAt = clock + cliente.serviceTime;
      atendenteLivre = false;
      console.log(`Iniciou atendimento ao ${cliente.nome} em ${clock}ms (esperou ${wait}ms).`);
    }

    clock += 100; // avança 100 ms por iteração
  }

  console.log('\n--- Estatísticas ---');
  console.log(`Total atendidos: ${stats.atendidos}`);
  console.log(`Espera média: ${(stats.esperaTotal / stats.atendidos).toFixed(2)} ms`);
}

// Executa a simulação por 30 segundos
simularBanco(30_000);
