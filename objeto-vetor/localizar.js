// exercicio 4

const prompt = require("prompt-sync")()

let vetor = []
for(let i=0; i<6; i++){
    vetor[i] = Number(prompt("Informe o numero:"))
}
let maior = vetor[0];
let menor = vetor[0];
for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] < menor) {
     menor = vetor[i]; }
    if (vetor[i] > maior) {
     maior = vetor[i]; }
}
console.log("O maior numero é:", maior)
console.log("O menor numero é:", menor)
