const pai = {nome: 'Pedro', corCabelo: 'preto',}

const filha1 = Object.create(pai)
filha1.nome = 'ana'

console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value:'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


for (let key in filha2) {
    console.log(key );
}

// for in percorrendo propriedade filha 2 e vendo qual elemento veio por herança
for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log (`Por Herança: ${key}`)
}