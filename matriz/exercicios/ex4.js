//Verifique se uma matriz quadrada é uma matriz identidade (1 na diagonal principal, 0 nas demais posições).

const prompt = require("prompt-sync")() 
const matriz = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];

let identidade = true;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (i === j) {
      if (matriz[i][j] !== 1) {
        identidade = false;
      }
    } else {
      if (matriz[i][j] !== 0) {
        identidade = false;
      }
    }
  }
}

if (identidade) {
  console.log("A matriz é uma matriz identidade.");
} else {
  console.log("A matriz não é uma matriz identidade.");
}