import { Stack } from "./stack";

interface Palete {
    id: number;
    produto: string;
}

class DepositoPaletes {
    private pilhaPaletes: Stack<Palete>;
    private proximoIdPalete: number;

    constructor() {
        this.pilhaPaletes = new Stack<Palete>();
        this.proximoIdPalete = 1;
        console.log("Depósito de Paletes pronto para operações.");
    }

    empilharPalete(produto: string): void {
        const novoPalete: Palete = {
            id: this.proximoIdPalete++,
            produto: produto
        };
        this.pilhaPaletes.push(novoPalete);
        console.log(`\n📥 Operador empilhou: ${novoPalete.produto} (ID: ${novoPalete.id}).`);
        this.statusDeposito();
    }

    desempilharPalete(): void {
        const paleteRetirado = this.pilhaPaletes.pop();
        if (paleteRetirado) {
            console.log(`\n📤 Operador desempilhou: ${paleteRetirado.produto} (ID: ${paleteRetirado.id}).`);
        } else {
            console.log("\n⚠️ Depósito vazio! Não há paletes para desempilhar.");
        }
        this.statusDeposito();
    }

    verPaleteNoTopo(): void {
        const paleteNoTopo = this.pilhaPaletes.peek();
        if (paleteNoTopo) {
            console.log(`\n👀 Palete no topo: ${paleteNoTopo.produto} (ID: ${paleteNoTopo.id}).`);
        } else {
            console.log("\n⚠️ Depósito vazio! Ninguém no topo para ver.");
        }
        this.statusDeposito();
    }

    statusDeposito(): void {
        console.log(`   Situação atual do Depósito (${this.pilhaPaletes.size()} paletes):`);
        console.log(`   Pilha: ${this.pilhaPaletes.toString()}`);
    }

    limparDeposito(): void {
        this.pilhaPaletes.clear();
        console.log("\n🧹 Depósito de paletes limpo.");
        this.statusDeposito();
    }
}

// --- Simulação do Operador no Depósito ---
const meuDeposito = new DepositoPaletes();

console.log("\n--- Chegada e Empilhamento de Paletes ---");
meuDeposito.empilharPalete("Cimento");   
meuDeposito.empilharPalete("Tijolo");   
meuDeposito.empilharPalete("Telha");     
meuDeposito.empilharPalete("Areia");     

meuDeposito.verPaleteNoTopo(); 

console.log("\n--- Retirada de Paletes ---");
meuDeposito.desempilharPalete(); 
meuDeposito.desempilharPalete(); 

meuDeposito.empilharPalete("Madeira");   

meuDeposito.desempilharPalete(); 
meuDeposito.desempilharPalete(); 
meuDeposito.desempilharPalete(); 

console.log("\n--- Tentativa de Retirada com Depósito Vazio ---");
meuDeposito.desempilharPalete(); 

console.log("\n--- Limpando o Depósito ---");
meuDeposito.empilharPalete("Ferro");
meuDeposito.empilharPalete("PVC");
meuDeposito.limparDeposito();