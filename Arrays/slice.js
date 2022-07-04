//Ele retorna subarrays em vez de substrings.

let numeros = [1, 2, 3, 4]
numeros.slice(0, 3)
// retorna [1, 2, 3]
console.log(numeros) 

let mensagem = 'congratulations'
const abbrv = mensagem.slice(0, 7) + 's!'; 
console.log(abbrv)