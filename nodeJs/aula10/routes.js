const express = require('express')
const route = express.Router()
const homeControler = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')


//Rotas da Home
route.get('/', homeControler.paginaInicial)
route.post('/', homeControler.trataPost)


//Rotas de contato
route.get('/contato', contatoController.paginaInicial)


module.exports = route

