
const prompt = require("prompt-sync")()

let vetor = [6, 4, 10, 12] 
console.log("Segue o vetor: " + vetor)

let posicao = Number(prompt("informe a posição da remoção:"))

for (let i = posicao; i < vetor.length - 1; i++) {
    vetor[i] = vetor[i + 1];
}
for (let i = 0; i < vetor.length - 1 ; i++){
    console.log(vetor[i])
}


