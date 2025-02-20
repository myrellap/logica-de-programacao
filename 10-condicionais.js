// Condicional simples com IF
var anoNascimento = 2003;
if (anoNascimento > 2003) {
  console.log(" A pessoa nasceu depois de 2003");
}
if (anoNascimento < 2003) {
  console.log(" A pessoa nasceu depois de 2003");
}
if (anoNascimento == 2003) {
  console.log(" A pessoa nasceu em 2003");
}
// condiçoes simples com IF-Else
var anoNascimento = 2025;
if (anoNascimento > 2000) {
  console.log(" A pessoa nasceu depois de 2000");
} else {
  console.log(" A pessoa nasceu em 2000 ou antes");
}

// condiçoes compostas com IF
const login = "admin";
const senha = "12345";

var loginUser = "Pafuncio";
var senhaUser = "Pafuncio";

if (loginUser == login && senhaUser == senha) {
  console.log("Acesso permitido!");
} else {
  console.log("Acesso negado!");
}

// Desvio condicional aninhado - IF-ELSE-IF-ELSE
var semaforo = "vermelho";

if (semaforo == "verde") {
  console.log("siga");
} else if (semaforo == "amarelo") {
  console.log("atenção");
} else {
  console.log("pare!");
}

// Desvio condicional IF com bloco de comandos
var idade = 18;

if (idade <= 18) {
  console.log("Entrei no if...");
  idade++;
  console.log("Incrementei a idade...");
  console.log("Anova idade é", idade);
  console.log("Agora estou saindo do bloco if");
}
console.log("Terminei");

// Criando variaveis locais com "let" (só existe do bloco onde) foram criadas)
var mes = "Agosto";
var dia = 15;

if (dia == 15 && mes == "Agosto") {
  let mensagem = "Hoje é dia 15 de Agosto";
  console.log(mensagem);
}
console.log("Tentando acessar a variavel local fora do bloco, vai dar erro!");
// console.log(mensagem);

// Criando uma função com desvio condicional IF
const desconto = (valorCompra) => {
  let desconto = 0;
  if (valorCompra >= 1000) {
    desconto = (valorCompra * 12) / 100;
  }

  return desconto;
};

var totalCompra = 950;
console.log(
  "Valor total da compra: R$",
  totalCompra,
  "::: Desconto: R$",
  desconto(totalCompra)
);
totalCompra = 1800;
console.log(
  "Valor total da compra: R$",
  totalCompra,
  "::: Desconto: R$",
  desconto(totalCompra)
);


// Desvio condicional IF inline (ternário)
// condição ? expressão_se_ verdadeiro : expressão_se_falso
var preco = 500;
var resultado = preco <= 100 ? "Tá barato!": "Vish, ta muito caro!";

// O operador acima é o mesmo que escrever!
// if(preco <=100){
// resultado = "Ta´barato!"
// }else(
//   resultado = "Vish, ta muito caro!"
//   { 
console.log("preço: R$", preco, "-", resultado); 

//IF ternário com somente uma expressão
// condição && expressão
var logado = true;
logado && console.log("Usuario está logado!");
