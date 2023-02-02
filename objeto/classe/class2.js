class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome // setando sobrenome 

    }
}


// forma de difinir que outra class tem um prototipo 
class Pai extends Avo {
    constructor (sobrenome,profissao = 'Professor') {
        super(sobrenome) // chamando a função de herança do avo 'sobrenome'
        this.profissao = profissao // setando profissão 
    }
}

class Filho extends Pai {
    constructor(){
        super('silva')
    }

}

// extanciando filho 

const filho  = new Filho
console.log(filho)