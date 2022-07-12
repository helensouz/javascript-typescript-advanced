class ControleRemoto{
    constructor(tv, nome){
        this.tv = tv
        this.nome = nome
        this.volume = 0
    }

    aumentarVolume(){
        this.volume += 2
    }

    diminuirVolume(){
        this.volume -= 2
    }

    //metodo estatico
    //funcao que esta dentro da classe
     static soma(x, y){
        return x + y
     }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)


//instanciando de uma forma estatica
console.log(ControleRemoto.soma(2, 3));
