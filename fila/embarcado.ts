interface TarefaCritica {
    id: number;
    nome: string;
    deadline?: number;
}

class CircularBuffer<T> {
    private buffer: (T | null)[]; 
    private capacity: number;    
    private head: number;        
    private tail: number;        
    private count: number;       

    constructor(capacity: number) {
        if (capacity <= 0) {
            throw new Error("A capacidade do buffer circular deve ser um número positivo.");
        }
        this.capacity = capacity;
        this.buffer = new Array<T | null>(capacity).fill(null);
        this.head = 0;
        this.tail = 0;
        this.count = 0;
        console.log(`Buffer Circular inicializado com capacidade: ${this.capacity}`);
    }

    enqueue(element: T): boolean {
        if (this.isFull()) {
            console.warn("⚠️ Buffer circular cheio! Não é possível adicionar mais elementos.");
            return false;
        }

        this.buffer[this.tail] = element;
        this.tail = (this.tail + 1) % this.capacity;
        this.count++;
        console.log(`📥 Elemento adicionado: ${JSON.stringify(element)}. Novo tail: ${this.tail}, count: ${this.count}`);
        return true;
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            console.warn("⚠️ Buffer circular vazio! Não há elementos para remover.");
            return undefined;
        }

        const element = this.buffer[this.head];
        this.buffer[this.head] = null; 
        this.head = (this.head + 1) % this.capacity;
        this.count--;
        console.log(`📤 Elemento removido: ${JSON.stringify(element)}. Novo head: ${this.head}, count: ${this.count}`);
        return element as T;
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.buffer[this.head] as T;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    isFull(): boolean {
        return this.count === this.capacity;
    }

    size(): number {
        return this.count;
    }

    getCapacity(): number {
        return this.capacity;
    }

    clear(): void {
        this.buffer.fill(null);
        this.head = 0;
        this.tail = 0;
        this.count = 0;
        console.log("Buffer circular limpo.");
    }

    toString(): string {
        if (this.isEmpty()) {
            return "[] (Vazio)";
        }
        const elements: string[] = [];
        let current = this.head;
        for (let i = 0; i < this.count; i++) {
            elements.push(JSON.stringify(this.buffer[current]));
            current = (current + 1) % this.capacity;
        }
        return `[${elements.join(', ')}] (Head: ${this.head}, Tail: ${this.tail}, Count: ${this.count})`;
    }
}


console.log("--- Testes do Buffer Circular de Tarefas ---");

// Cenário 1: Buffer pequeno e operações básicas
const bufferPequeno = new CircularBuffer<TarefaCritica>(3);

console.log("\n1. Adicionando tarefas (capacidade 3):");
bufferPequeno.enqueue({ id: 1, nome: "Tarefa A" });
bufferPequeno.enqueue({ id: 2, nome: "Tarefa B" });
console.log(`Buffer: ${bufferPequeno.toString()}`); // [A, B]

console.log("\n2. Tentando adicionar mais uma tarefa (para encher):");
bufferPequeno.enqueue({ id: 3, nome: "Tarefa C" });
console.log(`Buffer: ${bufferPequeno.toString()}`); // [A, B, C]
console.log(`Buffer está cheio? ${bufferPequeno.isFull()}`); // cheio

console.log("\n3. Tentando adicionar em buffer cheio:");
bufferPequeno.enqueue({ id: 4, nome: "Tarefa D" }); // Deve avisar que está cheio
console.log(`Buffer: ${bufferPequeno.toString()}`); // [A, B, C]

console.log("\n4. Removendo tarefas:");
let tarefaRemovida = bufferPequeno.dequeue();
console.log(`Tarefa removida: ${tarefaRemovida ? tarefaRemovida.nome : 'Nenhuma'}`);
console.log(`Buffer: ${bufferPequeno.toString()}`); 
console.log(`Buffer está cheio? ${bufferPequeno.isFull()}`); 

tarefaRemovida = bufferPequeno.dequeue();
console.log(`Tarefa removida: ${tarefaRemovida ? tarefaRemovida.nome : 'Nenhuma'}`); 
console.log(`Buffer: ${bufferPequeno.toString()}`); 

console.log("\n5. Adicionando mais uma tarefa (tail deve dar a volta):");
bufferPequeno.enqueue({ id: 5, nome: "Tarefa E" });
console.log(`Buffer: ${bufferPequeno.toString()}`);

console.log("\n6. Removendo as últimas tarefas:");
bufferPequeno.dequeue(); 
bufferPequeno.dequeue(); 
console.log(`Buffer: ${bufferPequeno.toString()}`); 
console.log(`Buffer está vazio? ${bufferPequeno.isEmpty()}`); 

console.log("\n7. Tentando remover de buffer vazio:");
bufferPequeno.dequeue();

console.log("\n8. Testando peek():");
bufferPequeno.enqueue({ id: 6, nome: "Tarefa F" });
console.log(`Elemento no topo (peek): ${bufferPequeno.peek()?.nome}`); 
console.log(`Buffer (após peek): ${bufferPequeno.toString()}`); 
bufferPequeno.dequeue();
console.log(`Buffer (após dequeue): ${bufferPequeno.toString()}`);

console.log("\n9. Teste de clear():");
bufferPequeno.enqueue({ id: 7, nome: "Tarefa G" });
bufferPequeno.enqueue({ id: 8, nome: "Tarefa H" });
console.log(`Buffer antes do clear: ${bufferPequeno.toString()}`);
bufferPequeno.clear();
console.log(`Buffer após o clear: ${bufferPequeno.toString()}`);

console.log("\n--- Fim dos Testes ---");