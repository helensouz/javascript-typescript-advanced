// Funcao que se chama de volta

function recursiva(max){
    if (max > 500) return;
    max ++
    console.log(max)
    recursiva(max)
}

recursiva(0)