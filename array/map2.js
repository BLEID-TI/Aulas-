const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}' , //formato jason
    '{"nome": "caderno", "preco": 15.3}' ,
    '{"nome": "kit Lapis", "preco": 41.42}' ,
    '{"nome": "Caneta", "preco": 7.5}' ,

]

//retornar um array apenas com os preços 

// metodo map 

// primeiro usei o metodo Jason.parse() para converter cada string jason em um objeto javaScript

// segundo usei o metodo map() para interar sobre o array e extrair o preço de cada objeto 

const precoArray = carrinho.map(item => {
    const obj = JSON.parse(item);
    return obj.preco
})

console.log(precoArray)

// o mrsmo para nome 
const nomeArray = carrinho.map(item => {
    const obj = JSON.parse(item);
    return obj.nome
})

console.log(nomeArray)