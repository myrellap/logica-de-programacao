/********************************************************************
|   |   |   |   |   | Lista de exercicios 06
/********************************************************************/
/*
Criar uma funçãõ que receba o nome e a idade de uma pessoa e retorne uma
mensagem informando se ela pode votar no Brasil.
Regras para votação no Brasil:
Menores de 16 anos: Não podem votar.
Entre 16 e 17 anos ou acima de 70 anos: o voto é facultativo.
Entre 18 e 70 anos: o voto é obrigatório.
*/

const podeVotar = (idade) => {//isso é uma função
if (idade < 16) {
  return "Não pode votar!";
} else if (idade >= 18 && idade < 70){
    return "Pode votar";
} else {
    return "Voto facultativo!"
}
};
var nome = ["Ygona", "leo", "Fernanda", "Cristiane"];
console.log("Olá", nome[0], "voce tem 16 anos e", podeVotar(16));
console.log("Olá", nome[1], "voce tem 22 anos e", podeVotar(22));
console.log("Olá", nome[2], "voce tem 70 anos e", podeVotar(70));
console.log("Olá", nome[3], "voce tem 12 anos e", podeVotar(12));
console.log("Olá", nome[4], "voce tem 67 anos e", podeVotar(67));
