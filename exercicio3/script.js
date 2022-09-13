/*
Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings 
em formato de ranking, como no exemplo abaixo:
*/

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

for (let i of maioresPaises){
    console.log(`${maioresPaises.indexOf(i) + 1} - ${i+1} `)
}