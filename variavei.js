// Criando variáveis com "var" (var nome_variavel = <valor>;) 
var nome = "Tibúrcio"; 
console.log("Meu nome é", nome); 
var idade = 23; 
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos"); 
idade = idade + 1; 
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos"); 
console.log("------------------------------------------------")

//javascript trabalha com sistema case sensitive (maiuscula sao diferentes de minusculas)
console.log("criando variavel teste e tentando acessar como  testE.");
let teste = "variavel teste";
//console.log(testE);
console.log(teste);

//Regras para nomear identificadores(variaveis)
//podem iniciar com 'A'-'Z', 'a'-'z', '-' ou '$'
let MinhaVariavel = 10;
let outraVariavel = 2.65;
const _minhaConstante = "Uma constante qualquer!";
var $minhaVariavel = -5;

//variavei logicas (boolean)
var nome = "myrella";
var rico = false;
var eProfessor = true;
console.log("nome:",nome,"| É professor?", eProfessor, "| É rico?" , rico);
