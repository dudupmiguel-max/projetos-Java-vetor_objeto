
const prompt = require("prompt-sync")()

let turma = [
 { nome: "Dudu", idade: 20, nota: Number(prompt("Informe a nota do Aluno:")) },
 { nome: "Pintor", idade: 22, nota: Number(prompt("Informe a nota do Aluno:")) },
 { nome: "Lili", idade: 19, nota: Number(prompt("Informe a nota do Aluno:")) }
];

console.log("---------------------------------------------")

for(let i = 0; i<3; i++){

    if(turma[i].nota < 6){

        for(let i=0; i<turma.length;i++){
            console.log(turma[i].nome + " - nota " + turma[i].nota + " - idade " + turma[i].idade );
        }
    }

    console.log("")

    if(turma[i].nota>=6){
        for(let i=0; i<turma.length;i++){
            console.log(turma[i].nome + " - nota " + turma[i].nota + "- idade" + turma[i].idade );
        }
    }
}