Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for (let i = 1 ; i< this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this ) //indice atual, indice, o arrary o resultado volta pro acumulador 
    }
    return acumulador
}

// testando 

const soma = (total ,valor ) => total+valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma));


// com valor inicial

Array.prototype.reduce3 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial ; i< this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this ) //indice atual, indice, o arrary o resultado volta pro acumulador 
    }
    return acumulador
}

// testando 

const soma1 = (total ,valor ) => total+valor
const nums1 = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce3(soma1, 21)); // passando um valor inicial 21 somando o resultado 42




