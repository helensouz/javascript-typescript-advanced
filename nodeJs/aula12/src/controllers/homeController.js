const HomeModel = require('../models/homeModel')

HomeModel.find()
.then(dados => console.log(dados))
.catch(e => console.log(e))

HomeModel.create({
    titulo: 'title 2',
    descricao: 'Description 2'
})
.then(dados => console.log(dados))
.catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
        res.render('index')
        return ;
    
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return;
}