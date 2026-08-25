//exercicio 1

const prompt = require("prompt-sync")()

let soma = 0 
let notas = [6.0, 8.5, 9.0, 4.0, 7.3];
for(let i=0; i<notas.length; i++){
    soma = soma + notas[i];
}
console.log("Soma das notas " + soma)
