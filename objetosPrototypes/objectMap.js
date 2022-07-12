const pessoas = [
   { id: 3, nome: 'luiz', idade: 20},
   { id: 2, nome: 'maria', idade: 19},
   { id: 1, nome: 'helen', idade: 18},
]

const novasPessoas = new Map();
for(const pessoa of pessoas){ 
    const { id} = pessoa;
    novasPessoas.set(id, { ...pessoa})
}

novasPessoas.delete(2)
console.log(novasPessoas)