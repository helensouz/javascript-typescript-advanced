// function funcao(){
//     console.log(arguments) // sustenta todos os argumentos passados
// }

// funcao('valor', 1, 2, 4)



// function funcao(a, b, c, d, e, f){
//     console.log(a, b, c, d, e, f)
// }
// funcao(1, 2, 3, 4) //<- passamos o argumento 
// //1 2 3 4 undefined undefined

// function funcao(a, b){
//     console.log( a + b);
// }

// funcao(2, 4)

//Atribuicao via desestruturacao
// function funcao({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade)
// }
// let obj = {nome : 'helen', sobrenome: 'souza', idade: 20}
// funcao(obj)




//Atribuicao via desestruturacao de array
// function funcao([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3)
// }
// let array = [1, 3, 3]
// funcao(array)






// function conta(operador, acumulador, ...numeros){ // tudo dps de acumulador vai estar dentro de numeros/ deve ser o ultimo
//    for(let numero of numeros){
//    if (operador === '+') acumulador += numero;
//    if(operador === '-') acumulador -= numero;
//    if(operador === '*') acumulador *= numero;
//    if(operador === '/') acumulador /= numero;
   
//    }

//    console.log(acumulador)
    
// }

// conta('+', 1, 20, 30)




// const conta = (operador, acumulador, ...numeros) => {
//     console.log(operador, acumulador, numeros)
// }
 
//  conta('+', 1, 20, 30)