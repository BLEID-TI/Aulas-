const Produtos = [
    {nome: 'Notbook' , preco: 2499 , fragil: true} , 
    {nome: 'iPad' , preco: 4199 , fragil: true } ,
    {nome: 'Copo de Vidro' , preco: 12.49 , fragil: true } ,
    {nome: 'Copo de Plastico ' , preco: 18.99 , fragil: false} ,
]

console.log(Produtos.filter(function(p){
    return false
}));

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(Produtos.filter(caro).filter(fragil))