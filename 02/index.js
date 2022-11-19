const express = require('express');

const server = express();

let second = 0;
let minute = 0;
let ligado = false;
let id;
let palavra = "";
let palavraa = "";

// LETRA A
server.get('/', (req, resp) => {
    palavra = second > 1 ? "segundos" : "segundo";
    palavraa = minute > 1 ? "minutos" : "minuto";

    resp.send(`Tempo atual do cronômetro: ${minute.toString().padStart(2, "0")} ${palavraa} e ${second.toString().padStart(2, "0")} ${palavra}`);
});


server.get('/iniciar', (req, resp) => {
    const crono = () => {
        ligado = true;
        id = setInterval(() => {
            if (ligado) {
                if (second > 59) {
                    minute++;
                    second = 0;
                } else {
                    second++;
                }
            }

        }, 1000);
    }
    if (ligado == false) {
        clearInterval(id);
        crono();
    }



    resp.send('Cronômetro iniciado!');
});


server.get('/pausar', (req, resp) => {
    ligado = false;

    resp.send('Cronômetro pausado!');
});

server.get('/continuar', (req, resp) => {
    ligado = true;
    resp.send('Cronômetro continuando!');
});

server.get('/zerar', (req, resp) => {

    second = 0;
    minute = 0;

    resp.send('Cronômetro zerado!');
});


server.listen(8000, () => {
    console.log("Servidor inicializado!")
});