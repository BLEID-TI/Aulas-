//continue esse codigo 

Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
    
    const carrinho = [
        '{"nome": "Borracha", "preco": 3.45}' , //formato jason
        '{"nome": "caderno", "preco": 15.3}' ,
        '{"nome": "kit Lapis", "preco": 41.42}' ,
        '{"nome": "Caneta", "preco": 7.5}' ,
    
    ]
    
    
    const paraObjeto = json => JSON.parse(json)
    const apenasPreco = produto => produto.preco
    
    const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
    
    console.log(resultado)
    
    
    