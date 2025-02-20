// criando variaveis do tipo array (Vetor)
var numeros = [1, 2, 3, 4, 5];
console.log(numeros); //imprimindo od dados do array
console.log(numeros); //imprimindo os dados em forma de tabela
console.log(numeros[1]); //imprimindo o item do indice 1
console.log(" o vetor tem;", numeros.length, "elementos.");

var dinos = [
  "Tironossauro Rex",
  "Estegossauro",
  "Anquilonossauro",
  "Tiranossauro",
];

console.log(dinos); // imprimindo os dados
console.log(dinos); //imprimindo os dados em forma de tabela
console.log("O vetor dinos tem;", dinos.length, "elementos,");

// adicionando elementos a um valor existente
dinos.push("Brontossauro"); //adiciona um elemento no final do vetor
console.log(dinos);
console.log("O vetor dinos tem;", dinos.length, "elementos,");

dinos.unshift("Tricoratops"); //adiciona um sistema no inicio do vetor
console.log(dinos);
console.log("O vetor dinos tem;", dinos.length, "elementos,");

//obtendo um elemento com base em seu indice (posiçao)
console.log("1ª posiçao;", dinos[0]);
console.log("2ª posiçao;", dinos[2]);
console.log("3ª posiçao;", dinos[19]);
// apresenta um erro (undefined)

//Alterando elementos com base em seu indice (posiçao)
dinos[3] = "velociraptor";
console.log(dinos);

//Renovando elementos do vetor
var dinos = [
  "Triceratops",
  "Tiranossauro Rex",
  "Esterogossauro",
  "Anquilossauro",
  "Brontossauro",
];

console.table(dinos);

dinos.pop(); //Remove o ultimo elemento do array (vetor)
console.table(dinos);

dinos.shift(); //Remove o primeiro elemento do array (vetor)
console.table(dinos);

dinos.slice(1, 1); //Remove o elemento de indice 1 (a partir da posiçao 1, exclui 1 elemento)
console.table(dinos);

var dinos = [
  "Tricoratopos",
  "tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Ictissauro",
  "Pterodactilo",
  "Espinossauro",
];

console.table(dinos);

elementoProcurado = "Estegossauro";

var posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "esta no indice:", posicao);

elementoProcurado = "Estegossauro";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no indice:", posicao);
console.log(
  "indexOf = -1 significa que o elemento não foiencontrado no vetor!"
);

var elementoExcluir = "Pterodactilo";
var posicao = dinos.indexOf(elementoExcluir);
dinos.splice(posicao, 1);
console.table(dinos);

// Criando uma copia de um array (vetor)
var copia = dinos.slice();
console.log("Copiando um vetor!");
console.table(copia);

//criando um array numerico
var numeros = [4, 3, 2, 1, 9, 7, 2];
console.table(numeros);

// imprimindo os elementos das posicoes impares
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);

// verificando se o array contem o item
console.log("contem 9:", numeros.includes(9));
var contem0 = numeros.includes(0);
console.log("contem 0:", contem0);

// Ordenando os elementos do vetor
numeros.sort();
console.table(numeros);

// Invertendo a ordem ou posição dos itens
numeros.reverse();
console.log(numeros);

// Alterando o valor de um elemento com base em sua posição
numeros[2] = 5;
console.table(numeros);

numeros[0] ** 3;
console.table(numeros);
numeros[5] * numeros[0];
console.table(numeros);

// criando arrays hibridos
var hibrido = [10, "pafuncio", 3.43, "zuleika", 7];
console.table(hibrido);

hibrido[1] = 9;
console.table(hibrido);

hibrido[0] = "tiburcio";
console.table(hibrido);

// criando uma matriz
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [1, 3, 9],
];
console.table(matriz);

// Obtendo elemento com base em seus indicos
console.log("Matriz[1,2] =", matriz[1][2]);
console.log("Matriz[2,0] =", matriz[2][0]);

// alterando valores de elementos com base em seus indicos
matriz[1][2] = 20;
matriz[2][0] = 30;
console.table(matriz);
