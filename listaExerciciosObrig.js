const prompt = require("prompt-sync")();

/* 1. Escreva um programa que recebe um númerointeiro e verifica se ele é par ou ímpar
 utilizando uma estrutura de controle if.*/

let numero = Number(prompt("Digite um número inteiro: "));
if (numero % 2 === 0) {
  console.log(numero + " é Par!");
} else {
  console.log(numero + " é ímpar!");
}

/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else.*/

let idade = Number(prompt("Informe sua idade: "));
if (idade <= 11) {
  console.log("Criança");
} else if (idade >= 12 && idade <= 17) {
  console.log("Adolescente");
} else if (idade >= 18 && idade <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

/* Implemente um programa que recebe uma nota de 0 a 10 e classifica como
 "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

let nota = prompt("Informe a nota: ");
if (nota <= 4.9) {
  console.log("Reprovado!");
} else if (nota >= 5.0 && nota <= 6.9) {
  console.log("Recuperação!");
} else {
  console.log("Aprovado!");
}

/*  4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
 Utilize switch-case para implementar a lógica de cada opção selecionada.*/

let usuario = prompt("Informe seu nome: ");

console.log("MENU");
console.log("1 - Dizer olá");
console.log("2 - Digite sua idade");
console.log("3 - Sair");

let opcao = prompt("Escolha uma opção (1, 2 ou 3): ");

switch (opcao) {
  case "1":
    console.log("Olá, " + usuario + "!");
    break;
  case "2":
    let idade2 = prompt("Informe sua idade: ");
    if (idade2 <= 11) {
      console.log(usuario + ", você é uma Criança");
    } else if (idade2 >= 12 && idade2 <= 17) {
      console.log(usuario + ", você é um(a) Adolescente");
    } else if (idade2 >= 18 && idade2 <= 59) {
      console.log(usuario + ", você um Adulto");
    } else {
      console.log(usuario + ", você é um Idoso");
    }
    break;
  case "3":
    console.log("Saindo do programa");
    break;
  default:
    console.log("Opção inválida. Tente novamente.");
    break;
}

/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
 determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
 utilizando if-else.*/

let altura = Number(prompt("Informe sua altura: "));
let peso = Number(prompt("Informe seu peso atual: "));
let IMC = peso / (altura * altura);

if (IMC < 18.5) {
  console.log("Magreza");
} else if (IMC >= 18.5 && IMC <= 24.9) {
  console.log("Peso normal");
} else if (IMC >= 25.0 && IMC <= 29.9) {
  console.log("Sobrepeso");
} else if (IMC >= 30.0 && IMC <= 34.9) {
  console.log("Obesidade grau I");
} else if (IMC >= 35.0 && IMC <= 39.9) {
  console.log("Obesidade grau II");
} else {
  console.log("Obseidade grau III");
}

/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
 formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
 Isósceles, escaleno ou eqüilátero.
 Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
 Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
 Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
 Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C */

let ladoA = Number(prompt("Digite o valor do lado A: "));
let ladoB = Number(prompt("Digite o valor do lado B: "));
let ladoC = Number(prompt("Digite o valor do lado C: "));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  console.log("Os lados formam um triângulo");
}

if (ladoA === ladoB && ladoB === ladoC) {
  console.log("Equilátero");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  console.log("Isósceles");
} else {
  console.log("Escaleno");
}

/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$0,25se
 forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
 compradas, calcule e escreva o valor total da compra. */

let qtdComprada = Number(prompt("Informe a quantidade a ser comprada: "));

if (qtdComprada < 12) {
  console.log("O valor total da compra foi: " + qtdComprada * 0.3);
} else {
  console.log("O valor total da compra foi: " + qtdComprada * 0.25);
}

/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
 e escreve-los em ordem crescente. */

let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));

if (valor1 === valor2) {
  console.log(
    "Os valores não podem ser iguais, por favor, informe números diferentes."
  );
} else {
  if (valor1 < valor2) {
    console.log("Ordem crescente: " + valor1 + ", " + valor2);
  } else {
    console.log("Ordem crescente: " + valor2 + ", " + valor1);
  }
}

/* 9. Implemente um programa que exibe uma contagem regressiva de 10 até1noconsole
 utilizando um loop for. */

let contagemRegressiva = 11;

for (let i = 10; i >= 1; i--) {
  contagemRegressiva -= 1;
  console.log(contagemRegressiva);
}

/* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

let numeroRep = Number(prompt("Digite um número: "));
for (let i = 1; i <= 10; i++) {
  console.log(`${i}ª vez: ${numeroRep}`);
}

/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
 utilizando um loop for. */

let soma = 0;

for (let i = 1; i <= 5; i++) {
  const numero = Number(prompt(`Digite o ${i}º número: `));
  soma += numero;
}

console.log("A soma total é " + soma + "!");

/* 12. Crie um programa que exibe a tabuada de um número fornecidopelousuário (de 1 a
 10) utilizando um loop for. */

let numero2 = Number(prompt("Digite um número para ver a tabuada: "));

console.log(`\nTabuada de ${numero2}:\n`);

for (let i = 1; i <= 10; i++) {
  console.log(`${numero2} x ${i} = ${numero2 * i}`);
}

/* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
 amédiaaritmética desses números.*/

let soma2 = 0;
let contador2 = 0;

while (true) {
  let numero = parseFloat(
    prompt("Digite um número decimal (ou 0 para sair): ")
  );

  if (numero === 0) {
    break;
  }

  soma2 += numero;
  contador2++;
}

if (contador2 === 0) {
  console.log("Nenhum número válido foi digitado.");
} else {
  let media = soma / contador2;
  console.log(
    `A média aritmética dos ${contador2} números digitados é: ${media.toFixed(
      2
    )}`
  );
}

/*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
 utilizando um loop for ou while.*/

let fat = parseInt(
  prompt("Digite um número inteiro para calcular o fatorial: ")
);

if (fat < 0) {
  console.log("Não existe fatorial de número negativo.");
} else {
  let fatorial = 1;

  for (let i = 1; i <= fat; i++) {
    fatorial *= i;
  }

  console.log(`O fatorial de ${fat} é: ${fatorial}`);
}

/* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
 Fibonacci utilizando um loop for.*/

let a = 0,
  b = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci são:");

for (let i = 1; i <= 10; i++) {
  console.log(a);
  let proximo = a + b;
  a = b;
  b = proximo;
}
