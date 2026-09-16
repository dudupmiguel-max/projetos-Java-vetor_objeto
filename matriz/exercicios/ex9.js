//A matriz golsPorPartida guarda os gols marcados por 5 jogadores (linhas) em 4 partidas (colunas).
//Um vetor de objetos jogadores guarda nome, posição e time de cada jogador, alinhado pelo índice i.
//a) Calcule a média de gols de cada jogador (por linha) e exiba com o nome — jogadores[i].nome.
//b) Calcule a média de gols de cada partida, percorrendo cada coluna da matriz.
//c) Descubra qual jogador teve a maior média de gols; mostre seu nome e posição, buscando no vetor de objetos.
//d) Descubra qual partida teve a menor média de gols entre todos os jogadores.

const jogadores = [
  { nome: "Neymar", posicao: "Atacante", time: "Santos" },
  { nome: "Garro", posicao: "Meia", time: "Corinthians" },
  { nome: "Gabigol", posicao: "Atacante", time: "Santos" },
  { nome: "Arrascaeta", posicao: "Meia", time: "Flamengo" },
  { nome: "Cássio", posicao: "Goleiro", time: "Cruzeiro" }
]

const golsPorPartida = [
  [2, 1, 0, 3], // Jogador 0
  [0, 0, 1, 0], // Jogador 1
  [1, 2, 2, 1], // Jogador 2
  [3, 0, 1, 2], // Jogador 3
  [0, 0, 0, 0]  // Jogador 4
]

let numJogadores = golsPorPartida.length;
let numPartidas = golsPorPartida[0].length;
let mediasJogadores = []
let mediasPartidas = []

console.log(" a) Média de gols de cada jogador ")
for (let i = 0; i < numJogadores; i++) {
  let somaGols = 0;
  for (let j = 0; j < numPartidas; j++) {
    somaGols += golsPorPartida[i][j];
  }
  let media = somaGols / numPartidas;
  mediasJogadores[i] = media;
  console.log(jogadores[i].nome + ": " + media)
}


console.log(" b) Média de gols de cada partida ")
for (let j = 0; j < numPartidas; j++) {
  let somaGols = 0;
  for (let i = 0; i < numJogadores; i++) {
    somaGols += golsPorPartida[i][j];
  }
  let media = somaGols / numJogadores;
  mediasPartidas[j] = media;
  console.log("Partida " + (j + 1) + ": " + media)
}

let indiceMaiorMedia = 0;
let maiorMedia = mediasJogadores[0];

for (let i = 1; i < numJogadores; i++) {
  if (mediasJogadores[i] > maiorMedia) {
    maiorMedia = mediasJogadores[i];
    indiceMaiorMedia = i;
  }
}

console.log("c) Jogador com maior média")
console.log("Nome: " + jogadores[indiceMaiorMedia].nome + " | Posição: " + jogadores[indiceMaiorMedia].posicao);


let indiceMenorPartida = 0;
let menorMedia = mediasPartidas[0];

for (let j = 1; j < numPartidas; j++) {
  if (mediasPartidas[j] < menorMedia) {
    menorMedia = mediasPartidas[j];
    indiceMenorPartida = j;
  }
}

console.log(" d) Partida com menor média")
console.log("A partida " + (indiceMenorPartida + 1) + " teve a menor média: " + menorMedia)