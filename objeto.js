
const prompt = require("prompt-sync")()

let produto = {
    nome : (prompt("Informe o nome do produto:")),
    custo : Number(prompt("Informe o custo unitario do produto:")),
    venda : Number(prompt("Informe o valor de venda:")),
    custosAdicionais : Number(prompt("Infome os custos adicionais(transporte):")),
    estoque : Number(prompt("Informe o estoque atual:")),
};
let custoTotal = produto.custo + produto.custosAdicionais
let lucroVenda = produto.venda - custoTotal
let estoquecusto = produto.estoque * custoTotal
let estoqueVenda = produto.estoque * lucroVenda
let total = estoquecusto + estoqueVenda

console.log("-----------------------------------")
console.log(produto)
console.log("Segue o lucro individual do produto:", lucroVenda)
console.log("Segue o custo individual do prdouto:", custoTotal)
console.log("Segue o valor do estoque(Estoque/custo):", estoquecusto)
console.log("Segue o valor do estoque(Estoque/venda):", estoqueVenda)
console.log("Transação total:", total)