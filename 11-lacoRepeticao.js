//Laço de repetição - FOR

// O professor te colocou de castigo e pediu para você escrever mil vezes a frase "Eu vou prestar atenção às aulas."

for (let i = 0; i < 1000; i++) {
  console.log("Eu vou prestar atenção às aulas.");
}

//Escreva todos os números de 1 a 20 com loop for
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//mostre no console do sistema os números pares entre 1 e 20
for (let i = 1; i <= 20; i++) {
  i % 2 == 0 && console.log(i);
}

//Dado um vetor, calcule e exiba o somatório de seus elementos
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros.length);
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("Soma dos elementos:", soma);

// Dado um vetor, calcule e exiba a quantidade de pares e de ímpares
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var pares = 0;
var impares = 0;

for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? pares++ : impares++;
}
console.log("Total de pares:", pares);
console.log("Total de impares:", impares);

// Dado um vetor, multiplique todos os seus elementos por 3 com o laço FOR
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.table(numeros);

for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3; // numeros[i] = numeros[i] * 3;
}

console.log("Vetor multiplicado por 3");
console.table(numeros);

// Dada uma matriz 2x3, mostre ao usuario todos os seus elementos com as respectivas posições
var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    // console.log("Matriz[", linha, "][", coluna, "] =", matriz[linha][coluna]);
    console.log(`Matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
  }
}

// console.log("Matriz[ linha 0 coluna 0] =", matriz[0][0]);
