
const prompt = require("prompt-sync")()

let vetor = [6, 4, 10, 12, 18, 5] 
let novo = Number(prompt("Informe o novo elemento: "))
let posicao = Number(prompt("informe posição no vetor do novo elemento:"))

for (let i = vetor.length; i > posicao; i--) {
    vetor[i] = vetor[i - 1];
}
vetor[posicao] = novo;

console.log("Novo vetor: " + vetor)
