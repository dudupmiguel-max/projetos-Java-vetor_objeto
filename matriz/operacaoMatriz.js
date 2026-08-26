
const prompt = require("prompt-sync")() 

let soma = 0
let mat = [
    [Number(prompt("Digite o primeiro numero:")),Number(prompt("Digite o segundo numero:")),Number(prompt("Digite o terceiro numero:"))],
    [Number(prompt("Digite o quarto numero:")),Number(prompt("Digite o quinto numero:")),Number(prompt("Digite o sexto numero:"))],
    [Number(prompt("Digite o setimo numero:")),Number(prompt("Digite o oitavo numero:")),Number(prompt("Digite o nono numero:"))]
]

// saida em linha
for (let i = 0; i < mat.length; i++) {
    let linha = ""; // da o espaço entre as colunas 
    for (let j = 0; j < mat[i].length; j++) {
      linha = linha + mat[i][j] + "  ";
    }
    console.log(linha);
}

  // Soma dos elementos
for(let l = 0 ; l<mat.length ; l++) { 
    for(let c = 0 ; c < mat.length ; c++) { 
        soma = soma + mat [l][c]
    }
}
console.log("A soma dos elementos é de: " + soma)

//soma de linhas
let somaLinhas = [];
   
for (let i = 0; i < mat.length; i++) {
   somaLinhas[i] = 0;
   for (let j = 0; j < mat[i].length; j++) {
       somaLinhas[i] = somaLinhas[i] + mat[i][j];
    }
}

console.log("Segue as somas das linhas: " + somaLinhas)

//soma coluna
let somacolunas = []

for(let j=0; j < mat[0].length; j++){
    somacolunas[j]=0;
    for(let i=0; i<mat.length;i++){
        somacolunas[j] += mat[i][j]
    }
}

console.log("Segue as somas das colunas: " + somacolunas)

// maior e menor elemento
let maior = [0][0]
let menor = [0][0]
let menori = 0
let menorj = 0
let maiori = 0
let maiorj = 0

for(let i =1;  i<mat.length; i++) { 
  for(let j = 0 ; j < mat.length ; j++) { 
    if(mat[i][j] < menor) { 
        menor = mat[i][j]
    }
    if(mat[i][j] > maior) { 
        maior = mat[i][j]
    }
}
}
console.log("O maior numero é: " , maior + " na posição: " + maiori + " " + maiorj)
console.log("O menor numero é: " , menor + " na posição: " + menori + " " + menorj)