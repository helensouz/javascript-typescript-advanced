//escopo lexico

const external = () => {
    const book = 'nome do livro'


    const internal = () => {
        console.log(book)
    }
    
    // podemos acessar as variaveis somente dentro do esccopo pai
    internal()
}

external()