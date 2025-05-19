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

  // Exibir a pilha
  toArray(): T[] {
    return this.items;
  }
}