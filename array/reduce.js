const alunos = [
    {nome: 'joao',  nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
    
]


// o metodo reduce pega os dois valores iniciais e é trabalhado de alguma forma e o resultado pode ser passado no proximo idice do array ]
// nessse exemplo pegamos o valor de nota e somamos com a seguinte e é acumulado no array seguinte o resultado e somado com o proximo ate percorrer todo array
// no ultimo console pegamos o resultado final 
// podemos passar um valor inicial antes de percorrer o array
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
} ,10 ) // valor inicial 10

console.log(resultado)