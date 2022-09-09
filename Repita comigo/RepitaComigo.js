
///////////
// 1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

var num1 = parseFloat(prompt('Digite um número: '))
var num2 = parseFloat(prompt('Digite um número: '))
var total = num1 / num2

if (num2 <= 0) {
    alert("Digite um número maior que zero.");
} else {
    alert(num1 + " / " + num2 + " = " + total);
}

////////////
// 2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

let contagem = 30;

while (contagem >= 0) {

    document.write("Explosão em: " + contagem + "<br>");
    contagem--;

}

document.write("EXPLOSÃO!!");

/////////////
// 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente. Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

var texto = "";
var contador = 10;
var limite = 0;

while (contador > limite) {

    texto = "" + contador;
    console.log(texto);
    document.write(texto);

    contador = contador -= 1;

}

//////////////
// 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

var começo = 15;
var ultimo = 100;
var contagem = 0;

while (começo < ultimo) {
    começo += 1;
    contagem += 0;

}

console.log(começo);
console.log(contagem);

var media = parseInt(contagem / 85);

alert("A média entre os números 15 e 100 é: " + media);

////////////
// 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

var inteiro1 = parseInt(prompt('Digite um número inteiro: '));
var inteiro2 = parseInt(prompt('Digite outro número inteiro: '));
var processo = 0;

while (inteiro1 < inteiro2) {
    inteiro1 += 1;
    processo += contagem;
}

console.log(inteiro1);
console.log(processo);

var media = processo / 85;

alert("A média aritmética é de  " + media);

/////////////
// 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

var aprovados = 0;

valores();

function valores() {

    var nota1 = parseFloat(prompt('Digite uma nota: '));
    var nota2 = parseFloat(prompt('Digite outra nota: '));
    var media = nota1 + nota2 / 2;

    if (media >= 9, 5) {

        aprovados += 1;
        alert("Sua média é de: " + media);
        inicio();

    } else {
        inico();
    }
}

function inicio() {

    var texto = prompt("Calcular a média de outro aluno Sim/Não?");

    if (texto == "Sim" || texto == "sim") {
        valores();

    } else {
        (alert("A quantidade de alunos aprovados é de " + aprovados));
    }

}

valores();

/////////////
// 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

var nota1 = parseInt(prompt('Digite uma nota: '));
var nota2 = parseInt(prompt('Digite a próxima nota: '));
var nota3 = parseInt(prompt('Digite a próxima nota: '));
var nota4 = parseInt(prompt('Digite a próxima nota: '));
var nota5 = parseInt(prompt('Digite a próxima nota: '));
var nota6 = parseInt(prompt('Digite a próxima nota: '));
var media = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 / 6;

if (nota1, nota2, nota3, nota4, nota5, nota6 <= 10) {
    alert("Sua média é: " + media);

} else {
    (nota1, nota2, nota3, nota4, nota5, nota6 < 0);
    alert("Informe um outro valor.");
}

/////////////
// 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N é um valor informado pelo usuário.

var n = parseInt(prompt('Digite um valor N:'));
var contagem = 0;
var texto = ""

if (n > 0) {
    while (n > contagem) {
        texto = "" + n
        console.log(texto);
        document.write(texto);
        n = n -= 1;
    }

} else {
    alert("Informe valor maior que 0.")
}

////////////////
// 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

var limite = 110;
var contagem = 100;
var texto = ""

while (limite > contagem) {
    texto = "" + limite
    console.log(texto);
    document.write(texto);
    limite = limite -= 1
}
   ///////////////
    // 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.
    
    // em desenvolvimento...
   
   
    ///////////////
    // 11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.
  
  
    // em desenvolvimento...
