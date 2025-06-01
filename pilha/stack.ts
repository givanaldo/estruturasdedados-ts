export class Stack<T> {
  private items: T[] = [];

  // Insere no topo
  push(element: T): void {
    this.items.push(element);
  }

  // Remove e retorna o topo
  pop(): T | undefined {
    return this.items.pop();
  }

  // Consulta o topo sem remover
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Verifica se vazia
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Tamanho atual
  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  toString(): string {
    if (this.isEmpty()) return "Vazio";
    
    // Para visualização, mostra do topo para a base
    // [Palete C (Topo), Palete B, Palete A (Base)]
    const reversedItems = [...this.items].reverse();
    return reversedItems.map((item: any) => `[ID:${item.id} - ${item.produto}]`).join(' -> ');
  }

  // Exibir a pilha
  toArray(): T[] {
    return this.items;
  }
}