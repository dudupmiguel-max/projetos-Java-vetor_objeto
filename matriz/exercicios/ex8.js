//Desafio: monte uma matriz 5x5 onde cada posição vale matriz[i][j] = i + j, e exiba o resultado.

let matriz = [];

for (let i = 0; i < 5; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = i + j;
  }
}

// Exibindo a matriz formatada, linha por linha
for (let i = 0; i < 5; i++) {
  console.log(matriz[i]);
}