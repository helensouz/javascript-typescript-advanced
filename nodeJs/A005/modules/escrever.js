const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, json, {flag: 'w'}) 
}
//caminho absoluto, conteudo dentro dele,
                                                  // flag: para apagar e deixar apenas oque estmaos criando