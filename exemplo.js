// Matriz 3x3
let matriz2 = [
    [[3], [10], [12]],
    [[4], [5], [7]],
    [[8], [9], [20]]
];

// Procurando o número 9
let encontrado = false;
for (let i = 0; i < matriz2.length; i++) {
    for (let j = 0; j < matriz2[i].length; j++) {
        if (matriz2[i][j][0] === 9) {  // Verifica se o valor é 9
            console.log(`Número 9 encontrado na posição: [${i}, ${j}]`);
            encontrado = true;
            break;  // Sai do loop quando encontra o número
        }
    }
    if (encontrado) break;
}

if (!encontrado) {
    console.log("Número 9 não encontrado.");
}
