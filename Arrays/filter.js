// Filter() retorna um array com a mesma qt de elementos

//EXEMPLO 1
// function isBigEnough(value){
//     return value >= 10;
// }

// var filtered = [12, 5, 8, 130, 4, 7, 55].filter(isBigEnough)

// console.log(filtered)
//[ 12, 130, 55 ]



//EXEMPLO 2

 const numeros = [5, 50, 80, 90, 220, 5, 7, 3, 77, 345]

 const filtrado = numeros.filter((value) => {
     return value >= 10;
 })
 console.log(filtrado)


//EXEMPLO 3
const pessoas = [
    {nome: 'Helen', idade: 20},
    {nome: 'Maria', idade: 67},
    {nome: 'Eduardo', idade: 30},
    {nome: 'Leticia', idade: 15},
    {nome: 'Rosana', idade: 32},
    {nome: 'Eder', idade: 47}
];

const pessoasComNomeGrande = pessoas.filter(obj =>  obj.nome.length >= 5)
const pessoasAcima21Anos = pessoas.filter(obj2 => obj2.idade >= 21)
console.log(pessoasComNomeGrande)
console.log(pessoasAcima21Anos)