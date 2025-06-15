export class No<T> {
    valor: T;
    proximo: No<T> | null = null;

    constructor(valor: T) {
        this.valor = valor;
    }
}