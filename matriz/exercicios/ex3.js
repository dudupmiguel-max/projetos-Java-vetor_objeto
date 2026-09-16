//Encontre a maior temperatura registrada e informe em que cidade e em que dia ela ocorreu.

const prompt = require("prompt-sync")() 
const temperaturas = [
  [22, 25, 23, 21, 24],
  [30, 32, 35, 29, 33],
  [15, 18, 16, 14, 17]
];

let maiorTemperatura = temperaturas[0][0];
let cidadeMaior = 0;
let diaMaior = 0;

for (let i = 0; i < temperaturas.length; i++) {
  for (let j = 0; j < temperaturas[i].length; j++) {
    if (temperaturas[i][j] > maiorTemperatura) {
      maiorTemperatura = temperaturas[i][j];
      cidadeMaior = i + 1;
      diaMaior = j + 1;
    }
  }
}

console.log("Maior temperatura: " + maiorTemperatura + "°C");
console.log("Ocorreu na cidade " + cidadeMaior + " no dia " + diaMaior);