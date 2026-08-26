// exercicio 2 

const prompt = require("prompt-sync")()

let soma = 0;
let notas = []
for (let i = 0; i < 5; i++) {
    notas[i] = Number(prompt("Informe a nota " + i + ":"))
}
for(let i=0; i < notas.length; i++){
    soma = soma + notas[i];
}
let media = soma / notas.length;

console.log("A média das notas é:" + media.toFixed(2))