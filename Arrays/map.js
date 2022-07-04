//usamos para alterar algum elemento do array


const pessoas = [
    {nome: 'Helen', idade: 20},
    {nome: 'Maria', idade: 67},
    {nome: 'Eduardo', idade: 30},
    {nome: 'Leticia', idade: 15},
    {nome: 'Rosana', idade: 32},
    {nome: 'Eder', idade: 47}
];

const idades = pessoas.map(obj => ({  idade: obj.idade }));

const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj}
    newObj.id = indice;
    return obj
})

console.log(idades)
console.log(comIds)