class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado ){
            console.log(this.nome + " ligado");
            return
        }

        this.ligado = true
    }

    desligar(){
        if(!this.ligado ){
            console.log(this.nome + " ja desligado");
            return
        }

        this.ligado = false
    }
}

//extends fez com que o Smartphone herdou tudo de DispositivoEletronico
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome) //super é a classe pai
        this.cor =  cor;
        this.modelo = modelo
    }
}


const s1 = new Smartphone('iphone', 'branco', '10')
console.log(s1)

class Fone extends DispositivoEletronico{
    constructor(nome,marca, modelo, cor){
        super(nome)
        this.marca = marca
         this.modelo = modelo;
        this.cor = cor
    }

}

const f1 = new Fone('fone s6','headdips', 'new model', 'preto' )
console.log(f1)
