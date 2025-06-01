import { Queue } from "./queue";

enum TipoCliente {
    COMUM = "Comum",
    VIP = "VIP"
}

interface Chamada {
    id: number;
    tipoCliente: TipoCliente;
    tempoChegada: number; 
    tempoAtendimentoEstimado: number; 
}

class CallCenter {
    private filaVIP: Queue<Chamada>;
    private filaComum: Queue<Chamada>;
    private proximoIdChamada: number;
    private tempoAtualSimulacao: number;

    private totalTempoEsperaComum: number;
    private totalChamadasAtendidasComum: number;
    private totalTempoEsperaVIP: number;
    private totalChamadasAtendidasVIP: number;

    constructor() {
        this.filaVIP = new Queue<Chamada>();
        this.filaComum = new Queue<Chamada>();
        this.proximoIdChamada = 1;
        this.tempoAtualSimulacao = 0;

        this.totalTempoEsperaComum = 0;
        this.totalChamadasAtendidasComum = 0;
        this.totalTempoEsperaVIP = 0;
        this.totalChamadasAtendidasVIP = 0;
    }

    avancarTempo(unidades: number = 1): void {
        this.tempoAtualSimulacao += unidades;
        console.log(`\n--- Tempo da Simulação: ${this.tempoAtualSimulacao} ---`);
    }

    novaChamada(tipo: TipoCliente, duracaoAtendimento: number): void {
        const novaChamada: Chamada = {
            id: this.proximoIdChamada++,
            tipoCliente: tipo,
            tempoChegada: this.tempoAtualSimulacao,
            tempoAtendimentoEstimado: duracaoAtendimento
        };

        if (tipo === TipoCliente.VIP) {
            this.filaVIP.enqueue(novaChamada);
            console.log(`[${this.tempoAtualSimulacao}] 📞 Nova chamada VIP (ID: ${novaChamada.id}) adicionada.`);
        } else {
            this.filaComum.enqueue(novaChamada);
            console.log(`[${this.tempoAtualSimulacao}] 📞 Nova chamada Comum (ID: ${novaChamada.id}) adicionada.`);
        }
        this.statusFilas();
    }

    atenderProximaChamada(): void {
        let chamadaAtendida: Chamada | undefined;

        if (!this.filaVIP.isEmpty()) {
            chamadaAtendida = this.filaVIP.dequeue();
        } else if (!this.filaComum.isEmpty()) {
            chamadaAtendida = this.filaComum.dequeue();
        }

        if (chamadaAtendida) {
            const tempoEspera = this.tempoAtualSimulacao - chamadaAtendida.tempoChegada;

            if (chamadaAtendida.tipoCliente === TipoCliente.VIP) {
                this.totalTempoEsperaVIP += tempoEspera;
                this.totalChamadasAtendidasVIP++;
                console.log(`[${this.tempoAtualSimulacao}] ✅ Atendendo VIP (ID: ${chamadaAtendida.id}). Espera: ${tempoEspera}. Atendimento: ${chamadaAtendida.tempoAtendimentoEstimado}.`);
            } else {
                this.totalTempoEsperaComum += tempoEspera;
                this.totalChamadasAtendidasComum++;
                console.log(`[${this.tempoAtualSimulacao}] ✅ Atendendo Comum (ID: ${chamadaAtendida.id}). Espera: ${tempoEspera}. Atendimento: ${chamadaAtendida.tempoAtendimentoEstimado}.`);
            }
            this.avancarTempo(chamadaAtendida.tempoAtendimentoEstimado);
        } else {
            console.log(`[${this.tempoAtualSimulacao}] 😴 Nenhuma chamada nas filas para atender.`);
        }
        this.statusFilas();
    }

    statusFilas(): void {
        const filaVIPIds = this.filaVIP.isEmpty() ? 'Vazia' : this.filaVIP.items.map(c => c.id).join(', ');
        const filaComumIds = this.filaComum.isEmpty() ? 'Vazia' : this.filaComum.items.map(c => c.id).join(', ');

        console.log(`   Fila VIP (${this.filaVIP.size()}): [${filaVIPIds}]`);
        console.log(`   Fila Comum (${this.filaComum.size()}): [${filaComumIds}]`);
    }

    exibirEstatisticas(): void {
        console.log("\n--- Estatísticas Finais do Call Center ---");

        const mediaEsperaComum = this.totalChamadasAtendidasComum > 0
            ? (this.totalTempoEsperaComum / this.totalChamadasAtendidasComum).toFixed(2)
            : "N/A";
        const mediaEsperaVIP = this.totalChamadasAtendidasVIP > 0
            ? (this.totalTempoEsperaVIP / this.totalChamadasAtendidasVIP).toFixed(2)
            : "N/A";

        console.log(`\nTempo total de simulação: ${this.tempoAtualSimulacao} unidades.`);

        console.log("\n--- Clientes Comuns ---");
        console.log(`Chamadas atendidas: ${this.totalChamadasAtendidasComum}`);
        console.log(`Tempo total de espera: ${this.totalTempoEsperaComum}`);
        console.log(`Tempo de espera médio: ${mediaEsperaComum}`);

        console.log("\n--- Clientes VIP ---");
        console.log(`Chamadas atendidas: ${this.totalChamadasAtendidasVIP}`);
        console.log(`Tempo total de espera: ${this.totalTempoEsperaVIP}`);
        console.log(`Tempo de espera médio: ${mediaEsperaVIP}`);
        console.log("-----------------------------------------");
    }
}

// --- Simulação ---

const callCenter = new CallCenter();

callCenter.novaChamada(TipoCliente.COMUM, 5); 
callCenter.novaChamada(TipoCliente.VIP, 3);  

callCenter.avancarTempo(1); 
callCenter.novaChamada(TipoCliente.COMUM, 4); 

callCenter.avancarTempo(1); 
callCenter.atenderProximaChamada(); 

callCenter.avancarTempo(4); 
callCenter.novaChamada(TipoCliente.VIP, 2);   
callCenter.novaChamada(TipoCliente.COMUM, 6); 

callCenter.avancarTempo(1); 
callCenter.atenderProximaChamada(); 

callCenter.avancarTempo(3); 
callCenter.novaChamada(TipoCliente.VIP, 1); 
callCenter.atenderProximaChamada();

callCenter.avancarTempo(6); 
callCenter.atenderProximaChamada(); 

callCenter.avancarTempo(2); 
callCenter.atenderProximaChamada();

callCenter.avancarTempo(5); 
callCenter.atenderProximaChamada(); 

callCenter.avancarTempo(7); 
callCenter.atenderProximaChamada(); 

callCenter.exibirEstatisticas();