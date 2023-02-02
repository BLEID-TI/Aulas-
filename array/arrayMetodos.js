// uma lista de pilotos com 4 elementos 
const pilotos = ['Alonso', 'Vettel', 'Raikkonei', 'Massa']
console.log(pilotos)
// não é possivel atribuir nada a constante pioto mas o conteudo do array é alteravel


// metodo pop remove o ulltimo elemento do array
pilotos.pop() //massa quebrou o carro !!!
console.log(pilotos)

// metodo push adiciona um novo elemento na ultima posição do array
pilotos.push('Vertappen')
console.log(pilotos)

// metodo pop remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

// metodo unshifit adiciona um novo elemento na primeira posição do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// metodo splice podemos adicionar e remover elementos 
// splice('apartir do indice do elemento', 'quantidade de elementos a serem deletados' , 'elementos adicionados' ...)


// adicionar 
pilotos.splice( 2, 0 , 'Bottas', 'Massa')
console.log(pilotos)

// remover 
pilotos.splice( 3, 1) // massa qubrou :(
console.log(pilotos)


// metodo slice de gerar um novo array 

const algunsPilotos1 = pilotos.slice(2) // apartir do incide 2 sera gerado um novo array
console.log(algunsPilotos1);

// slice é o mesmo que uma parte do array exemplo indice 1 até indice 3 sera gerado um novo array

const algunsPilotos2 = pilotos.slice(1 , 3 )
console.log(algunsPilotos2);