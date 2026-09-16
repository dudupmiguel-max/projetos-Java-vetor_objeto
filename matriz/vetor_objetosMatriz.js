
const prompt = require("prompt-sync")() 

let produtos = [
    { nome: "Caderno", tipo: "Papelaria", descricao: "96 folhas" },
    { nome: "Caneta", tipo: "Papelaria", descricao: "ponta fina" },
    { nome: "Mochila", tipo: "Acessorio", descricao: "impermeavel" },
];
   
let vendas = [
    [12, 18, 9, 15],
    [30, 25, 40, 35],
    [5, 8, 6, 10],
];
    
let maior = 0
let nomeMaior = ""
for (let i = 0; i < produtos.length; i++) {
    let total = 0
    for (let j = 0; j < vendas[i].length; j++) {
      total = total + vendas[i][j];
    }

    let nome = produtos[i].descricao;
    let nome1 = produtos[i].nome;
    console.log(nome1 + ":", total, "unidades | Descrição: " + nome);
    if(total > maior){
        maior = total
        nomeMaior = produtos[i].nome;
    }
}

console.log("Segue o produto que mais vendeu: "+ nomeMaior + " Vendeu " + maior + " unidades!!")



