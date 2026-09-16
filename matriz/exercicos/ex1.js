//Declare uma matriz 4x4 preenchida com zeros e exiba-a usando dois laços aninhados.

const prompt = require("prompt-sync")() 
let matriz = [];

for (let i = 0; i < 4; i++) {
    matriz[i] = []; 
    for (let j = 0; j < 4; j++) {
      matriz[i][j] = 0 
    }
}
console.log(matriz)