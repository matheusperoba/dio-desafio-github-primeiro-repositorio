var nota = prompt('Qual a nota do aluno?')
var faltas = prompt('Quantas faltas o aluno tem?')
var media = 7


/*if (nota >= media && faltas < 15){
    document.write("Aluno aprovado!");
}
else if (nota < media && nota >= 5)
{
    document.write("Aluno em recuperação!");
}
else if (nota > 10){
    document.write("Digite uma nota valida");
}
else{
    document.write("Aluno reprovado!");
}*/

var resultado = (nota >= media && faltas < 15)?'Aprovado': 'Reprovado'
 
    document.write(resultado)
    