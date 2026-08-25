const prompt = require("prompt-sync")()

let filme = [
 { nome: prompt("Informe o nome do Filme:"), idade: Number(prompt("Informe o ano do Filme:")), nota: Number(prompt("Informe a nota do Filme:")) },
 { nome: prompt("Informe o nome do Filme:"), idade: Number(prompt("Informe o ano do Filme:")), nota: Number(prompt("Informe a nota do Filme:")) },
 { nome: prompt("Informe o nome do Filme:"), idade: Number(prompt("Informe o ano do Filme:")), nota: Number(prompt("Informe a nota do Filme:")) }
];

let soma = 0;
for (let i = 0; i < filme.length; i++) {
    soma = soma + filme[i].nota;
    console.log("")
}
let media = soma / filme.length;

console.log("")
console.log("Segue a media geral das notas: "+ media )
console.log("")

for(let i=0; i<filme.length;i++){

    if(filme[i].nota>media){
        console.log("Filmes acima da media:" )
        console.log("")
        console.log(filme[i].nome + " - nota " + filme[i].nota + " - idade " + filme[i].idade );      
    }

}

