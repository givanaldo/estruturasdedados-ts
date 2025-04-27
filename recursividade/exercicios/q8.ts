function palindromo(palavra: string): boolean {
    function checkPalindromo(ini: number, fim: number): boolean {
        if (ini >= fim)
            return true;
        if (palavra[ini] !== palavra[fim])
            return false;
        return checkPalindromo(ini + 1, fim - 1);
    }

    return checkPalindromo(0, palavra.length - 1);
}

console.log(palindromo("radar")); // Verdadeiro
console.log(palindromo("hello")); // Falso