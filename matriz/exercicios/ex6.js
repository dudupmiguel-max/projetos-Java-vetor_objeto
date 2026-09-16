//Construa a transposta de uma matriz não quadrada (por exemplo, 2 linhas x 3 colunas).

let matriz = [
  [1, 2, 3],
  [4, 5, 6]
];



let transposta = [];

for (let j = 0; j < matriz[0].length; j++) {
  transposta[j] = [];
  for (let i = 0; i < matriz.length; i++) {
    transposta[j][i] = matriz[i][j];
  }
}

console.log("Matriz Transposta (3x2):", transposta);