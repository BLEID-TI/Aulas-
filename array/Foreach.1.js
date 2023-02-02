// lista de aprovados 

const aprovados = ['Agatha' , 'Beatriz', 'Ana',  'Pedro']

// metodo forEach utilizado para percorrer os elementos 

// passando um call back pra cada indice do elemento percorrido 

// na função é passado o prorpio elemento como parametro e o indice do elemento que esta sendo execudado no momento

aprovados.forEach(function(nome, indice){
    console.log(`${indice +1} ) ${nome}`)
})

// para cada elemento do array essa função será chamada 

// é possivel asicionar somente um elemento sem passar atributos na função 

//forEach com ArrowFunction
aprovados.forEach(nome => console.log(nome))


// podemos passar a função forEach com uma função pre definida 

const exibirAprovados = aprovado => console.log("1 "+aprovado)
aprovados.forEach(exibirAprovados)