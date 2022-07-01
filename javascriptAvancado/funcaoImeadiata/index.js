/* IIFE -> Immediately invoked function expression

Nao teremos conflito e nao precisa chamar a funcao
fora do escopo.
Tecnicamente o codigo esta sendo PROTEGIDO.

*/

(function(idade, peso, altura) {
    
    const sobrenome = 'souza'
    function createName(nome){
        return nome + ' ' + sobrenome;
    }

    function sayName(){
        console.log(createName('Helen'))
    }

    sayName();
    console.log(idade, peso, altura)
})(20, 53, 1.70);