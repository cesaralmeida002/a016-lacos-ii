/*
Crie um programa que peça um input de número para o usuário. Com este número,
 o código deve imprimir a **tabuada** do número, de 1 a 10.
*/

const tabuada = +prompt("Digite um número");

let tabela = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i in tabuada) {
  console.log(`${Number(i)+1} X ${imput} = ${(Number[tabela]+1)*imput}`);
}
