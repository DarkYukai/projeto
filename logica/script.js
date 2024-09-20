// mandar mensagem pro console
console.log("Ola mundo")

// Variaveis const e let
const PI = 3.14; //decimal
let idade = 5; //inteiro
let nome = "João"; //texto
let mae = 'Maria'; //texto
let estudante = false; //booleano
let dirige = true; //booleano
let sobrenome; //undefined

console.log(PI);
console.log(idade);
console.log(typeof PI);

//operações
let a = 10;
let b = 2;
//Soma
console.log(a + b);
//Subtração
console.log(a - b);
//Multiplicação
console.log(a * b);
//Divisão
console.log(a / b);
//Resto ou mod
console.log(a % b);

// Comparações ou teste logico
let c = '10'
//Valor igual == igualdade
console.log(a == c);
//Valor e tipo igual === igualdade estrita
console.log(a === c);
//Maior
console.log(a > b);
//Menor
console.log(a < b);
//Maior ou igual
console.log(a > - b);
//Menor ou igual
console.log(a < - b);
//Diferente
console.log(a != b);
console.log(a !== c);

//Condicionais
let nota = 3;
let media = 6;
let recuperacao = 5;

if (nota > - media) {
    console.log('Aluno aprovado!');
} else {
    console.log('Aluno Reprovado!');
}

res = nota >= media ? 'Aprovado' : 'Reprovado'
console.log(res)

if (media >= nota) {
    console.log("Aprovado")
} else if (media >= recuperacao) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}

let diaDaSemana = 7
switch (diaDaSemana) {
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break
    default:
        console.log('Outro dia');
}
//Laços de repetição
let contador = 0
// Enquanto meu teste for verdadeiro faça
while (contador <= 10) {
    console.log(contador);
    contador++; //Incrementar:contador = contador + 1;

}

let tentativa = 0;

while (tentativa < 5) {
    //await
    console.log("Tentativa:" + tentativa)
    tentativa++;
}

//Quando eu ja sei o tamanho
let target = 5;
let incrementar = 0;
let decrementar = 0;
for (let i = 0; i <= target; i++) {
    console.log("Passo: " + 1);
    console.log(incrementar++);
    console.log(decrementar--);
}

//array coleção de dados
let numeros = [10, 20, 30, 40, 50, 60];

//foreach
numeros.forEach(function (numero) {
    console.log(numero);
})
//For(numero in numeros)
//foreach(numeros as numero)
numeros.forEach(n => (console.log(n)))

//Texto 'aspas simples' e "aspas duplas"
let frutas = ['abacaxi', 'manga', 'uva']
frutas.forEach(f => (console.log(f)))
//Exemplo com crase
frutas.forEach((f, i) => {
    console.log('${ i } : ${ f }')
})

let tamanho = frutas.lergth
console.log("Tamanho do array: " + tamanho)
frutas[0] = "Gabiroba"
console.log("Item: " + frutas[0])

frutas.push("Pitanga")
console.log(frutas)
frutas.pop()
console.log(frutas)
//Excluir um item de um array
let filtro = frutas.filter(fruta => fruta !== "uva")
console.log(filtro)
//Primeiro e o indice da array, o segundo quantidade
let porIndice = frutas.splice(2, 3)
console.log(porIndice)

//exemplo json e dicionario
let dicionario = {
    nome: "João",
    idade: "25",
    cidade: "Sengés"
}

let json = {
    "nome": "João",
    "idade": "25",
    "cidade": "Sengés"
}

console.log(dicionario.nome, json.nome)
console.log(dicionario.idade, json.idade)
console.log(dicionario.cidade, json.cidade)