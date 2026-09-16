//Some duas matrizes de mesma dimensão e exiba o resultado formatado, uma linha por vez.

let matrizA = [
  [1, 2, 3],
  [4, 5, 6]
];

let matrizB = [
  [7, 8, 9],
  [10, 11, 12]
];

let linhas = matrizA.length;
let colunas = matrizA[0].length;
let matrizSoma = [];

for (let i = 0; i < linhas; i++) {
  matrizSoma[i] = [];
  for (let j = 0; j < colunas; j++) {
    matrizSoma[i][j] = matrizA[i][j] + matrizB[i][j];
  }
}

for (let i = 0; i < linhas; i++) {
  console.log(matrizSoma[i]);
}