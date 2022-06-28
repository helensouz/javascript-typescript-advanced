/**
 * Escreva uma funcao que recebe um numero e 
 * retorne o seguinte:
 * numero é divisivel por 3 = fizz
 * divisivel por 5 = buzz
 * é divisivel por 3 e 5 == buzzfizz
 * nao é divisel por 3 e 5 = retorna o proprio numero
 * checar se o numero é realmente um numeor
 * usar a funcao com numeros de 0 a 100
 */

// function div(fizz, buzz, buzzfizz){

//     if(fizz / 3 ){
//        return true
//     }else if(buzz / 5){
//         return true
//     }else if(buzzfizz / 3 || buzzfizz / 5){
//         console.log("divisel pelos 2 ")
//     }else{
//         console.log(fizz, buzz, buzzfizz)
//     }
// }

// console.log(div(3, 10, 25))

function fizzBuzz(numero){
    if (numero % 3 === 0){
        return 'Fizz'
    }else if(numero % 5 === 0){
        return 'buzz'
    }else if(numero % 3 && numero % 5 === 0){
        return numero
    }
}

for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}