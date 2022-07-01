// funcao construtora -> objetos
// construtora -> pessoa (new)

function Pessoa(nome, sobrenome){

    //Atributos ou metodos privados
    const ID = 12345;
    const metodoInterno = function() {};

    //Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + 'sou um metodo')
    }
}

const p1 = new Pessoa('helen', 'souza')
const p2 = new Pessoa('helen2', 'souza2')

p1.metodo()
console.log(ID)