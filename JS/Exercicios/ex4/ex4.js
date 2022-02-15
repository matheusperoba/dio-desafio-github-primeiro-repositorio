var nome = prompt('Digite seu nome')
var altcm = prompt('Digite sua altura em CM')
var peso = prompt('Digite o seu peso')
var altmt = altcm/100
var masscorp = peso/(altmt**2)
var classif = null

if (masscorp<16){
    classif = 'Baixo peso muito grave'
} else if( masscorp>=16 && masscorp < 17 ){
    classif = 'Baixo peso grave'
    
} else if (masscorp>=17 && masscorp < 18.5){
    classif = 'Baixo peso'
    
} else if (masscorp>=18,5 && masscorp < 25){
    classif = 'Peso normal'
    
} else if (masscorp>=25 && masscorp < 30){
    classif = 'Sobrepeso'
    
} else if (masscorp>=30 && masscorp < 35){
    classif = 'Obesidade grau 1'
    
} else if (masscorp>=35 && masscorp < 40){
    classif = 'Obesidade grau 2'
    
} else{
    classif = 'Obesidade grau 3'
    
}
var masscorptofx = masscorp.toFixed(2)
prompt(`${nome} possui um indice de massa corporal igual a = ${masscorptofx}, sendo classificado como : ${classif}`)