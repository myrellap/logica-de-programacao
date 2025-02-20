/*************************************************************
|   |   |   |   |   |  Lista de exercicios 05
**************************************************************/
// 1. Crie uma função que receba como parametro o ano do nascimento de uma pessoa a retorne sua idade.
function idade(anoAtual, anoNascimento) {
  return anoAtual - anoNascimento;
}
console.log("a myrella tem", idade(2025, 2007), "anos.");

// 2. Crie uma função que receba a quantidade de combustivel de um carro e retorne quantos kms ele  pode viajar com esse combustivel. Considere que o veículo faz uma média de 12 kms/L.
const combustivel = (litros) => {
  return litros * 12;
};
var car1 = 20;
var car2 = 8;
var car3 = 2;
console.log("Carro 1: ", car1, " ->", combustivel(car1), "kms,");
console.log("Carro 1: ", car2, " ->", combustivel(car2), "kms,");
console.log("Carro 1: ", car3, " ->", combustivel(car3), "kms,");
