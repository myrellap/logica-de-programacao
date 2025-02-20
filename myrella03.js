/******************************************************************
|    |      |       |  Lista de exercicios 03
*******************************************************************/
// 1. Crie um array de frutas comos seguintes elementos: Banana, macã, pera, 
var frutas = ["Banana", "maçã" , "Pera", "Uva" , "Morango"];
console.table(frutas);
// 2. Adicione Tangerina no final.
frutas.push("Tangerina");
console.table(frutas);
// 3. Adiciona Goiaba no inicio.
frutas.push("Goiaba");
console.log(frutas)
// 4. Exibao conteudo do indice 5.
console.log(frutas[5]);
// 5. Exclua o elemento uva.
var posicao = frutas.indexOf("uva");
frutas.splice(posicao, 1);
console.table(frutas);
// 6. crie uma copia do array apenas com os elementos com indicis 2, 3 e 4.
var copia = frutas.slice(2, 5);
console.table(copia);


