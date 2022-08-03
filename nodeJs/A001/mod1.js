//usando classespath
const path = require('path')
const axios = require('axios')
const { Person } = require('./A1')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e))






// const {nome, sobrenome, falaNome} = require('./A1.js')
// console.log(nome, sobrenome)
// console.log(falaNome());
