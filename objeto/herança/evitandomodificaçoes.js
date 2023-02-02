//Object.preventExtetions vc não consegue adicionar novos atributos ao objeto

const produto = Object.preventExtensions({
    nome:'Qualquer', preco:1.99 , tag:'promoção'
})

console.log('Extensivel', Object.isExtensible(produto)) //função pra testar objeto

produto.nome = 'borracha'
produto.descrição = 'borracha escolar branca'
delete produto.tag

console.log(produto)

// visto que conseguimoas alterar  o nome do objete não os atributos 


// Object.seal (selar)

const pessoa = {nome:'Juliana', idade:35} 
Object.seal(pessoa)

// selando o objeto não conseguimos adicionaar ou excluir novos atributos, mas
// é possivel alterar os valores dos atributos 

pessoa.nome = 'Amanda'
pessoa.idade =23
delete pessoa.nome
pessoa.endereço = "itapevi"

console.log(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // verificando se o objeto está selado

// Object.freeze = selado + valores constantes