const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

// const pessoas = [
//     {nome: 'joao'},
//     {nome: 'maria'},
//     {nome: 'helen'},
//     {nome: 'anaa'}
// ]

// const json = JSON.stringify(pessoas, '', 2)
// escreve(caminhoArquivo, json)

async function lerArquivo(caminho){
   const dados = await ler(caminho)
   renderizaDados(dados)
}

function renderizaDados(dados){
   dados = JSON.parse(dados)

   dados.forEach(val => {
        console.log(val)
   });
}


lerArquivo(caminhoArquivo)