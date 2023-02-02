Array.prototype.forEach2 =function(callback){  // função call back
    for (let i = 0; i < this.length; i++){  // laço for onde indice = 0 , tudo e temanho for menor que indice ; incrementa indice
        callback(this[i] , i , this) // função callback indice atual, valor atual, array completo
    }

}



const aprovados = ['Agatha' , 'Beatriz', 'Ana',  'Pedro']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice +1} ) ${nome}`)
})