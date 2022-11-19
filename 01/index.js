const express = require("express");

const server = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indice = -1;


server.get('/', (requisicao, resposta) => {
    indice++

    if (indice === jogadores.length) {
        indice = 0;
    }

    resposta.send(`É a vez de ${jogadores[indice]} jogar`);
});

server.listen(3000, () => {
    console.log('Servidor inicializado!;')
});