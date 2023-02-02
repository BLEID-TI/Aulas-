// cadeia de prototipo (protype chain)
Object.prototype.att0 = 0 //não fazer isso pode manipular toda a estrutura
const avo = {att1: 'A'}
const pai = {__proto__: avo, att2: 'B', att3:'D'}
const filho = {__proto__: pai, att3: 'C'}

console.log(filho.att0, filho.att1, filho.att2, filho.att3 );

const carro ={
    velAtual :0 ,
    velMaxima: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMaxima) {
            this.velAtual += delta
        }
        else {
            this.velAtual = this.velMaxima
        }
    },
    status (){
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`
    }
}


const ferrari = {
    modelo : 'F40',
    velMaxima: 324 //shadoing (sobreamento)
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100)
console.log(volvo.status());

ferrari.acelerarMais(300)
console.log(ferrari.status());