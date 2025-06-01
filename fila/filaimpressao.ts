import { Queue } from "./queue";

enum PrioridadeTrabalho {
    BAIXA = "Baixa",
    NORMAL = "Normal",
    URGENTE = "Urgente"
}

interface TrabalhoImpressao {
    id: number;
    usuario: string;
    paginas: number;
    urgente: boolean;
    prioridade: PrioridadeTrabalho; 
}

class ImpressoraCorporativa {
    private filaImpressao: Queue<TrabalhoImpressao>;
    private proximoIdTrabalho: number;

    constructor() {
        this.filaImpressao = new Queue<TrabalhoImpressao>();
        this.proximoIdTrabalho = 1;
        console.log("Impressora Corporativa ligada e pronta para receber trabalhos.");
    }

    adicionarTrabalho(usuario: string, paginas: number, isUrgente: boolean = false): void {
        let prioridadeCalculada: PrioridadeTrabalho;

        if (isUrgente) {
            prioridadeCalculada = PrioridadeTrabalho.URGENTE;
        } else if (paginas > 50) {
            prioridadeCalculada = PrioridadeTrabalho.BAIXA;
        } else {
            prioridadeCalculada = PrioridadeTrabalho.NORMAL;
        }

        const novoTrabalho: TrabalhoImpressao = {
            id: this.proximoIdTrabalho++,
            usuario: usuario,
            paginas: paginas,
            urgente: isUrgente,
            prioridade: prioridadeCalculada
        };

        if (novoTrabalho.urgente) {
            this.filaImpressao.items.unshift(novoTrabalho);
            console.log(`📄 TRABALHO URGENTE "${novoTrabalho.id}" (${novoTrabalho.paginas} páginas) de ${novoTrabalho.usuario} ADICIONADO ao INÍCIO da fila.`);
        } else {
            this.filaImpressao.enqueue(novoTrabalho);
            console.log(`📄 Trabalho "${novoTrabalho.id}" (${novoTrabalho.paginas} páginas, ${novoTrabalho.prioridade}) de ${novoTrabalho.usuario} ADICIONADO à fila.`);
        }

        this.statusFila();
    }

    imprimirProximoTrabalho(): void {
        const trabalhoImpresso = this.filaImpressao.dequeue();

        if (trabalhoImpresso) {
            console.log(`\n🖨️ Imprimindo trabalho "${trabalhoImpresso.id}" (${trabalhoImpresso.paginas} páginas, ${trabalhoImpresso.prioridade}) de ${trabalhoImpresso.usuario}...`);
            console.log(`✔️ Trabalho "${trabalhoImpresso.id}" CONCLUÍDO.`);
        } else {
            console.log(`\n😴 Nenhum trabalho na fila de impressão.`);
        }
        this.statusFila();
    }

    statusFila(): void {
        const trabalhosNaFila = this.filaImpressao.isEmpty()
            ? 'Vazia'
            : this.filaImpressao.items.map(t => `ID:${t.id} (${t.prioridade})`).join(', ');
        console.log(`   Status da fila (${this.filaImpressao.size()} trabalhos): [${trabalhosNaFila}]`);
    }

    limparFila(): void {
        this.filaImpressao.clear();
        console.log("\n🧹 Fila de impressão limpa.");
        this.statusFila();
    }
}

// --- Simulação de Uso da Impressora ---

const impressora = new ImpressoraCorporativa();

console.log("\n--- Chegada de Trabalhos ---");

impressora.adicionarTrabalho("Alice", 30);
impressora.adicionarTrabalho("Bob", 80);
impressora.adicionarTrabalho("Charlie", 10);
impressora.adicionarTrabalho("David", 15, true);
impressora.adicionarTrabalho("Eve", 100, true);

console.log("\n--- Início da Impressão ---");

// A ordem esperada é: Eve (urgente), David (urgente), Alice (normal), Charlie (normal), Bob (baixa)
impressora.imprimirProximoTrabalho(); // Imprime Eve
impressora.imprimirProximoTrabalho(); // Imprime David
impressora.imprimirProximoTrabalho(); // Imprime Alice
impressora.imprimirProximoTrabalho(); // Imprime Bob (agora, já que Charlie foi adicionado antes)
impressora.imprimirProximoTrabalho(); // Imprime Charlie
impressora.imprimirProximoTrabalho(); // Tenta imprimir, fila vazia

console.log("\n--- Teste de Adição com Fila Quase Vazia/Vazia ---");
impressora.adicionarTrabalho("Frank", 5);
impressora.adicionarTrabalho("Grace", 70, true); // Urgente e grande
impressora.imprimirProximoTrabalho(); // Grace
impressora.imprimirProximoTrabalho(); // Frank
impressora.imprimirProximoTrabalho(); // Nada

impressora.limparFila();
impressora.imprimirProximoTrabalho(); // Nada