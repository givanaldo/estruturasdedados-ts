function max(...numeros: number[]): number{
    let maior = numeros[0];
    for (let i=1; i<numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
}

console.log(max(1, 20, 3, 4, 5, 64, 7, 82, 9, 10)); 
console.log(max(50, 160, 90, 120));