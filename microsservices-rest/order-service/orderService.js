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

app.get('/pedidos', (req, res) => {
    res.status(200).json(orders);
})

app.get('pedidos/:id', (req, res) => {
    const orderId = req.params.id;
    const order = orders.find(o => o.id === orderId)
    if(!order){
        return res.status(404).send({message: "Pedido não encontrado"});
    }
    res.status(200).json(order);
})

app.put('/pedidos/:id', (req, res) => {
    const orderId = req.params.id;
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if(orderIndex === -1){
        return res.status(404).send({message: "Pedidos não encontrado"});
    }
    
    const {product, quantity} = req.body;
    if(!product || !quantity){
        return res.status(400).send({message: "Dados do pedido inválido"});
    }
    orders[orderIndex] = {id: orderId, product, quantity};
    res.status(200).send({message: "Pedido atualizado com sucesso", order: orders[orderIndex]});
})

app.delete('/pedidos/:id', (req, res) => {
    const orderId = req.params.id; 
    const orderIndex = orders.findIndex(o => o.id === orderId); 
    if (orderIndex === -1) {
        return res.status(404).send({ message: 'Pedido não encontrado!' });
    }
    orders.splice(orderIndex, 1); 
    res.status(200).send({ message: 'Pedido excluído com sucesso!' });
});

app.listen(4000, () => console.log("Order Service rodando na porta 4000"));