export class Queue<T> {
  private items: T[] = [];

  // Insere no final
  enqueue(element: T): void {
    this.items.push(element);
  }

  // Remove do início
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // Consulta o primeiro sem remover
  front(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  toarray(): T[] {
    return this.items;
  }
}