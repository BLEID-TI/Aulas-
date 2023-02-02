const alunos = [
    {nome: 'joao',  nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: false},
    
]


// desafio 1 todos os alunos são bolsistas?


const resultado = alunos.map(a => a.bolsista).reduce((acumulador, atual) => acumulador && atual);
if (resultado) {
    console.log('Todos os alunos são bolsistas');
} else {
    console.log('Todos os alunos não são bolsistas');
}

// desafio 2 algum aluno é bolsita?

const resultado2 = alunos.map(a => a.bolsista).reduce((acumulador, atual) =>acumulador || atual);
if (resultado2) {
    console.log('algum aluno é bolsita');
} else {
    console.log('algum aluno não é bolsita');
}