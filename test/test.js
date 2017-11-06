const expect = require('chai').expect
const Carlonator = require('..').default

describe('#carlonator', function(){

    it('sumar', function(){
        const operation = new Carlonator;
        const result = operation.sumar(2,3)

        expect(result).to.equal(5)
    })

    it('restar', function(){
        const operation = new Carlonator;
        const result = operation.restar(5,2)

        expect(result).to.equal(3)
    })

    it('multiplicar', function(){
        const operation = new Carlonator;
        const result = operation.multiplicar(2,3)

        expect(result).to.equal(6)
    })

    it('dividir', function(){
        const operation = new Carlonator;
        const result = operation.dividir(10,5)

        expect(result).to.equal(2)
    })

    /*if('restar', function(){

    })

    if('multiplicar', function(){

    })

    if('dividir', function(){

    })*/

})
