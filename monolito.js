const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []
let pedidos = []

//Rota para cadastrar usuarios

app.post("/usuarios", (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario)
    res.send({menssage: "Usuario Cadastrado com Sucesso", usuario})
})

app.post("/pedidos", (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido)
    res.send({menssage: "Pedido Criado com Sucesso", pedido})
})

app.get("/dados", (req, res) => {
    res.send({usuarios})
})

app.get("/pedido", (req,res) => {
    res.send({pedidos})
})

app.listen(3000, () => console.log("Servidor monolitico ok, porta 3000"))