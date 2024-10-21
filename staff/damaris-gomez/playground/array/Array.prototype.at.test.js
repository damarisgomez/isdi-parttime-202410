console.log('TEST Array.prototype.at')
//'case get ELEMENT at index 3'// 
console.log('CASE get car at index 3')

// var cars = ['lambo', 'f350','911', 'm5', 'hummer'] es un atajo//
//lo que realmente se ve por dentro: // 
/* [array]
      length: 0
      Prototyoe
 */
var cars = new Array
cars[0] = 'lambo'
cars[1] = 'f350'
cars[2] = '911'
cars[3] = 'm5'
cars[4] = 'hummer'
var car = car.at(3)
console.log(car)
//m5

function Dorraymon() {
    this.length = 0
}

console.log('TEST Dorraymon.prototype.at')

console.log('CASE get car at index 3')

var cars = new Array
cars[0] = 'lambo'
cars[1] = 'f350'
cars[2] = '911'
cars[3] = 'm5'
cars[4] = 'hummer'
cars.length = 5
var car = cars
