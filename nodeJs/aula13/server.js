require('dotenv').config()

const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')
const {middlewareGlobal} = require('./src/middlewares/middleware')
const mongoose = require('mongoose')
const session = require('express-session') //ira salvar a sessao do usuario na memoria
const MongoStore = require('connect-mongo')
const flashMessage = require('connect-flash')

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



const sessionOptions = session({
    secret: 'ndfjnsfonsiofnsdndfnsifne',
    store:  MongoStore.create({ mongoUrl: process.env.CONECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flashMessage())


// Nossos proprios middlewares
app.use(middlewareGlobal)
app.use(routes)


app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('servidor rodando na porta 30000')
    })
})

