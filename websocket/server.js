const express = require('express'); // Importing express
const http = require('http'); // Importing http
const cors = require('cors'); // Importing cors
const socketIo = require('socket.io'); // Importing socket.io

const app = express(); // Cria a instância do express

const server = http.createServer(app); // Cria o servidor http

app.use(cors());
app.use(express.json());

const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

let usuarios = [];
let pedidos = [];

io.on('connection', (socket) => { // Conexão com o cliente
  console.log('Cliente conectado via websocket:', socket.id); // Mensagem de conexão
  socket.on('disconnect', () => { // Desconexão do cliente
    console.log('Cliente desconectado');
    });
});

app.post('/usuario', (req, res) => { // Rota para adicionar um usuário
    const usuario = req.body; // Pega o usuário do corpo da requisição
    usuarios.push(usuario); // Adiciona o usuário ao array de usuários
    io.emit('novo_usuario', usuario); // Emite o evento 'usuarios' para todos os clientes conectados
    res.send({ message: 'Usuário adicionado com sucesso', usuario }); // Responde com sucesso
});

app.post('/pedido', (req, res) => { // Rota para adicionar um pedido
    const pedido = req.body; // Pega o pedido do corpo da requisição 
    pedidos.push(pedido); // Adiciona o pedido ao array de pedidos
    io.emit('novo_pedido', pedido); // Emite o evento 'pedidos' para todos os clientes conectados
    res.send({ message: 'Pedido adicionado com sucesso', pedido }); // Responde com sucesso
});

app.get('/dados', (req, res) => { // Rota para pegar os dados
  res.send({ usuarios, pedidos }); // Responde com os dados
}); 

server.listen(3000, () => { // Inicia o servidor na porta 3000
    console.log('Servidor rodando na porta 3000'); // Mensagem de sucesso
});