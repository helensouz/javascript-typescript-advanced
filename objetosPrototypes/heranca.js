
//camiseta - cor, caneca = material
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

//metodos sao escritos fora da funcao
Produto.prototype.aumento = (quantia) => {
    this.preco += quantia;
}

Produto.prototype.desconto = () => {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // linkando com produto
Camiseta.prototype.constructor = Camiseta 

Camiseta.prototype.aumento = (percentual) => {
    this.preco = this.preco + (this.preco * (percentual / 100))
};

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material

    //getter e setter

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            return valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca

const produto = new Produto('gen', 111)
const camiseta = new Camiseta('Regata', 7.4, 'Preta')
const caneca = new Caneca('caneca', 1.8, 'porcelana', 5)
console.log(camiseta)
console.log(produto)
console.log(caneca)
