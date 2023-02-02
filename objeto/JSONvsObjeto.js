const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c}}
console.log(JSON.stringify(obj))


// Json são arquivos textuais não armazenam funçoes e naõ fazem calculo por iso  a  função foi excluida

// a linhas a seguir causaram erro não deve ser usado esse padrão caso um senario ao contrario

//console.log(JSON.paser("{ a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))  

// o padrão correto

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

// tudo que é possivel fazer com JSON

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))