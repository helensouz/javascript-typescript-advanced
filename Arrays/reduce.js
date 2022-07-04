//Reduz um array para um elemento só

// const numeros = [5, 50, 80, 90, 220, 5, 7, 3, 77, 345]
// const total = numeros.reduce(function(acumulador, valor, indice, array){
    
//         if(valor % 2 === 0) acumulador += valor;
//         return acumulador
    
// }, [])

// console.log(total)


//Exemplo 2
// Retorne a pessoa mis velha
const pessoas = [
    {nome: 'Helen', idade: 20},
    {nome: 'Maria', idade: 67},
    {nome: 'Eduardo', idade: 30},
    {nome: 'Leticia', idade: 15},
    {nome: 'Rosana', idade: 32},
    {nome: 'Eder', idade: 47}
];

const total = pessoas.reduce(function(acumulador, valor){
   if(acumulador.idade > valor.idade) return acumulador;
   return valor;
})

console.log(total)