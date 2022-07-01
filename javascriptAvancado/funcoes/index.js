


// FIrst class objects (objetos de primeira classe)
//podemos tratar as funcoes como se fossem dados
// expressao expression
// uma constante recebe uma funcao como um dado, e tratamos dessa constante
// como se fosse uma funcao

 const souUmdado = function (){
     console.log("sou um dado")
 }


function executaFuncao(funcao){
    funcao()
}

executaFuncao(souUmdado)

//arrow function 
const arrow = () => {
    console.log('executa arrow')
}

arrow();

