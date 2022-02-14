//Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantida de letras : ${textSize}`);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log ('\nArray com as posições separadas pelo delimitador:', splittedText);

//Busca um valor e substitui por outro
const replacedText = 'Texto'.replace('Text','testand');
console.log('\nSubstituição de valor:',replacedText);

//Retonar a fatia de um valor
const lastchar = 'Texto'.slice(-1);
console.log('\nUltima letra de uma string:',lastchar);

const allWithoutLastChar = 'Texto'.slice(0,-1);
console.log('\nDa primeira até a penultima letra de uma string:',allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nSegunda letra até a ultima:',secondToEnd);

//Retonar N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Testando'.substr(0,2);
console.log('\nAs duas letras primeiras letras são:',twoCharsBeforeFirstPos);
