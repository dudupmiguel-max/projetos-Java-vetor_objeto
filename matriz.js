
//Tabuada

const prompt = require("prompt-sync")() 

let tabuada = [];

for (let i = 0; i < 5; i++) {
    tabuada[i] = []; // ele cria um vetor vazio dentro de cada posição de um vetor ja existente
    for (let j = 0; j < 5; j++) {
        tabuada[i][j] = (i + 1) * (j + 1); // completa sempre a linha primeiro, dps a coluna
    }
}

console.log(tabuada)