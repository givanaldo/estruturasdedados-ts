function dec2bin(n: number): string {
    if (n === 0)
        return "0";
    if (n === 1)
        return "1";
    return dec2bin(Math.floor(n / 2)) + (n % 2).toString();
}

console.log(`10 em binário = ${dec2bin(10)}`); // 1010
console.log(`128 em binário = ${dec2bin(128)}`); // 10000000
console.log(`63 em binário = ${dec2bin(63)}`); // 111111