const prompt = require("prompt-sync")()

let filme = [
 { nome: prompt("Informe o nome do Filme:"), ano: Number(prompt("Informe o ano do Filme:")), nota: Number(prompt("Informe a nota do Filme:")) },
 { nome: prompt("Informe o nome do Filme:"), ano: Number(prompt("Informe o ano do Filme:")), nota: Number(prompt("Informe a nota do Filme:")) },
 { nome: prompt("Informe o nome do Filme:"), ano: Number(prompt("Informe o ano do Filme:")), nota: Number(prompt("Informe a nota do Filme:")) }
];

console.log("Segue o banco de dados:" )

for(let i=0; i<filme.length;i++){
    console.log(filme[i].nome + " - nota " + filme[i].nota + " - ano " + filme[i].ano)  
    console.log("")    
}

let soma = 0;
for (let i = 0; i < filme.length; i++) {
    soma = soma + filme[i].nota;
}
let media = soma / filme.length;

console.log("Segue a media geral das notas: "+ media.toFixed(2) )
let procurar = prompt("Informe o filme que ira procurar:")
let achou = false

for(let i=0; i<filme.length;i++){
    if (filme[i].nome === procurar){
        console.log(filme[i].nome + " - nota " + filme[i].nota + " - ano " + filme[i].ano)  
        achou = true
        break
    }
}
if(!achou){//! = negação
    console.log("Filme não localizado")
}

