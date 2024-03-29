//crossorigin -> para trabalhar com servidores diferentes
//.then se der certo. catch se nao der certo


const cep = document.querySelector("#cep")

const showData = (result) => {
    for(const campo in result){
        if(document.querySelector("#" + campo)){ //exiba o campo se ele existir
           document.querySelector("#" + campo).value = result[campo]
        }
        
    }
}


cep.addEventListener('blur', (e) => {
    let search = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => { response.json()
    .then(data => showData(data))
    })
    .catch(e => console.log('deu erro' + e.message))
    
})