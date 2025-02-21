/*************************************************
|   |   |   | Lista de Exercicios 07
*************************************************/
/*
Dada a matriz abaixo, faça um programa em Javascript
 que exiba ao usuário os elementos da sua diagonal principal com o laço FOR.

 |   3   5   8   |
 |   1   9   2   |
 |   7   1   4   |
 */
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    linha == coluna &&
      console.log(`Matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}
    `);
  }
}
/*
Dada a matriz abaixo, faça um programa em java script  
que multiplicou seus elementos por um valor x e exiba ao usuário a matriz ao usuário
a matriz antes e após a multiplicaçãõ.
|   3   5   8   |
|   1   9   2   |
|   7   1   4   |
*/
var matriz = [
    (3, 5, 8),
    (1, 9, 2),
    (7, 1, 4),
];
var x = 4
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
    for(let coluna = 0; coluna <matriz[0].length; colna++) {
        matriz(linha)[coluna] *= x;
    }
} 
console.table(matriz);

// Faça um loop FOR onde apresente os números impares de 0 a 100;
// Não pode ser resolvido com conta ou resto de divisão.
    console.log("Numeros impares de 0 a 100");
    for (let i = 1; i <= 100; i+=2){
        console.log(i);
    }
    console.log("Numeros pares de 0 a 100");
    for (let i = 1; i <= 100; i+=2){
        console.log(i);
    }