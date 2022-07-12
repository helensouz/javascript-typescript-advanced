class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }


    falar(){
        console.log(`${this.nome} esta falando`)
    }

    comer(){
        console.log(`${this.nome} esta comendo`)
    }

    beber(){
        console.log(`${this.nome} esta bebendo`)
    }
}


//usando funcao construtora
function Pessoa2(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}



const p1 = new Pessoa('helen', 'fdfdf')
p1.comer()