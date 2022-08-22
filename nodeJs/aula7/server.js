const express = require('express');
const { read } = require('fs');
const app = express();

//express ajuda nas rotas de navegacao
//rotas de HTTP
// CRUD - CREATE, READ, UPDATE E DELETE

app.get('/', (req, res) => { // iremos tratar as requisicoes que chegarao na porta '/'
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"
    <button>Enviar</button>
    </form>
    />
    `)
})

app.post('/', (req, res) => {
    res.send('recebi o formulario')
})

app.get('/teste', (req, res) => {
    res.send('olaaaaaa')
})


app.listen(3000, () => {
    console.log('servidor rodando na porta 30000')
})