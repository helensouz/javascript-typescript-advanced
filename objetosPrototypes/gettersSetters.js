// maneira de proteger a propriedade
// DefineProperty - defineProperties
// get -> pegar uma info
// set -> configura, editar, alterar 

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //estoque é privado mas sera mostrado  no console, foreach e etc
        configurable: true, //configuravel
        get nome(){
            return this.nome;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
            throw new TypeError('Mensagem');
            }

            estoquePrivado = valor;

        }
    })
}

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    };
}

// const p1 = new Produto('camiseta', 20, 31)
// console.log(p1);
// p1.estoque = " o valor que eu quero"
// console.log(p1.estoque)

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa'
console.log(p2.nome)
