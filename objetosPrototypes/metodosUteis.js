/**  Object.keys (retorna as chaves)

object.freeze (congela o objeto e objeto nao pode ser alterado)
object.defineProperties ( define varias propriedades)
object.defineProperty(define uma propriedade)
**/



// Copiando as propriedades de um Objeto para outro objeto
const produtoSpread = { nome: 'Produto', preco: 1.8}
const canecaSpread = {
    ...produtoSpread, // copiamos para produto tmb
    canecaSpread: 'porcelana'
} 

canecaSpread.preco = 1.70
console.log(canecaSpread)
console.log(produtoSpread) 




//Object.assign --> Copiando o objeto
const produtoAssign = { nome: 'Produto', preco: 1.8}
const canecaAssign =  Object.assign({}, produto, {material : 'porcelana'})
canecaAssign.preco = 1.70

console.log(canecaAssign)
console.log(produtoAssign)



//Object.getOwnPropertyDescriptor 
const produtoPropertyDescriptor  = {nome: 'Produto', preco : 1.8};
Object.defineProperty(produtoPropertyDescriptor , 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});

console.log(Object.getOwnPropertyDescriptor(produtoPropertyDescriptor , 'nome'))
console.log(produtoPropertyDescriptor )
 
 


// Object values  onde le o valor da chave 
const produtoValues = {nome: 'Produto', preco : 1.8};
console.log(Object.keys(produtoValues))

 
//Object keys onde le a chave
const produtoKeys = {nome: 'Produto', preco : 1.8};
console.log(Object.keys(produtoKeys))
 