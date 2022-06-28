const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let numero of numeros){

    if(numero === 2){
        console.log("parei em 2 e estou continuando")
        continue
        
    }else if(numero === 8){
        console.log("parei aqui")
        break
        
    }

    console.log(numero)
}