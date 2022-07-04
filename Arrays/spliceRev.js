let cores = ['verde', 'amarelo', 'azul', 'roxo'];
cores.splice(0, 3);
console.log(cores); // ["roxo"]


//Adicao de itens
let agenda = ['Eu', 'tenho', 'um', 'compromisso', 'com'];
// adiciona 3 novos elementos ao array
agenda.splice(5, 0, 'alguns', 'clientes', 'amanhã');
console.log(agenda); 
// ["Eu", "tenho", "um",