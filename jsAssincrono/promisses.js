function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){

    return new Promise((resolve, reject) => { 
        if(typeof msg !== 'string') reject ('badvalue')
        //resolve -> resolve o codigo. reject -> rejeita o codigo
       
        setTimeout(() =>{
            resolve(msg)
        }, tempo)
    });
    }


// then -> execurado dps da acao do resolve
//cath -> execurado dps da acao de reject

esperaAi('frase 1', rand(1, 3))
    .then(resposta => {
    
        console.log(resposta)
        return esperaAi('frase2', rand(1,3))
    }).then(resposta => {
       return resposta + 'vai p outro then';
    }).then(resposta => {
        console.log(resposta)
        return esperaAi('frase 3', rand(1,3))
    }).then(resposta => {
        console.log(resposta)
    }).catch(e => {
        console.log(434343, e)
    })
