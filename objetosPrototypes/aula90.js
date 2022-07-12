// DefineProperty - defineProperties

function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //estoque é privado mas sera mostrado  no console, foreach e etc
        value: estoque, // valor
        writable: true ,// se o valor pode ser alterado
        configurable: true //configuravel
    })

    Object.defineProperties(this, {
        nome: {
        enumerable: true, //estoque é privado mas sera mostrado  no console, foreach e etc
        value: estoque, // valor
        writable: true ,// se o valor pode ser alterado
        configurable: true //configuravel
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    })

  

}

const p1 = new Produto('camiseta', 20, 31)
console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave)
}
