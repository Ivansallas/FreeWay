let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

// carro
let xCarro = 600;

// ator
let yAtor = 366;

function preload() {
  imagemDaEstrada = loadImage("image/estrada.png");
  imagemDoAtor = loadImage("image/ator-1.png");
  imagemCarro = loadImage("image/carro-1.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  verificaColisaoCarro();
}

function mostraAtor() {
  image(imagemDoAtor, 100, yAtor, 30, 30);
}

function mostraCarro() {
  image(imagemCarro, xCarro, 40, 50, 40);
}

function movimentaCarro() {
  xCarro -= 2;
  if (xCarro < -50) {
    xCarro = 600; // Reseta a posição do carro quando ele sai da tela
  }
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    if (yAtor > 0) { // Limita o movimento para cima
      yAtor -= 3;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yAtor < height - 30) { // Limita o movimento para baixo
      yAtor += 3;
    }
  }
}

function verificaColisaoCarro() {
  // Aqui você pode adicionar a lógica de colisão, caso queira adicionar essa funcionalidade
}
