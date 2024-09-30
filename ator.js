//código do ator
let xAtor = 100;
let yAtor = 366;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
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