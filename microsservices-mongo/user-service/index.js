const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb

const mongoUri = 'mongodb+srv://pedrocanavezi51:11082004@a3.9iwxraw.mongodb.net/orderservice?retryWrites=true&w=majority&appName=A3';

mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err)
    });

const orderSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    produto: String,
    quantidade: Number
})

const User = mongoose.model('User', orderSchema);

app.post('/usuarios', async (req, res) => {
    try {
    const usuario = req.body;
    const user = new User(usuario);
    await user.save();

    await axios.post('http://localhost:4000/pedidos', {
        userId: usuario.id,
        produto: usuario.produto,
        quantidade: usuario.quantidade 
    }) 
    
    res.send({message: 'Usuario criado com sucesso', usuario:novoUser});
}
    catch(error) {
        console.error('Erro ao criar usuario:', error);
        res.status(500).send({message: 'Erro ao criar usuario'});
    }})
    app.listen(3000, () => {
        console.log('User service running on port 3000');
    });
