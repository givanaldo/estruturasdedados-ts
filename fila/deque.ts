// Implementação de um Deque (Double-Ended Queue) 

export class Deque<T> {
    private items: T[] = [];

    constructor() {}

    addFront(element: T): void {
        this.items.unshift(element);
    }

    addBack(element: T): void {
        this.items.push(element);
    }

    removeFront(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }

    removeBack(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }

    peekFront(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    peekBack(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }

    toString(): string {
        return this.items.join(', ');
    }
}