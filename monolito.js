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

app.get("/dados", (rea, res) => {
    res.send({usuarios})
})

app.listen(3000, () => console.log("Servidor monolitico ok, porta 3000"))