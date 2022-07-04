//Array construtor
//const nomes = new Array['ana', 'bia', 'lia']

// criando um Array Literal
const fruits = ['banana', 'maca']
console.log(fruits.length)

//Acessando um item da lista
console.log(fruits[0])

//Acessando o ultimo item da lista
const lastFruits = fruits[fruits.length - 1];
console.log(lastFruits)

//Iterando um Array

fruits.forEach(function (item, indice, array){
    console.log(item, indice)
})

//Adicionado um item ao final do Array
const add = fruits.push('laranja');
//banana,maca, laranja

//Remover um item do final do Array
const last = fruits.pop();
console.log(fruits)
//[ 'banana', 'maca' ]

//Adicionar ao inicio do Array
const add2 = fruits.unshift('morango')
console.log(fruits)
//[ 'morango', 'banana', 'maca' ]

//Procutar o indice de um item na array
fruits.push('manga')
const pos = fruits.indexOf('laranja')
console.log(pos)
//-1


//Remover um item pela posicao do indice
const removedItem = fruits.splice(pos, 1)
console.log(fruits)



//Remover itens de uma posicao de indice
const vegetais = ['repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais) //[ 'repolho', 'Nabo', 'Rabanete', 'Cenoura' ]


const posVegetais = 1, n = 2;

const itensRemovidos = vegetais.splice(pos, n);
// Forma certa de remover itens, o n define a qt de itens 
//a serem removidos

console.log(vegetais) // [ 'repolho', 'Nabo', 'Rabanete' ]

console.log(itensRemovidos) //[ 'Cenoura' ]





//Copiar um array
const copy = fruits.slice()
