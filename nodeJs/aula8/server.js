const express = require('express');
const { read } = require('fs');
const app = express();

app.use(express.urlencoded 
    ( {extended: true})
    
)

app.get('/', (req, res) => { 
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"
    <button>Enviar</button>
    </form>
    />
    `)
})

app.get('/testes/:id_usuarios?/:paramatro?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que voce me enviou foi: ${req.body.nome}`)
})


app.get('/teste', (req, res) => {
    res.send('olaaaaaa')
})


app.listen(3000, () => {
    console.log('servidor rodando na porta 30000')
})