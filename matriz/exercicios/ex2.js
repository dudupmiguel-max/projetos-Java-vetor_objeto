//Crie uma matriz de temperaturas com 3 cidades (linhas) e 5 dias (colunas) e calcule a média de cada cidade.

const prompt = require("prompt-sync")() 
const temperaturas = [
  [22, 25, 23, 21, 24],
  [30, 32, 31, 29, 33], 
  [15, 18, 16, 14, 17]  
];

for (let i = 0; i < temperaturas.length; i++) {
  let soma = 0;
  for (let j = 0; j < temperaturas[i].length; j++) {
    soma = soma + temperaturas[i][j];
  }
  let media = soma / temperaturas[i].length;
  console.log("Média da Cidade " + (i + 1) + ": " + media.toFixed(1) + "°C");
}