var nome = prompt('Qual seu nome?');
var idade = prompt('Qual sua idade?');

if (idade >= 0 && idade <=15) {
    document.write(`Olá ${nome}, voce é criança`)
} else if(idade > 15 && idade <=30){
    document.write(`Olá ${nome}, voce é jovem`)
} else if(idade > 30 && idade <=60){
    document.write(`Olá ${nome}, voce é adulto`)
}else{
    document.write(`Olá ${nome}, voce é idoso`)
}