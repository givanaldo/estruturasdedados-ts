import { Queue } from './queue';

interface Cliente {
  id: number;
  nome: string;
  arrival: number;       // instante de chegada (ms desde o início da simulação)
  serviceTime: number;   // duração do atendimento em ms
}

interface Estatistica {
  esperaTotal: number;
  atendidos: number;
}

// Função auxiliar para gerar números aleatórios em [min, max]
function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function simularBanco(simTime: number) {
  const fila = new Queue<Cliente>();
  const stats: Estatistica = { esperaTotal: 0, atendidos: 0 };

  let clock = 0;
  let nextArrival = rand(500, 1500);  // próxima chegada entre 0.5s e 1.5s
  let atendimentoEndsAt = Infinity;
  let atendenteLivre = true;
  let clienteId = 1;

  while (clock <= simTime) {
    // Chegada de cliente
    if (clock === nextArrival) {
      const cliente: Cliente = {
        id: clienteId++,
        nome: `Cliente${clienteId}`,
        arrival: clock,
        serviceTime: rand(800, 2000) // atendimento entre 0.8s e 2s
      };
      fila.enqueue(cliente);
      // agenda próxima chegada
      nextArrival = clock + rand(500, 1500);
    }

    // Se atendente livre e fila não vazia, inicia atendimento
    if (atendenteLivre && !fila.isEmpty()) {
      const cliente = fila.dequeue()!;
      const wait = clock - cliente.arrival;
      stats.esperaTotal += wait;
      stats.atendidos++;

      atendimentoEndsAt = clock + cliente.serviceTime;
      atendenteLivre = false;
      console.log(`Iniciou atendimento ao ${cliente.nome} em ${clock}ms (esperou ${wait}ms).`);
    }

    // Verifica fim do atendimento
    if (!atendenteLivre && clock === atendimentoEndsAt) {
      console.log(`Atendimento finalizado em ${clock}ms.`);
      atendenteLivre = true;
    }

    clock += 100; // avança 100ms por iteração
  }

  console.log('--- Estatísticas ---');
  console.log(`Total atendidos: ${stats.atendidos}`);
  console.log(`Espera média: ${(stats.esperaTotal / stats.atendidos).toFixed(2)} ms`);
}

// Roda simulação por 30 segundos (30000ms)
simularBanco(30_000);
