// exercicio 5

const prompt = require("prompt-sync")()

let cidade = prompt("Informe a cidade:")
let vogal = prompt("Informe a vogal procurada:")
let contador = 0;
for (let i = 0; i < cidade.length; i++) {
    if (cidade[i] === vogal) {
        contador++
    }
}
if(contador == 0){
    console.log("Vogal não encontrada no nome da cidade!")
}
console.log("Nome da cidade:", cidade)
console.log("Quantidades é: ", contador)