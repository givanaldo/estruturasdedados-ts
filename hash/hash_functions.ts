function hash(chave: number, tamanho: number): number {
    return chave % tamanho;
}

console.log(hash(63, 10));  // retorna 3

function hash_str(chave: string, tamanho: number): number {
    let hash = 0;
    for (let i = 0; i < chave.length; i++) {
        console.log(`${chave[i]}: ${chave.charCodeAt(i)}`);
        hash += chave.charCodeAt(i);
    }
    return hash % tamanho;
}

console.log(hash_str("Alice", 10));  // retorna 8