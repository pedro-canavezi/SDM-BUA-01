const express = require('express');
const app = express();

app.use(express.json());

let orders = []; //array to store orders

app.post('/pedidos', (req, res) => {

    const {id, product, quantity} = req.body;
    if(!id || !product || !quantity){
        return res.status(400).send({ message: "Dados do pedido inválido"})
    }
    const newOrder = {id, product, quantity};
    orders.push(newOrder)
    res.status(201).send({message: "Pedido criado com sucesso", order: newOrder});
    res.send({message: "Pedido recebido com sucesso", orders});
});


app.listen(4000, () => console.log("order service rodando na porta 4000"));