// Protótipo é o termo uasdo para se rreferir ao que foi criado
// pela primeira vez, servindo de modelo ou modelo para futuras producoes.Protótipo

// Todos os objetos tem uma referencia interna para um prototipo(__proto__)
// que vem da propriedade prototype da funcao construtora que foi usada para
// cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro
// no proprio objeto e depois a cadeia de prototipos é usada ate o topo(null) ate encontrar(ou nao)
// tal membro

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
} 

const pessoa1 = new Pessoa('Luiz', '0.')