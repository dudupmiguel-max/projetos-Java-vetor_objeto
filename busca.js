// exercicio 3

const prompt = require("prompt-sync")()

let vetor = ["A", "B", "C", "D","E"]
let procura = prompt("Qual letra vai procurar:")
let achou = false
for(let i=0; i<vetor.length; i++){
    if(procura==vetor[i]){
        achou = true
        console.log("Encontrado na posição: " + i)
        break
    }

}
if(!achou){
    console.log("Não encontrado, retorna -1")
}