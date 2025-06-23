const mapaProdutos = new Map<number, string>();

mapaProdutos.set(1, "Teclado");
mapaProdutos.set(2, "Mouse");
mapaProdutos.set(3, "Monitor");
mapaProdutos.set(4, "Pendrive");

for (let [chave, valor] of mapaProdutos.entries())
    console.log(`[${chave}] ${valor}`);

mapaProdutos.forEach((valor, chave) => {
    console.log(`[${chave}] ${valor}`);
});
