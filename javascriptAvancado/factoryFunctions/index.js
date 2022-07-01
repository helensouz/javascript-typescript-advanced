/**
 * Funcoes de fabrica
 */

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} esta ${assunto}`
        }, 
        altura: a,
        peso: p,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Luix', 'souza', 1.7, 50)
console.log(p1.nome);
console.log(p1.imc())
