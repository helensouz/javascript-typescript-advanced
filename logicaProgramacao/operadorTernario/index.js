//(condicao) ? 'Valor para verdadeiro ' : 'Valor para falso'

const pontuacaoUsuario = 800;
const nivelUsuario = pontuacaoUsuario <= 1000 ? ' usuario normal ' : ' usuario vip ';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);