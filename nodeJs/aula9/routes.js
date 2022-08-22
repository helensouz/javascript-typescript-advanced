const express = require('express')
const route = express.Router()
const homeControler = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')


//Rotas da Home
route.get('/', homeControler.paginaInicial)
route.post('/', homeControler.trataPost)


//Rotas de contato
route.get('/contato', contatoController.paginaInicial)


module.exports = route

