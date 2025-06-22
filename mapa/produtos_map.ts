const mapaProdutos = new Map<number, string>();

mapaProdutos.set(1, "Teclado");
mapaProdutos.set(2, "Mouse");
mapaProdutos.set(3, "Monitor");

console.log(mapaProdutos.get(2));

mapaProdutos.forEach((valor, chave) => {
    console.log(`[${chave}] ${valor}`);
});