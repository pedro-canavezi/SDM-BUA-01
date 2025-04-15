const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json()); //convercao da requisicao pelo json

app.post('/usuarios', async (req, res) => { //necessita do await, ele antecede
    const usuario = req.body;

    await axios.post('http://localhost:4000/pedidos', { userId: usuario.id }); // o await espera a criacao do usuario para prosseguir, ele procede
    res.send({ message: 'usuario cadastrado com sucesso', usuario });
});

app.listen(3000, () => console.log("user service rodando na posta 3000"));