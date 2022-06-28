
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const form = document.querySelector('#form');
const mostrarImc = document.querySelector('#setImc');

form.addEventListener('submit', function(e) {
    e.preventDefault()
})

function btnCalcular(){
    const pesoImc = Number(peso.value);
    const alturaImc = Number(altura.value);

    
    const imc = pesoImc / (alturaImc * alturaImc);

    if(imc < 18.5){
        console.log("Abaixo do peso")
    } else if(imc >= 18.5 && imc <= 24.9){
        console.log("Peso normal")
    }

    
}


