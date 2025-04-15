const express = require('express');
const app = express();

app.use(express.json());

app.post('/pedidos', (req, res) => {
    const pedidos = req.body;

    console.log({ message: "Pedido recebido com sucesso", pedidos });

        res.send({ message: "Pedido recebido", pedidos });
});


app.listen(4000, () => console.log("order service rodando na porta 4000"));