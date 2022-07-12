const falar = {
    falar(){
        console.log(`${this.nome} esta falando`)
    },
}
const comer = {
    comer(){
        console.log(`${this.nome} esta comendo`)
    },
}
const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo`)
    },
}
//fazendo a copia
const pessoaPrototype = { ...falar, ...comer, ...beber
}
//ou
// const pessoaPrototype = { Object.assign({}, falar, comer, beber)
// }




function criaPessoa(nome, sobrenome){
 
    return Object.create(pessoaPrototype, {
        nome: {
            value: nome
        },
        sobrenome: { 
            value: sobrenome
        }
    })
}

const p1 = criaPessoa('helen', 'souza')
const p2 = criaPessoa('maria', 'maria')
p2.comer()

