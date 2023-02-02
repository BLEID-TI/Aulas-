console.log(typeof Array, typeof new Array, typeof [])

/// um array em JavaScript é um objeto que trabalha de forma indexada onde o primeiro indice é o 0 , 1 , 2 , 3 ....
// não existe uma restrição para um tipo de dado de u array por JS ser fracamente tipada 
// um arrray pode conter numeros , strings , boleanos os mais diverso tipode de dados 
// a boa pratica diz que temos que trabalhar com dados do mesmo tipo não misturar o dados para conseguir 
// recuperalos mais rapidos 


// forma não muito recomendada de criar um array 

let aprovados = new Array ('Bia', 'Carlos', 'Ana')

console.log(aprovados);

// forma mais recomendada é a nptação literal

aprovados = ['Bia', 'Fernanda', 'Ana']

console.log(aprovados[0]) // acessando o primeiro elemento do array
console.log(aprovados[1]) // acessando o segundo elemento do array
console.log(aprovados[2]) // acessando o terceiro elemento do array
console.log(aprovados[3]) // acessando um elemento inexistente (em outras liguagens retornaria um erro)
// por padrão JS retorna undefined

// foma mais comum de subistituir um elemento que já existe 

aprovados[3] = 'Paulo'
console.log(aprovados[3])

// forma mais aprorpiada para adiocionar um novo elemento no array 
aprovados.push("Abia") 

// forma mais comum de sabeer o tamanho do array 

console.log(aprovados.length)

// o ultimo elemento do nosso array é o 4 porem é possivel pular casas e adicionar um elemto no indice 9 por exemplo 
// os indices não definidos por padrão terão valores undefined 

aprovados [9] = 'Amanda'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

// visualização final 
console.log(aprovados);


// metodo de organizar o array original (existem metodos que criam novos arrays sem alterar o original)

aprovados.sort()
console.log(aprovados)

// excluido um elemento de un array com função delete

delete aprovados[1]
console.log(aprovados[1]) // passou a assumi o valor undefined
console.log(aprovados[2])


// função spice serve para adicionar ou até mesmo remover um elemeto do array 
aprovados = ['Bia', 'Fernanda', 'Ana']
aprovados.splice(1 , 2 , 'elemento1', 'elemento2') 
// splice('apartir do indice do elemento a ser deletado', 'quantidade de elementos a serem deletados' , 'elementos adicionados' ...)
console.log(aprovados)

// caso não queira excluir nenhum elemento porem que adiconar elemetos apartir do indice 1
aprovados = ['Bia', 'Fernanda', 'Ana']
aprovados.splice(1 , 0 , 'elemento1', 'elemento2') 
console.log(aprovados)