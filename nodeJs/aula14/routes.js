const express = require('express')
const route = express.Router()
const homeControler = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')


route.get('/', homeControler.paginaInicial, function(req, res, next){
    console.log()

})



//Rotas
route.get('/contato', contatoController.paginaInicial)
route.get('/',  homeControler.paginaInicial)

route.post('/', homeControler.trataPost)


module.exports = route

