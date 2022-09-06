require('dotenv').config()

const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')
const {middlewareGlobal} = require('./src/middlewares/middleware')
const mongoose = require('mongoose')


mongoose.connect(process.env.CONECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('conectei a base de dados')
        app.emit('pronto')
    })
    .catch(e => console.log(e))


app.use(express.urlencoded ( {extended: true})   )


app.use(express.static(path.resolve(__dirname, 'public')))


app.set('views', path.resolve(__dirname, 'src', 'views' )) 
app.set('view engine', 'ejs')


// Nossos proprios middlewares
app.use(middlewareGlobal)
app.use(routes)


app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('servidor rodando na porta 30000')
    })
})

