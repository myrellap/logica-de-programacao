/********************************************************* 
|     |      Exercicio vetor matriz 
/*********************************************************/


// Crie um vetor que rececebera dados de um usuario.
var dados = [];
console.log("Favor informar seu nome:");
dados.push("Gustavo");

console.table(dados);

console.log("Informe seu cpf:");
dados.push("123.456.789-09");

console.table(dados);

// Mostre ao usuario os dados e de um bom dia!
console.log("Bom dia", dados[0], "seu CPF é:", dados[1]);

