/*Promisse.all 
promisse.race -> a primeira promisse a ser resolvida ele entrega o valor
promisse.resolve
promisse.reject
*/
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){

    return new Promise((resolve, reject) => { 
        
        //resolve -> resolve o codigo. reject -> rejeita o codigo
       
        setTimeout(() =>{
            if(typeof msg !== 'string') {
                reject ('cai no erro')
                return
            }
        
            resolve(msg.toUpperCase() + 'resolveu a promisse')
        }, tempo)
    });
    }

const promisses = [
    esperaAi(1000, rand(1,5)),
    esperaAi('promisse 1', rand(1,5)),
    esperaAi('promisse 2', rand(1,5)),
    esperaAi('promisse 3', rand(1,5)),
   
]

Promise.race(promisses).then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log(erro)
})


function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('pagina em cache')
    }else{
        return esperaAi('baixri a pagina', 3000)
    }
}


baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e => console.log(e))