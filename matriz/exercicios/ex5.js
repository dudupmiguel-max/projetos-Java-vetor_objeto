//Calcule a soma dos elementos da diagonal secundária (matriz[i][n - 1 - i]).

const prompt = require("prompt-sync")() 
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let somaDiagonalSecundaria = 0;

for (let i = 0; i < matriz.length; i++) {
  somaDiagonalSecundaria += matriz[i][matriz.length - 1 - i];
}

// O resultado fica armazenado na variável somaDiagonalSecundaria
console.log("Soma da diagonal secundária:", somaDiagonalSecundaria);