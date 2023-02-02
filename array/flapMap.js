const  escola = [{
    nome: 'Turma Manhã1',
    alunos: [{
        nome:'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota:9.3

    }] 
} , {
    nome: 'Turma Manhâ2',
    alunos: [{
        nome:'Rebeca',
        nota: 8.9
    }, {
        nome: 'roberto',
        nota:7.3

    }] 
}]

// Objetivo estrair todas as notas dos alunos e armazenar no array


const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)

console.log(notas1);    

// pegando o exemplo da aula anterior e adicionando os resultados 

console.log([].concat([8.1, 9.3], [8.9, 7.3]))


// metodo FlatMap peegando o array matrix axatando e tornando em um unico igual o exemplo acima

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const Notas2 = escola.flatMap(getNotaDaTurma)

console.log(Notas2);