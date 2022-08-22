exports.paginaInicial = (req, res) => {
    (req, res) => { 
        res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome"
        <button>Enviar</button>
        </form>
        />
        `)
    }
}

exports.trataPost = (req, res) => {
    res.send('ei sou sua nova rota de post')
}