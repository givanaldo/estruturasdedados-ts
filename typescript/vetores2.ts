let frutass = new Array("Maçã", "Banana", "Laranja");
frutass.push("Uva");
frutass.unshift("Morango");
console.log(frutass.join(' - '));
frutass.splice(1, 2, "Abacate", "Pera", "Ameixa");
console.log(frutass.join(' - '));
